<?php

namespace App\Http\Controllers;

use App\Area;
use App\Weekly;
use App\Classroom;
use App\Customer;
use App\CustomerCredits;
use App\CustomerCreditsMovement;
use App\CustomerInvoice;
use App\CustomerInvoiceItem;
use App\CustomerInvoiceItemArea;
use App\CustomerInvoiceItemTutorial;
use App\CustomerInvoiceItemWeekly;
use App\CustomerInvoicePayment;
use App\CustomerInvoiceResolution;
use App\CustomerPlan;
use App\CustomerPlanPrice;
use App\CustomerPlanRule;
use App\CustomerVoucher;
use App\CustomerVoucherRedemption;
use App\TutorScheduleReservation;
use App\TutorScheduleStudent;
use Illuminate\Http\Request;
use Session;
use App\User;
use App\WeeklyPlanUser;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\URL;
use Throwable;
use MercadoPago;
use PurshasedHelper;


class PurchasedController extends Controller
{


    public function payPayu(string $data_string)
    {
        try {
            $auth = Auth::user();

            if (!isset($data_string)) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, información inválida.');
            }

            $data = json_decode(base64_decode($data_string), true);


            if (!isset($data) || !isset($data['plan_id']) || !isset($data['quantity']) || !isset($data['english_id'])) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, información inválida.');
            }


