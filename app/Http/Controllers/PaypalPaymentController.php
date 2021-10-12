<?php

namespace App\Http\Controllers;

use App\PaypalPayment;
use App\Customer;
use App\CustomerInvoice;
use Auth;
use DB;
use Illuminate\Http\Request;

class PaypalPaymentController extends Controller
{
    public function payPaypalPlan(String $data){
        try{
            $user = Auth::user();
            
            //Se verifica que la variable $data no venga vacia
            if(!isset($data)){
                return response()->json('Información Invalida');
            }

            //Se decodifica la variable y se establece el tiempo del plan, mensual o anual
            $data_decode = json_decode(base64_decode($data),true);
            $current_date=date('Y-m-d');

            if($data['plan_name'] === 'MENSUAL'){
                $end_range_date = date('Y-m-d H:i:s', strtotime('+30 day', strtotime($current_date)));
            }else{
                $end_range_date = date ('Y-m-d H:i:s', strtotime('+365 day', strtotime($current_date)));
            }

            /*
                Se verifica si la variable decodificada tiene valores o si tiene la 
                cantidad a pagar y si la cantidad no es menor o igual a 0
            */

            if(!isset($data) || !isset($data['quantity'])){
                return response()->json('Información invalida');
            }else if($data['quantity'] <= 0){
                return response()->json('Información invalida');
            }

            /*
                Se verifica si el usuario existe, si existe se verfica si está activo, 
                si está inactivo se informa al usuario, si no existe se crea el registro en customer
            */
            $customer = Customer::where('user_id', $user->id)->where('deleted', 0)->where('state',1)->first();

            if(!isset($customer)){
                $customer_inactive = Customer::where('user_id', $user->id)->where('deleted', 0)->where('state',0)->first();
                if(isset($customer_inactive)){
                    return response()->json('Usuario Inactivo');
                }else{
                    Customer::create([
                        'user_id' => $user->id,
                        'type' => 1,
                        'state' => 1,
                        'deleted' => 0,
                        'updated_user' => $user->id,
                    ]);
                }
            }

            $total = $data['total'];

            //Se agrega la Factura
            try {
                /* 
                 * Se consulta si hay consecutivo, en caso que no exista registro se asigna el consecutivo en 0
                 * Si existe consecutivo, se suma 1 al ultimo registro y se crea registro en CustomerInvoice
                */
                 
                DB::beginTransaction();

                $last_const = CustomerInvoice::all()->last();

                if(!isset($last_const)){
                    $consecutive = 0;
                }else{
                    $consecutive = $last_const->consecutive + 1;
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
                    'updated_user' => $user->id,
                ]);


                /**
                 * Despues de crear CustomerInvoice se crea CustomerInvoiceItem
                 */
                $invoice_item = CustomerInvoiceItem::create([
                    'customer_invoice_id' => $invoice->id,
                    'customer_plan_id' => 0,
                    'customer_order_item_id' => 0,
                    'customer_plan_name' => $data['plan_name'],
                    'quantity' => $data['quantity'],
                    'discount_value' => 0,
                    'unit_value' => $total,
                    'tax_percent' => 0,
                    'currency_code' => 'USD', 
                    'tax_value' => 0,
                    'total_value' => $total,
                    'deleted' => 0,
                    'updated_user' => $user->id, 
                ]);

                /**
                 * Si el total es 0 se busca el registro en CustomerInvoiceItem y 
                 * se busca el consecutivo en CustomerInvoice y se actualiza CustomerInvoice
                 */
                
                if($total == 0){
                    $invoice_item = CustomerInvoiceItem::where('customer_invoice_id', $invoice->id)->where('deleted', 0)->get();
                    $last_const = CustomerInvoice::all()->last()->consecutive;

                    $consecutive = $last_const->consecutive + 1;

                    CustomerInvoice::where('id', $invoice->id)->update([
                        'prefix_code' => 'TRIKELE-COLEGIO',
                        'consecutive' => $consecutive,
                        'state'       => 2,
                    ]);
                }

                DB::commit();

                if($total == 0){
                    DB::raw('unlock tables');
                }
                
            } catch (\Throwable $err) {
                DB::rollback();
                return response()->json($err);
            }

            $model = [
                'merchant_id'   => $data['merchant_id'],
                'description'   => 'Compra '. $data['plan_name']. '.',
                'ref'           => $data['ref'],
                'amount'        => $data['amount'],
                'tax'           => 0,
                'result'        => $data['result'],
                'taxReturnBase' => 0,
                'currency'      => 'USD',
                'payer_id'      => $data['payer_id'],
                'buyer_email'   => $data['payer_email'],
            ];

            return view('purchasePaypalResult')->with('model', json_encode($model));

        }catch(Throwable $e){
            return response()->json($e);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PaypalPayment  $paypalPayment
     * @return \Illuminate\Http\Response
     */
    public function show(PaypalPayment $paypalPayment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PaypalPayment  $paypalPayment
     * @return \Illuminate\Http\Response
     */
    public function edit(PaypalPayment $paypalPayment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PaypalPayment  $paypalPayment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PaypalPayment $paypalPayment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PaypalPayment  $paypalPayment
     * @return \Illuminate\Http\Response
     */
    public function destroy(PaypalPayment $paypalPayment)
    {
        //
    }
}
