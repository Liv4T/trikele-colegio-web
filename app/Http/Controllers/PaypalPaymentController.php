<?php

namespace App\Http\Controllers;

use App\PaypalPayment;
use App\Customer;
use App\CustomerInvoice;
use App\CustomerInvoiceItem;
use Auth;
use DB;
use Illuminate\Http\Request;

class PaypalPaymentController extends Controller
{
    public function payPaypal(string $data_string){
        
        try{
            $auth = Auth::user();
            
            if (!isset($data_string)) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, información inválida.');
            }

            $data = json_decode(base64_decode($data_string), true);
            $current_date = date('Y-m-d H:i:s');

            if (!isset($data) || !isset($data['quantity'])) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, información inválida.');
            }


            if ($data['quantity'] <= 0) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, cantidad inválida.');
            }

            $customer = Customer::where('user_id', $auth->id)->where('deleted', 0)->where('state', 1)->first();
            
            if (!isset($customer)) {
                $customer_inactive = Customer::where('user_id', $auth->id)->where('deleted', 0)->where('state', 0)->first();
                if(isset($customer_inactive)){
                    return view('purchasePlanError')->with('error', 'No se puede procesar pago, cliente ináctivo.');
                }else{
                    Customer::create([
                        'user_id'=>$auth->id,
                        'type'=>1,
                        'state'=>1,
                        'deleted'=>0,
                        'updated_user'=>$auth->id
                    ]);
                }
            }
            // $exchange = PaypalExchange::where('institution_id', $auth->institution_id)
            // ->where('currency', 'COP')
            // ->orderBy('id', 'desc')
            // ->first(); 
            // $plan_price = TutorSchedule::where('id',$data['schedule_id'])->where('state', 1)->where('deleted', 0)->first();
            //$plan_price = $data['amount'];
            //$total_plan = (($plan_price  * $data['quantity'])/$exchange);
            $total = $data['total'];

            //add invoice
            try {

                DB::beginTransaction();

                $last_cons= CustomerInvoice::all()->last();

                if(!isset($last_cons)){
                    $consecutive=0;   
                }else{
                    $consecutive = $last_cons->consecutive + 1;
                }

                $studentEvent=TutorScheduleEvent::where('id_schedulestudent', $data['event_student_id'])->where('deleted', 0)->where('id_user', $auth->id)->first();
                
                $invoice = CustomerInvoice::create([
                    'prefix_code' => 'TRIKELE-COLEGIO',
                    'consecutive' => $consecutive,
                    'customer_id' => $customer->id,
                    'sale_date' => date('Y-m-d H:i:s'),
                    'channel_sale' => 'WEB',
                    'total' => $total,
                    'customer_voucher_id' => 0,
                    'customer_voucher_value' => 0,
                    'state' => 1,
                    'deleted' => 0,
                    'updated_user' => $auth->id
                ]);


                $invoice_item = CustomerInvoiceItem::create([
                    'customer_invoice_id' => $invoice->id,
                    'customer_plan_id' => $data['event_student_id'],
                    'customer_plan_name' => $studentEvent->name, 
                    'quantity' => $data['quantity'],
                    'unit_value' => $total,
                    'discount_value' => 0,
                    'tax_percent' => 0,
                    'currency_code' => 'USD',
                    'tax_value' => 0,
                    'total_value' => $total,
                    'exchange' => $data['princeExchange'],
                    'deleted' => 0,
                    'updated_user' => $auth->id
                ]);

                if ($total == 0) {
                    $invoice_items = CustomerInvoiceItem::where('customer_invoice_id', $invoice->id)->where('deleted', 0)->get();

                    $last_cons= CustomerInvoice::all()->last()->consecutive;
                    
                    $consecutive = $last_cons->consecutive + 1;
                

                    CustomerInvoice::where('id', $invoice->id)->update([
                        'prefix_code' => 'TRIKELE-COLEGIO',
                        'consecutive' => $consecutive,
                        'state' => 2
                    ]);
                }
                TutorScheduleEvent::where('id_schedulestudent', $data['event_student_id'])->update([
                    'state'  => 1
                ]);
                TutorScheduleStudent::where('id', $data['event_student_id'])->update([
                    'state'  => 1
                ]);
                DB::commit();

                if ($total == 0) {
                    Db::raw('unlock tables');
                }
                
            } catch (Throwable $e) {
                DB::rollback();
                return view('purchasePlanError')->with('error', $e->getMessage());
            }

            $model = [
                'merchant_id' => $data['merchant_id'],
                'description' => 'Compra ' . $studentEvent->name . '.',
                'ref' => $data['ref'],
                'amount' => $data['amount'],
                'tax' => 0,
                'result' => $data['result'],
                'taxReturnBase' => 0,
                'currency' => 'USD',
                'payer_id' => $data['payer_id'],
                'buyerEmail' => $data['payer_email'],
            ];
            return view('purchasePaypalResult')->with('model', json_encode($model));
            
        } catch (Throwable $e) {
            return view('purchasePlanError')->with('error', $e->getMessage());
        }
    }

    public function payPaypalPlan(string $data_string){
        try{
            $auth = Auth::user();
            
            if (!isset($data_string)) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, información inválida.');
            }

            $data = json_decode(base64_decode($data_string), true);
            $current_date = date('Y-m-d H:i:s');
            if($data['plan_name']==='PLAN_MENSUAL'){
                $end_range_date =date ( 'Y-m-d H:i:s' ,  strtotime ('+30 day' , strtotime ($current_date ))); 
            }else{
                $end_range_date =date ( 'Y-m-d H:i:s' ,  strtotime ('+365 day' , strtotime ($current_date ))); 
            }

            if (!isset($data) || !isset($data['quantity'])) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, información inválida.');
            }


            if ($data['quantity'] <= 0) {
                return view('purchasePlanError')->with('error', 'No se puede procesar pago, cantidad inválida.');
            }

            $customer = Customer::where('user_id', $auth->id)->where('deleted', 0)->where('state', 1)->first();
            
            if (!isset($customer)) {
                $customer_inactive = Customer::where('user_id', $auth->id)->where('deleted', 0)->where('state', 0)->first();
                if(isset($customer_inactive)){
                    return view('purchasePlanError')->with('error', 'No se puede procesar pago, cliente ináctivo.');
                }else{
                    Customer::create([
                        'user_id'=>$auth->id,
                        'type'=>1,
                        'state'=>1,
                        'deleted'=>0,
                        'updated_user'=>$auth->id
                    ]);
                }
            }

            // $code = TutorCode::where('code', $data['code'])->first();

            // $vinculation_code = VinculationTutorStudent::where('id_tutor', $code->id_tutor)
            //                                             ->where('id_student', $auth->id)
            //                                             ->where('code_vinculated', $data['code'])
            //                                             ->first();
            
            
            $total = $data['total'];

            //add invoice
            try {

                DB::beginTransaction();

                $last_cons= CustomerInvoice::all()->last();

                if(!isset($last_cons)){
                    $consecutive=0;   
                }else{
                    $consecutive = $last_cons->consecutive + 1;
                }

                $invoice = CustomerInvoice::create([
                    'prefix_code' => 'TRIKELE-COLEGIO',
                    'consecutive' => $consecutive,
                    'customer_id' => $customer->id,
                    'sale_date' => date('Y-m-d H:i:s'),
                    'channel_sale' => 'WEB',
                    'total' => $total,
                    'customer_voucher_id' => 0,
                    'customer_voucher_value' => 0,
                    'state' => 1,
                    'deleted' => 0,
                    'updated_user' => $auth->id
                ]);


                $invoice_item = CustomerInvoiceItem::create([
                    'customer_invoice_id' => $invoice->id,
                    'customer_plan_id' => 0,
                    'customer_plan_name' => $data['plan_name'], 
                    'quantity' => $data['quantity'],
                    'unit_value' => $total,
                    'discount_value' => 0,
                    'tax_percent' => 0,
                    'currency_code' => 'USD',
                    'tax_value' => 0,
                    'total_value' => $total,
                    'exchange' => 0,
                    'deleted' => 0,
                    'updated_user' => $auth->id
                ]);
                
                // $enable_subjects = enableSubject::create([
                //     'id_code' => $code->id,
                //     'id_area' => $code->id_area,
                //     'id_user' => $auth->id,
                //     'date_payment' => $current_date,
                //     'date_enable_area' => $end_range_date,
                // ]);

                // if(!isset($vinculation_code)){
                //     $vinculation_tutor_students = VinculationTutorStudent::create([
                //         'id_tutor' => $code->id_tutor,
                //         'id_student' => $auth->id,
                //         'code_vinculated' => $data['code'],
                //     ]);
                // }
                

                if ($total == 0) {
                    $invoice_items = CustomerInvoiceItem::where('customer_invoice_id', $invoice->id)->where('deleted', 0)->get();

                    $last_cons= CustomerInvoice::all()->last()->consecutive;
                    
                    $consecutive = $last_cons->consecutive + 1;
                

                    CustomerInvoice::where('id', $invoice->id)->update([
                        'prefix_code' => 'TRIKELE-COLEGIO',
                        'consecutive' => $consecutive,
                        'state' => 2
                    ]);
                }
                DB::commit();

                if ($total == 0) {
                    Db::raw('unlock tables');
                }
                
            } catch (Throwable $e) {
                DB::rollback();
                return view('purchasePlanError')->with('error', $e->getMessage());
            }

            $model = [
                'merchant_id' => $data['merchant_id'],
                'description' => 'Compra ' . $data['plan_name'] . '.',
                'ref' => $data['ref'],
                'amount' => $data['amount'],
                'tax' => 0,
                'result' => $data['result'],
                'taxReturnBase' => 0,
                'currency' => 'USD',
                'payer_id' => $data['payer_id'],
                'buyerEmail' => $data['payer_email'],
            ];
            return view('purchasePaypalResult')->with('model', json_encode($model));
            
        } catch (Throwable $e) {
            return view('purchasePlanError')->with('error', $e->getMessage());
        }
    }

    public function currencyExchange(){
        $auth = Auth::user();
        $exchange = PaypalExchange::where('institution_id', $auth->institution_id)
        ->where('currency', 'COP')
        ->orderBy('id', 'desc')
        ->first(); 

        return $exchange;
    }
}