            if ($data['quantity'] <= 0) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, cantidad inválida.');
            }

            $customer = Customer::where('user_id', $auth->id)->where('deleted', 0)->where('state', 1)->first();



            if (!isset($customer)) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, cliente ináctivo.');
            }

            $current_date = date('Y-m-d H:i:s');


            $plan = CustomerPlan::find($data['plan_id']);

            if (!isset($plan) || $plan->deleted) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, plan no es válido.');
            }

            if ($plan->state == 0) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, plan se encuentra inactivo.');
            }

            $plan_price = CustomerPlanPrice::where('customer_plan_id', $plan->id)->where('state', 1)->where('deleted', 0)->whereDate('initial_date', '<=', $current_date)->where(function ($query) use ($current_date) {
                    $query->where(function ($q) use ($current_date) {
                        $q->whereNotNull('expire_date')->whereDate('expire_date', '>=', $current_date);
                    })->orWhereNull('expire_date');
                })->first();

            if (!isset($plan_price)) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, no hay un plan de precios vigente para este plan.');
            }
            $total_plan = (($plan_price->value - $plan_price->discount_value) * $data['quantity']);
            $total = $total_plan;

            $take_english = isset($data['english_id']) && $data['english_id'] > 0;
            if ($take_english) {
                $plan_english = CustomerPlan::find($data['english_id']);



                $english_price = CustomerPlanPrice::where('customer_plan_id', $data['english_id'])->where('state', 1)->where('deleted', 0)->whereDate('initial_date', '<=', $current_date)->where(function ($query) use ($current_date) {
                        $query->where(function ($q) use ($current_date) {
                            $q->whereNotNull('expire_date')->whereDate('expire_date', '>=', $current_date);
                        })->orWhereNull('expire_date');
                    })->first();

                if (isset($english_price)) {
                    $total_english = (($english_price->value - $english_price->discount_value) * $data['quantity']);
                    $total += $total_english;
                }
            }




            //validation voucher
            $voucher_valid = false;
            if (isset($data['voucher'])) {

                $voucher = CustomerVoucher::where('deleted', 0)->where('state', 1)->where('code', $data['voucher'])->whereDate('start_date', '<=', $current_date)->whereDate('expire_date', '>=', $current_date)->first();

                if (!isset($voucher))  return view('purchasePlanError')->with('error', 'Cupó no es válido.');

                //validate maximum redemptions
                $redemptions = CustomerVoucherRedemption::where('customer_voucher_id', $voucher->id)->where('deleted', 0)->get();

                if ($voucher->redemption_limit > 0 && count($redemptions) >= $voucher->redemption_limit) return view('purchasePlanError')->with('error', 'Cupón ya no se puede redimir.');

                if (isset($voucher->discount_percent) && $voucher->discount_percent > 0) {
                    $voucher_value = (($total * $voucher->discount_percent) / 100);
                    $voucher_valid = true;
                } else if ($voucher->discount_value > 0) {
                    $voucher_value = $voucher->discount_value;
                    $voucher_valid = true;
                }
            }

            if ($voucher_valid) {
                $total = $total - $voucher_value;
            }


            if ($total < 0) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, la compra tiene un valor inválido.');
            }



            //add invoice
            try {
                DB::beginTransaction();

                $invoice = CustomerInvoice::create([
                    'prefix_code' => '',
                    'consecutive' => 0,
                    'customer_id' => $customer->id,
                    'sale_date' => date('Y-m-d H:i:s'),
                    'channel_sale' => 'WEB',
                    'total' => $total,
                    'customer_voucher_id' => $voucher_valid ? $voucher->id : null,
                    'customer_voucher_value' => $voucher_valid ? $voucher_value : 0,
                    'state' => 1,
                    'deleted' => 0,
                    'updated_user' => $auth->id
                ]);


                $invoice_item = CustomerInvoiceItem::create([
                    'customer_invoice_id' => $invoice->id,
                    'customer_plan_id' => $plan->id,
                    'customer_plan_name' => $plan->name,
                    'quantity' => $data['quantity'],
                    'unit_value' => $plan_price->value,
                    'discount_value' => $plan_price->discount_value,
                    'tax_percent' => 0,
                    'currency_code' => $plan_price->currency_code,
                    'tax_value' => 0,
                    'total_value' => $total_plan,
                    'deleted' => 0,
                    'updated_user' => $auth->id
                ]);



                if ($take_english) {
                    $invoice_item = CustomerInvoiceItem::create([
                        'customer_invoice_id' => $invoice->id,
                        'customer_plan_id' => $plan_english->id,
                        'customer_plan_name' => $plan_english->name,
                        'quantity' => $data['quantity'],
                        'unit_value' => $english_price->value,
                        'discount_value' => $english_price->discount_value,
                        'tax_percent' => 0,
                        'currency_code' => $english_price->currency_code,
                        'tax_value' => 0,
                        'total_value' => $total_english,
                        'deleted' => 0,
                        'updated_user' => $auth->id
                    ]);
                }


                //registramos cupon
                if ($voucher_valid) {
                    CustomerVoucherRedemption::create([
                        'customer_voucher_id' => $voucher->id,
                        'customer_invoice_id' => $invoice->id,
                        'deleted' => 0,
                        'updated_user' => $customer->user_id
                    ]);
                }
                //throw new Exception("Resolución no actualizada");

                if ($total == 0) {
                    $invoice_items = CustomerInvoiceItem::where('customer_invoice_id', $invoice->id)->where('deleted', 0)->get();

                    $resolution = CustomerInvoiceResolution::where('state', 1)->where('deleted', 0)->whereDate('initial_date', '<=', $current_date)->whereDate('expire_date', '>=', $current_date)->whereRaw('current_consecutive<end_consecutive')->first();
                    if (!isset($resolution)) throw new Exception("Resolución no actualizada");

                    $consecutive = $resolution->current_consecutive + 1;
                    CustomerInvoiceResolution::where('id', $resolution->id)->update([
                        'current_consecutive' => $consecutive
                    ]);

                    CustomerInvoice::where('id', $invoice->id)->update([
                        'prefix_code' => $resolution->prefix_code,
                        'consecutive' => $consecutive,
                        'state' => 2
                    ]);

                    foreach ($invoice_items as $k_invoice_item => $invoice_item) {

                        $plan = CustomerPlan::find($invoice_item->customer_plan_id);

                        CustomerCredits::create([
                            'customer_invoice_item_id' => $invoice_item->id,
                            'customer_id' => $customer->id,
                            'credits_quantity' => $plan->credits_quantity,
                            'credits_available' => $plan->credits_quantity,
                            'expire_date' => date('Y-m-d H:i', strtotime('+30 day')),
                            'state' => 1,
                            'deleted' => 0,
                            'updated_user' => $customer->user_id
                        ]);
                    }
                }


                DB::commit();

                if ($total == 0) {
                    Db::raw('unlock tables');
                }
            } catch (Throwable $e) {
                DB::rollback();
                return view('purchasePlanError')->with('error', $e->getMessage());
            }


            if ($total == 0) {
                return redirect('/cliente/cuenta');
            }

            $reference = "TRIKELE-" . $auth->id . "-" . $invoice->id . "-" . date('Ymd-Hi');
            $api_key = env("PAYU_API_KEY", "4Vj8eK4rloUd272L48hsrarnUA");
            $merchant_id = env("PAYU_MERCHANT_ID", "508029");
            $account_id = env("PAYU_ACCOUNT_ID", "512321");
            $is_test = env("PAYU_TEST", "1");
            $url_payu = env("PAYU_URL", "https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/");

            $signature = "$api_key~$merchant_id~$reference~$total~" . $plan_price->currency_code;
            $signature = md5($signature);




            return view('purchasePlanPayPayu')->with('data', [
                'signature' => $signature,
                'merchant_id' => $merchant_id,
                'account_id' => $account_id,
                'description' => 'Compra ' . $plan->name . '.' . ($take_english ? ' Adicional ' . $plan_english->name : ''),
                'reference_code' => $reference,
                'amount' => $total,
                'tax' => 0,
                'taxReturnBase' => 0,
                'currency' => $plan_price->currency_code,
                'test' => $is_test,
                'buyerEmail' => $auth->email,
                'responseUrl' => URL::to('/compra/pagar/resultado'),
                'confirmationUrl' => URL::to('/api/payment/confirmation'),
                'url' => $url_payu
            ]);
        } catch (Throwable $e) {
            return view('purchasePlanError')->with('error', $e->getMessage());
        }
        //message=PENDING&referenceCode=TRIKELE-318-14-20201017-1652&
        //polResponseCode=25&lapResponseCode=PENDING_TRANSACTION_CONFIRMATION&risk=&polPaymentMethod=35&lapPaymentMethod=BALOTO&polPaymentMethodType=7&lapPaymentMethodType=CASH&installmentsNumber=1&TX_VALUE=168000.00&TX_TAX=.00&currency=COP&lng=es&pseCycle=&buyerEmail=jeisson_esteban%40hotmail.com&pseBank=&pseReference1=&pseReference2=&pseReference3=&authorizationCode=&TX_ADMINISTRATIVE_FEE=.00&TX_TAX_ADMINISTRATIVE_FEE=.00&TX_TAX_ADMINISTRATIVE_FEE_RETURN_BASE=.00&processingDate=2020-10-17

    }

    public function payMercadopago(string $data_string)
    {

        try {

            $auth = Auth::user();


            if (!isset($data_string)) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, información inválida.');
            }

            $data = json_decode(base64_decode($data_string), true);


            //return view('purchasePlanError')->with('error', json_encode($data));

            if (!isset($data) || !isset($data['plan_id']) || !isset($data['quantity'])) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, información inválida.');
            }


            if ($data['quantity'] <= 0) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, cantidad inválida.');
            }

            $customer = Customer::where('user_id', $auth->id)->where('deleted', 0)->where('state', 1)->first();



            if (!isset($customer)) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, cliente ináctivo.');
            }

            $current_date = date('Y-m-d H:i:s');


            $plan = CustomerPlan::find($data['plan_id']);

            if (!isset($plan) || $plan->deleted) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, plan no es válido.');
            }

            if ($plan->state == 0) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, plan se encuentra inactivo.');
            }

            $plan_price = CustomerPlanPrice::where('customer_plan_id', $plan->id)->where('state', 1)->where('deleted', 0)->whereDate('initial_date', '<=', $current_date)->where(function ($query) use ($current_date) {
                    $query->where(function ($q) use ($current_date) {
                        $q->whereNotNull('expire_date')->whereDate('expire_date', '>=', $current_date);
                    })->orWhereNull('expire_date');
                })->first();

            if (!isset($plan_price)) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, no hay un plan de precios vigente para este plan.');
            }

            $total_plan = (($plan_price->value - $plan_price->discount_value) * $data['quantity']);
            $total = $total_plan;

            $take_english = isset($data['english_id']) && $data['english_id'] > 0;
            if ($take_english) {
                $plan_english = CustomerPlan::find($data['english_id']);



                $english_price = CustomerPlanPrice::where('customer_plan_id', $data['english_id'])->where('state', 1)->where('deleted', 0)->whereDate('initial_date', '<=', $current_date)->where(function ($query) use ($current_date) {
                        $query->where(function ($q) use ($current_date) {
                            $q->whereNotNull('expire_date')->whereDate('expire_date', '>=', $current_date);
                        })->orWhereNull('expire_date');
                    })->first();

                if (isset($english_price)) {
                    $total_english = (($english_price->value - $english_price->discount_value) * $data['quantity']);
                    $total += $total_english;
                }
            }



            //area plan
            $description = $plan->name;
            if (isset($data['area_id']) && $data['area_id'] > 0) {
                $area = Area::find($data['area_id']);

                if (isset($area)) {
                    $area->credits_quantity = Weekly::where('id_area', $area->id)->sum('credits_quantity');
                    $total = $total * $area->credits_quantity;

                    $area->classroom = Classroom::where('id_grade', $area->id_grade)->first();

                    $area_name = $area->name;
                    if (strlen($area->name) > 20) {
                        $area_name = substr($area->name, 0, 20);
                    }

                    $description = 'Área: ' . $area_name . ' grado ' . $area->classroom->name;
                } else
                    $total = 0;
            }

            //module plan
            if (isset($data['module_id']) && $data['module_id'] > 0) {
                $module = Weekly::find($data['module_id']);

                if (isset($module)) {
                    $total = $total * $module->credits_quantity;

                    $module->classroom = Classroom::find($module->id_classroom);

                    $module_driving_question = $module->driving_question;
                    if (strlen($module->driving_question) > 20) {
                        $module_driving_question = substr($module->driving_question, 0, 20);
                    }

                    $description = 'Módulo: ' . $module_driving_question . ' grado ' . $module->classroom->name;
                } else
                    $total = 0;
            }

            //tutorial plan
            if (isset($data['tutorschedulearea_id']) && $data['tutorschedulearea_id'] > 0) {

                $schedule = DB::table('tutor_schedule_area as tsa')
                    ->join('tutor_schedule as ts', 'ts.id', '=', 'tsa.id_tutorschedule')
                    ->join('tutor_area as ta', 'ta.id', '=', 'tsa.id_tutorarea')
                    ->leftJoin('area as a', 'a.id', '=', 'ta.id_area')
                    ->leftJoin('area_university as au', 'au.id', '=', 'ta.id_area')
                    ->leftJoin('grade as g', 'g.id', '=', 'a.id_grade')
                    ->where('tsa.deleted', 0)
                    ->where('ts.deleted', 0)
                    ->where('ta.deleted', 0)
                    ->where('tsa.id', $data['tutorschedulearea_id'])
                    ->select('ts.id as tutor_schedule_id', 'ts.teacher_id as teacher_id', 'ts.individual_rate as individual_rate', 'ts.grupal_rate as grupal_rate', 'ta.area_type as type', 'a.name as area_name', 'g.name as grade_name', 'au.name as area_u_name')
                    ->first();

                $total_plan = ($plan->type == 'TUTORIA_INDIVIDUAL') ? ($schedule->individual_rate * $data['quantity']) : ($schedule->grupal_rate * $data['quantity']);
                $total = $total_plan;

                $description = $plan->name.' : '.($schedule->type == 'COLEGIO'? ($schedule->area_name.' '.$schedule->grade_name) : ($schedule->area_u_name));
            }

            //tutoria student
            if (isset($data['tutorschedulereservation_id']) && $data['tutorschedulereservation_id'] > 0) {

                $tutorReservation = DB::table('tutor_schedule_reservation as tsr')
                ->join('tutor_schedule_area as tsa', 'tsr.tutorschedulearea_id', '=', 'tsa.id')
                ->join('tutor_schedule as ts', 'tsa.id_tutorschedule', '=', 'ts.id')
                ->where('tsa.deleted', 0)
                ->where('ts.deleted', 0)
                ->where('tsr.id', $data['tutorschedulereservation_id'])
                ->select('tsr.type_schedule as type_schedule','ts.individual_rate as individual_rate','ts.grupal_rate as grupal_rate','tsr.serial as reservation_serial')
                ->first();

                $total=($tutorReservation->type_schedule=='TUTORIA_GRUPAL'?$tutorReservation->grupal_rate:$tutorReservation->individual_rate);

                $description = $tutorReservation->type_schedule.' : '.$tutorReservation->reservation_serial;
            }


            //validation voucher
            $voucher_valid = false;
            if (isset($data['voucher'])) {

                $voucher = CustomerVoucher::where('deleted', 0)->where('state', 1)->where('code', $data['voucher'])->whereDate('start_date', '<=', $current_date)->whereDate('expire_date', '>=', $current_date)->first();

                if (!isset($voucher))  return view('purchasePlanError')->with('error', 'Cupó no es válido.');

                //validate maximum redemptions
                $redemptions = CustomerVoucherRedemption::where('customer_voucher_id', $voucher->id)->where('deleted', 0)->get();

                if ($voucher->redemption_limit > 0 && count($redemptions) >= $voucher->redemption_limit) return view('purchasePlanError')->with('error', 'Cupón ya no se puede redimir.');

                $customer_redemption = DB::table('customer_voucher_redemption')
                    ->join('customer_invoice', 'customer_invoice.id', '=', 'customer_voucher_redemption.customer_invoice_id')
                    ->where('customer_invoice.customer_id', $customer->id)
                    ->where('customer_invoice.deleted', 0)
                    ->where('customer_voucher_redemption.deleted', 0)
                    ->where('customer_voucher_redemption.customer_voucher_id', $voucher->id) //pendientes de calificacion
                    ->first();

                if (isset($customer_redemption)) return view('purchasePlanError')->with('error', 'Cupón ya fue redimido.');

                if (isset($voucher->discount_percent) && $voucher->discount_percent > 0) {
                    $voucher_value = (($total * $voucher->discount_percent) / 100);
                    $voucher_valid = true;
                } else if ($voucher->discount_value > 0) {
                    $voucher_value = $voucher->discount_value;
                    $voucher_valid = true;
                }
            }




            if ($voucher_valid) {
                $total = $total - $voucher_value;
            }


            if ($total < 0) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, la compra tiene un valor inválido.');
            }



            //add invoice
            try {
                DB::beginTransaction();

                $invoice = CustomerInvoice::create([
                    'prefix_code' => '',
                    'consecutive' => 0,
                    'customer_id' => $customer->id,
                    'sale_date' => date('Y-m-d H:i:s'),
                    'channel_sale' => 'WEB',
                    'total' => $total,
                    'customer_voucher_id' => $voucher_valid ? $voucher->id : null,
                    'customer_voucher_value' => $voucher_valid ? $voucher_value : 0,
                    'state' => 1,
                    'deleted' => 0,
                    'updated_user' => $auth->id
                ]);


                $invoice_item = CustomerInvoiceItem::create([
                    'customer_invoice_id' => $invoice->id,
                    'customer_plan_id' => $plan->id,
                    'customer_plan_name' => $description,
                    'quantity' => $data['quantity'],
                    'unit_value' => $total / $data['quantity'],
                    'discount_value' => $plan_price->discount_value,
                    'tax_percent' => 0,
                    'currency_code' => $plan_price->currency_code,
                    'tax_value' => 0,
                    'total_value' => $total_plan,
                    'deleted' => 0,
                    'updated_user' => $auth->id
                ]);

                if (isset($data['area_id']) && $data['area_id'] > 0) {
                    $invoice_item_area = CustomerInvoiceItemArea::create([
                        'customer_invoice_item_id' => $invoice_item->id,
                        'area_id' => $data['area_id'],
                        'state' => 1,
                        'deleted' => 0,
                        'updated_user' => $auth->id
                    ]);
                }

                if (isset($data['module_id']) && $data['module_id'] > 0) {
                    $invoice_item_area = CustomerInvoiceItemWeekly::create([
                        'customer_invoice_item_id' => $invoice_item->id,
                        'weekly_id' => $data['module_id'],
                        'state' => 1,
                        'deleted' => 0,
                        'updated_user' => $auth->id
                    ]);
                }


                if (isset($data['tutorschedulearea_id']) && $data['tutorschedulearea_id'] > 0) {
                    //calculate serial
                    $serial = uniqid();


                    $scheduleReservation = TutorScheduleReservation::create([
                        'serial' => $serial,
                        'tutorschedulearea_id' => $data['tutorschedulearea_id'],
                        'customer_id' => $customer->id,
                        'time_index' => $data['time_index'],
                        'date_from' => $data['date_from'],
                        'date_to' => $data['date_to'],
                        'type_schedule' => $plan->type,
                        'observations' => '',
                        'number_students' =>$plan->type=='TUTORIA_INDIVIDUAL'?1:1,
                        'state' => 0,
                        'qualified' => 0,
                        'deleted' => 0
                    ]);

                    CustomerInvoiceItemTutorial::create([
                        'customerinvoiceitem_id' => $invoice_item->id,
                        'tutorschedulereservation_id' => $scheduleReservation->id,
                        'state' => 1,
                        'deleted' => 0,
                    ]);
                }

                if (isset($data['tutorschedulereservation_id']) && $data['tutorschedulereservation_id'] > 0) {
                     //calculate serial
                    // $serial = uniqid();
                    CustomerInvoiceItemTutorial::create([
                        'customerinvoiceitem_id' => $invoice_item->id,
                        'tutorschedulereservation_id' => $data['tutorschedulereservation_id'],
                        'state' => 1,
                        'deleted' => 0,
                    ]);

                }


                if ($take_english) {
                    $invoice_item = CustomerInvoiceItem::create([
                        'customer_invoice_id' => $invoice->id,
                        'customer_plan_id' => $plan_english->id,
                        'customer_plan_name' => $plan_english->name,
                        'quantity' => $data['quantity'],
                        'unit_value' => $english_price->value,
                        'discount_value' => $english_price->discount_value,
                        'tax_percent' => 0,
                        'currency_code' => $english_price->currency_code,
                        'tax_value' => 0,
                        'total_value' => $total_english,
                        'deleted' => 0,
                        'updated_user' => $auth->id
                    ]);
                }


                //registramos cupon
                if ($voucher_valid) {
                    CustomerVoucherRedemption::create([
                        'customer_voucher_id' => $voucher->id,
                        'customer_invoice_id' => $invoice->id,
                        'deleted' => 0,
                        'updated_user' => $customer->user_id
                    ]);
                }
                //throw new Exception("Resolución no actualizada");

                if ($total == 0) {
                    $invoice_items = CustomerInvoiceItem::where('customer_invoice_id', $invoice->id)->where('deleted', 0)->get();

                    $resolution = CustomerInvoiceResolution::where('state', 1)->where('deleted', 0)->whereDate('initial_date', '<=', $current_date)->whereDate('expire_date', '>=', $current_date)->whereRaw('current_consecutive<end_consecutive')->first();
                    if (!isset($resolution)) throw new Exception("Resolución no actualizada");

                    $consecutive = $resolution->current_consecutive + 1;
                    CustomerInvoiceResolution::where('id', $resolution->id)->update([
                        'current_consecutive' => $consecutive
                    ]);

                    CustomerInvoice::where('id', $invoice->id)->update([
                        'prefix_code' => $resolution->prefix_code,
                        'consecutive' => $consecutive,
                        'state' => 2
                    ]);


                    foreach ($invoice_items as $k_invoice_item => $invoice_item) {

                        $plan = CustomerPlan::find($invoice_item->customer_plan_id);

                        CustomerCredits::create([
                            'customer_invoice_item_id' => $invoice_item->id,
                            'customer_id' => $customer->id,
                            'credits_quantity' => $plan->credits_quantity,
                            'credits_available' => $plan->credits_quantity,
                            'expire_date' => date('Y-m-d H:i', strtotime('+30 day')),
                            'state' => 1,
                            'deleted' => 0,
                            'updated_user' => $customer->user_id
                        ]);
                    }


                    //set student to plan
                    if (str_contains($plan->type, 'TUTORIA')) // if plan is tutoria
                    {
                        PurshasedHelper::setStudentToTutoria($auth->id, $plan, $invoice_items);
                    } else {
                        PurshasedHelper::setStudentToPlan($auth->id, $plan, $invoice_items);
                    }
                    //end set student to plan

                }


                DB::commit();

                if ($total == 0) {
                    Db::raw('unlock tables');
                }
            } catch (Throwable $e) {
                DB::rollback();
                return view('purchasePlanError')->with('error', $e->getMessage());
            }


            if ($total == 0) {
                return redirect('/inicio');
            }

            //procede al pago online
            $access_token = env("MERCADOPAGO_ACCESS_TOKEN", 'APP_USR-6210585021324446-111013-97c82e36ceab96268ed0911da0d20766-655239657');
            MercadoPago\SDK::setAccessToken($access_token);

            $reference = "TRIKELE-" . $auth->id . "-" . $invoice->id . "-" . date('Ymd-Hi');

            $preference = new MercadoPago\Preference();

            // Crea un ítem en la preferencia
            $item = new MercadoPago\Item();
            $item->title = $description . '.' . ($take_english ? ' Adicional ' . $plan_english->name : '');
            $item->quantity = 1;
            $item->unit_price = $total;
            $preference->items = array($item);

            $payer = new MercadoPago\Payer();
            $payer->email = $auth->email;

            $preference->payer = $payer;



            $preference->external_reference = $reference;
            $preference->notification_url = URL::to("/api/payment/confirmation/mercadopago");
            $preference->back_urls = array(
                "success" => URL::to("/compra/pagar/resultado/mercadopago"),
                "failure" => URL::to("/compra/pagar/resultado/mercadopago"),
                "pending" => URL::to("/compra/pagar/resultado/mercadopago")
            );
            $preference->auto_return = "approved";
            $preference->save();

            return Redirect::to($preference->init_point);
            //return view('purchasePlanPayMercadopago')->with('preference',$preference);


        } catch (Throwable $e) {
            return view('purchasePlanError')->with('error', $e->getMessage());
        }
        //message=PENDING&referenceCode=TRIKELE-318-14-20201017-1652&
        //polResponseCode=25&lapResponseCode=PENDING_TRANSACTION_CONFIRMATION&risk=&polPaymentMethod=35&lapPaymentMethod=BALOTO&polPaymentMethodType=7&lapPaymentMethodType=CASH&installmentsNumber=1&TX_VALUE=168000.00&TX_TAX=.00&currency=COP&lng=es&pseCycle=&buyerEmail=jeisson_esteban%40hotmail.com&pseBank=&pseReference1=&pseReference2=&pseReference3=&authorizationCode=&TX_ADMINISTRATIVE_FEE=.00&TX_TAX_ADMINISTRATIVE_FEE=.00&TX_TAX_ADMINISTRATIVE_FEE_RETURN_BASE=.00&processingDate=2020-10-17

    }

    public function payResultPayu(Request $request)
    {

        $signature = $request->get('signature');
        $reference_code = $request->get('referenceCode');

        $reference_split = explode('-', $reference_code);

        $invoice = CustomerInvoice::find($reference_split[2]);

        $invoice_items = CustomerInvoiceItem::where('customer_invoice_id', $invoice->id)->where('deleted', 0)->get();

        $total = 0;
        foreach ($invoice_items as $key => $invoice_item) {
            $total += $invoice_item->total_value;
        }

        $model = [
            'merchantId' => $request->get('merchantId'),
            'merchant_name' => $request->get('merchant_name'),
            'merchant_address' => $request->get('merchant_address'),
            'telephone' => $request->get('telephone'),
            'merchant_url' => $request->get('merchant_url'),
            'transactionState' => $request->get('transactionState'),
            'lapTransactionState' => $request->get('lapTransactionState'),
            'message' => $request->get('message'),
            'referenceCode' => $request->get('referenceCode'),
            'reference_pol' => $request->get('reference_pol'),
            'transactionId' => $request->get('transactionId'),
            'trazabilityCode' => $request->get('trazabilityCode'),
            'cus' => $request->get('cus'),
            'orderLanguage' => $request->get('orderLanguage'),
            'polTransactionState' => $request->get('polTransactionState'),
            'polResponseCode' => $request->get('polResponseCode'),
            'invoice' => [
                'invoice_id' => $invoice->id,
                'items' => $invoice_items,
                'sale_date' => $invoice->sale_date,
                'channel_sale' => $invoice->channel_sale,
                'total_payment' => $total
            ],
        ];

        // {{ request()->get('merchantId') }}
        return view('purchasePlanPayResultPayu')->with('model', json_encode($model));
    }
    public function payResultMercadopago(Request $request)
    {


        $reference_code = $request->get('external_reference');

        $reference_split = explode('-', $reference_code);

        $invoice = CustomerInvoice::find($reference_split[2]);

        $invoice_items = CustomerInvoiceItem::where('customer_invoice_id', $invoice->id)->where('deleted', 0)->get();

        $total = 0;
        foreach ($invoice_items as $key => $invoice_item) {
            $total += $invoice_item->total_value;
        }

        $model = [
            'collection_id' => $request->get('collection_id'),
            'collection_status' => $request->get('collection_status'),
            'payment_id' => $request->get('payment_id'),
            'status' => $request->get('status'),
            'external_reference' => $request->get('external_reference'),
            'payment_type' => $request->get('payment_type'),
            'merchant_order_id' => $request->get('merchant_order_id'),
            'preference_id' => $request->get('preference_id'),
            'site_id' => $request->get('site_id'),
            'processing_mode' => $request->get('processing_mode'),
            'merchant_account_id' => $request->get('merchant_account_id'),
            'sale_date' => date('Y-m-d H:i:s'),
            'invoice' => [
                'invoice_id' => $invoice->id,
                'items' => $invoice_items,
                'sale_date' => $invoice->sale_date,
                'channel_sale' => $invoice->channel_sale,
                'total_payment' => $invoice->total,
            ]
        ];

        // {{ request()->get('merchantId') }}
        return view('purchasePlanPayResultMercadopago')->with('model', json_encode($model));
    }

    public function payConfirmationPayu(Request $request)
    {

        Log::info('PAYMENT CONFIRMATION:');

        $approved = false;
        $response = [
            'state_pol' => $request->input('state_pol'),
            'merchant_id' => $request->input('merchant_id'),
            'response_code_pol' => $request->input('response_code_pol'),
            'reference_sale' => $request->input('reference_sale'),
            'reference_pol' => $request->input('reference_pol'),
            'sign' => $request->input('sign'),
            'payment_method' => $request->input('payment_method'),
            'payment_method_type' => $request->input('payment_method_type'),
            'payment_method_id' => $request->input('payment_method_id'),
            'payment_method_name' => $request->input('payment_method_name'),
            'installments_number' => $request->input('installments_number'),
            'value' => $request->input('value'),
            'tax' => $request->input('tax'),
            'additional_value' => $request->input('additional_value'),
            'transaction_date' => $request->input('transaction_date'),
            'currency' => $request->input('currency'),
            'email_buyer' => $request->input('email_buyer'),
            'cus' => $request->input('cus'),
            'pse_bank' => $request->input('pse_bank'),
            'description' => $request->input('description'),
            'phone' => $request->input('phone'),
            'attempts' => $request->input('attempts'),
            'bank_id' => $request->input('bank_id'),
            'date' => $request->input('date'),
            'nickname_buyer' => $request->input('nickname_buyer'),
            'payment_request_state' => $request->input('payment_request_state'),
            'response_message_pol' => $request->input('response_message_pol'),
            'transaction_id' => $request->input('transaction_id'),
            'administrative_fee' => $request->input('administrative_fee')
        ];

        $api_key = env("PAYU_API_KEY", "4Vj8eK4rloUd272L48hsrarnUA");
        $signature = "$api_key~" . $response['merchant_id'] . "~" . $response['reference_sale'] . "~" . substr($response['value'], 0, -1) . "~" . $response['currency'] . "~" . $response['state_pol'];
        $signature = md5($signature);

        Log::info(json_encode($response));

        if ($signature != $response['sign']) {
            Log::error('FIRMA NO COINCIDE: ' . $signature);
            return response('Firma no coincide', 400);
        }

        $reference_code = $request->input('reference_sale');

        $reference_split = explode('-', $reference_code);

        $invoice = CustomerInvoice::find($reference_split[2]);
        $invoice_items = CustomerInvoiceItem::where('customer_invoice_id', $invoice->id)->where('deleted', 0)->get();
        $customer = Customer::find($invoice->customer_id);
        $customer_info = User::find($customer->user_id);

        if ($response['state_pol'] == 4) {
            $approved = true;
        }

        $current_date = date('Y-m-d H:i:s');
        if ($approved) {


            try {
                $resolution = CustomerInvoiceResolution::where('state', 1)->where('deleted', 0)->whereDate('initial_date', '<=', $current_date)->whereDate('expire_date', '>=', $current_date)->whereRaw('current_consecutive<end_consecutive')->first();
                if (!isset($resolution)) throw new Exception("Resolución no actualizada");
                Db::raw('lock tables customer_invoice_resolution read');

                DB::beginTransaction();


                if (!isset($invoice->consecutive)) //actualizamos siempre y cuando  no haya factura
                {
                    $consecutive = $resolution->current_consecutive + 1;

                    CustomerInvoiceResolution::where('id', $resolution->id)->update([
                        'current_consecutive' => $consecutive
                    ]);

                    CustomerInvoice::where('id', $invoice->id)->update([
                        'prefix_code' => $resolution->prefix_code,
                        'consecutive' => $consecutive,
                        'state' => 2
                    ]);

                    foreach ($invoice_items as $k_invoice_item => $invoice_item) {

                        $plan = CustomerPlan::find($invoice_item->customer_plan_id);

                        CustomerCredits::create([
                            'customer_invoice_item_id' => $invoice_item->id,
                            'customer_id' => $customer->id,
                            'credits_quantity' => $plan->credits_quantity,
                            'credits_available' => $plan->credits_quantity,
                            'expire_date' => date('Y-m-d H:i', strtotime('+1 year')),
                            'state' => 1,
                            'deleted' => 0,
                            'updated_user' => $customer->user_id
                        ]);
                    }
                }


                //save patyment information
                CustomerInvoicePayment::create([
                    'customer_invoice_id' => $invoice->id,
                    'payment_date' => str_replace('.', '-', $response['date']),
                    'reference_code' => $response['reference_sale'],
                    'reference_payment_gatewey' => $response['reference_pol'],
                    'response_code' => $response['response_code_pol'],
                    'response_description' => $response['response_message_pol'],
                    'transaction_code' => $response['transaction_id'],
                    'payment_method' => $response['payment_method'],
                    'payment_type_method' => $response['payment_method_type'],
                    'buyer_email' => $response['email_buyer'],
                    'processing_date' => $response['transaction_date'],
                    'currency_code' => $response['currency'],
                    'cus_code' => $response['cus'],
                    'pse_bank' => $response['pse_bank'],
                    'operation_value' => $response['value'],
                    'operation_tax' => $response['tax'],
                    'operation_aditional_value' => $response['additional_value'],
                    'admin_value' => $response['administrative_fee'],
                    'state' => 1,
                    'deleted' => 0,
                    'updated_user' => $customer->user_id
                ]);



                DB::commit();
                Db::raw('unlock tables');
            } catch (Throwable $e) {
                print_r($e->getMessage());
                DB::rollback();
                Db::raw('unlock tables');
                return response(json_encode($e->getMessage()), 400);
            }


            //send email to admin
            try {

                Mail::send('emails.purshased', [
                    'email' => 'trikeleeducacion@gmail.com',
                    'invoice_prefix' => $resolution->prefix_code,
                    'invoice_consecutive' => $consecutive,
                    'purshased_date' => $current_date,
                    'total_value' => $response['value'],
                    'client_name' => $customer_info->name . ' ' . $customer_info->last_name,
                    'client_email' => $customer_info->email,
                    'client_phone' => $customer_info->phone,
                    'detalle' => $invoice_items
                ], function ($msj) {
                    $msj->to('trikeleeducacion@gmail.com')->subject('[TRIKELE] Nueva compra');
                });
            } catch (Throwable $th) {
                //throw $th;
            }
        } else {
            //save patyment information
            CustomerInvoicePayment::create([
                'customer_invoice_id' => $invoice->id,
                'payment_date' => str_replace('.', '-', $response['date']),
                'reference_code' => $response['reference_sale'],
                'reference_payment_gatewey' => $response['reference_pol'],
                'response_code' => $response['response_code_pol'],
                'response_description' => $response['response_message_pol'],
                'transaction_code' => $response['transaction_id'],
                'payment_method' => $response['payment_method'],
                'payment_type_method' => $response['payment_method_type'],
                'buyer_email' => $response['buyer_email'],
                'processing_date' => $response['transaction_date'],
                'currency_code' => $response['currency'],
                'cus_code' => $response['cus'],
                'pse_bank' => $response['pse_bank'],
                'operation_value' => $response['value'],
                'operation_tax' => $response['tax'],
                'operation_aditional_value' => $response['additional_value'],
                'admin_value' => $response['administrative_fee'],
                'state' => 1,
                'deleted' => 0,
                'updated_user' => $customer->user_id
            ]);


            CustomerInvoice::where('id', $invoice->id)->update([
                'state' => $response['state_pol'] == 6 ? 3 : 4 // 3:declinada y/o cancelada, 4:expirada
            ]);
        }



        return;
    }
    public function payConfirmationMercadopago(Request $request)
    {

        $data = $request->all();

        if (!isset($data)) {
            return response('Datos inválidos', 200);
        }

        $type = $request->get('type');
        if (isset($type)) {
            $data['type'] = $type;
        }

        $id = $request->get('id');
        if (isset($id)) {
            $data['id'] = $id;
        }

        $topic = $request->get('topic');
        if (isset($topic)) {
            $data['topic'] = $topic;
        }

        if (isset($data['type'])) {
            $data['topic'] = $data['type'];

            if ($data['type'] == 'payment') {
                if (count($data['data']) > 0) {
                    if (isset($data['data'][0]['id'])) {
                        $data['id'] = $data['data'][0]['id'];
                    }
                }
            }
        }



        Log::info($data);


        if (!isset($data['id'])) {
            return response('Datos inválidos:'.json_encode($data), 200);
        }

        try {

            $access_token = env("MERCADOPAGO_ACCESS_TOKEN", 'TEST-901453271267975-111311-4156a2cae13505cd777cba08c1476d7f-671652305');
            MercadoPago\SDK::setAccessToken($access_token);

            $merchant_order = null;
            switch ($data["topic"]) {
                case "payment":
                    Log::info('Get Payment:'.$data["data_id"]);
                    $payment = MercadoPago\Payment::find_by_id($data["data_id"]);

                    break;
                case "merchant_order":
                    $merchant_order = MercadoPago\MerchantOrder::find_by_id($_GET["id"]);
                    break;
            }


            if (!isset($payment)) {
                Log::info('Payment invalid:400');
                return response('Payment invalid', 400);
            }

            Log::info('PAYMENT CONFIRMATION:' .$payment->external_reference . ' ID: ' . $data['id']);


            $paid_amount = $payment->transaction_amount;
            /*
            print_r(get_object_vars($payment));
            print_r('==========================');
            print_r(get_object_vars($merchant_order));
            print_r('==========================');*/


            $reference = $payment->external_reference;

            $reference_split = explode('-', $reference);

            $user = User::find($reference_split[1]);

            if (!isset($user)) {
                Log::info('User dont exists');
                return response('User dont exists', 400);
            }

            $invoice = CustomerInvoice::find($reference_split[2]);

            if (!isset($invoice)) {
                Log::info('Invoice dont exists');
                return response('Invoice dont exists', 400);
            }

            $invoice_items = CustomerInvoiceItem::where('customer_invoice_id', $invoice->id)->where('deleted', 0)->get();
            $customer = Customer::find($invoice->customer_id);
            $customer_info = User::find($customer->user_id);




            $current_date = date('Y-m-d H:i:s');
            if ($payment->status == 'approved') {


                try {
                    $resolution = CustomerInvoiceResolution::where('state', 1)->where('deleted', 0)->whereDate('initial_date', '<=', $current_date)->whereDate('expire_date', '>=', $current_date)->whereRaw('current_consecutive<end_consecutive')->first();
                    if (!isset($resolution)) throw new Exception("Resolución no actualizada");
                    Db::raw('lock tables customer_invoice_resolution read');

                    DB::beginTransaction();


                    if (!isset($invoice->consecutive) || $invoice->consecutive == 0) //actualizamos siempre y cuando  no haya factura
                    {
                        $consecutive = $resolution->current_consecutive + 1;

                        CustomerInvoiceResolution::where('id', $resolution->id)->update([
                            'current_consecutive' => $consecutive
                        ]);

                        CustomerInvoice::where('id', $invoice->id)->update([
                            'prefix_code' => $resolution->prefix_code,
                            'consecutive' => $consecutive,
                            'state' => 2
                        ]);

                        $plan = CustomerPlan::find($invoice_items[0]->customer_plan_id);
                        foreach ($invoice_items as $k_invoice_item => $invoice_item) {

                            CustomerCredits::create([
                                'customer_invoice_item_id' => $invoice_item->id,
                                'customer_id' => $customer->id,
                                'credits_quantity' => $plan->credits_quantity,
                                'credits_available' => $plan->credits_quantity,
                                'expire_date' => date('Y-m-d H:i', strtotime('+1 year')),
                                'state' => 1,
                                'deleted' => 0,
                                'updated_user' => $customer->user_id
                            ]);
                        }

                        if (str_contains($plan->type, 'TUTORIA')) // if plan is tutoria
                        {
                            PurshasedHelper::setStudentToTutoria($user->id, $plan, $invoice_items);
                        } else {
                            PurshasedHelper::setStudentToPlan($user->id, $plan, $invoice_items);
                        }
                    }


                    //save patyment information
                    CustomerInvoicePayment::create([
                        'customer_invoice_id' => $invoice->id,
                        'payment_date' => date('Y-m-d H:i:s'),
                        'reference_code' => $reference,
                        'reference_payment_gatewey' => '',
                        'response_code' => $payment->status,
                        'response_description' => $payment->status_detail,
                        'transaction_code' => $payment->id,
                        'payment_method' => $payment->transaction_details->payment_method_reference_id,
                        'payment_type_method' => $payment->payment_method_id,
                        'buyer_email' => $payment->payer->email,
                        'processing_date' => date('Y-m-d H:i:s'),
                        'currency_code' => $payment->currency_id,
                        'cus_code' => $payment->transaction_details->payable_deferral_period,
                        'pse_bank' => $payment->transaction_details->financial_institution,
                        'operation_value' => $paid_amount,
                        'operation_tax' => 0,
                        'operation_aditional_value' => 0,
                        'admin_value' => 0,
                        'state' => 1,
                        'deleted' => 0,
                        'updated_user' => $customer->user_id
                    ]);




                    Db::raw('unlock tables');
                    DB::commit();

                } catch (Throwable $e) {
                    Log::error($e->getMessage());
                    Db::raw('unlock tables');
                    DB::rollback();
                    return response(json_encode($e->getMessage()), 400);
                }


                //send email to admin
                try {

                    Mail::send('emails.purshased', [
                        'email' => 'trikeleeducacion@gmail.com',
                        'invoice_prefix' => $resolution->prefix_code,
                        'invoice_consecutive' => $consecutive,
                        'purshased_date' => $current_date,
                        'total_value' => $paid_amount,
                        'client_name' => $customer_info->name . ' ' . $customer_info->last_name,
                        'client_email' => $customer_info->email,
                        'client_phone' => $customer_info->phone,
                        'detalle' => $invoice_items
                    ], function ($msj) {
                        $msj->to('trikeleeducacion@gmail.com')->subject('[TRIKELE] Nueva compra');
                    });
                } catch (Throwable $th) {
                    //throw $th;
                }
            } else {
                //save patyment information
                CustomerInvoicePayment::create([
                    'customer_invoice_id' => $invoice->id,
                    'payment_date' => date('Y-m-d H:i:s'),
                    'reference_code' => $reference,
                    'reference_payment_gatewey' => '',
                    'response_code' => $payment->status,
                    'response_description' => $payment->status_detail,
                    'transaction_code' => $payment->id,
                    'payment_method' => $payment->transaction_details->payment_method_reference_id,
                    'payment_type_method' => $payment->payment_method_id,
                    'buyer_email' => $payment->payer->email,
                    'processing_date' => date('Y-m-d H:i:s'),
                    'currency_code' => $payment->currency_id,
                    'cus_code' => $payment->transaction_details->payable_deferral_period,
                    'pse_bank' => $payment->transaction_details->financial_institution,
                    'operation_value' => $paid_amount,
                    'operation_tax' => 0,
                    'operation_aditional_value' => 0,
                    'admin_value' => 0,
                    'state' => 1,
                    'deleted' => 0,
                    'updated_user' => $customer->user_id
                ]);


                CustomerInvoice::where('id', $invoice->id)->update([
                    'state' => 3 // 3:declinada y/o cancelada, 4:expirada
                ]);
            }
        } catch (Exception $error_payment) {
            Log::error($error_payment->getMessage());
            Log::error('line: ' . $error_payment->getLine() . $error_payment->getFile());
        }



        return;
    }
}
