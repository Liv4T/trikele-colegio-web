<?php

namespace App\Http\Controllers;

use App\VerifyRegistration;
use Illuminate\Http\Request;
use App\CustomerInvoicePayment;
use App\User;

class VerifyRegistrationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = VerifyRegistration::all();

        return response()->json($data);
    }

    public function getPaymentAproved(){
        $users = [];
        $data = CustomerInvoicePayment::where('response_code','approved')->get();
        
        foreach($data as $key => $key){            
            $user = User::where('email',$data[$key]->buyer_email)->first();
            if(isset($user)){
                array_push($users, [
                    'id_student' => $user->id,
                    'name' => $user->name,
                    'last_name' => $user->last_name,
                    'payment_date' => $data[$key]->payment_date,
                    'id_customer_invoice_payment' => $data[$key]->id,
                ]);
            }            
        }

        return response()->json($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $verifyPayment = new VerifyRegistration();
        $verifyPayment->id_student = $request->id_student;
        $verifyPayment->status = $request->status;
        $verifyPayment->id_customer_invoice_payment = $request->id_customer_invoice_payment;

        $verifyPayment->save();

        return response()->json('Registro Guardado');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\VerifyRegistration  $verifyRegistration
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $showData = VerifyRegistration::where('id_student',$id)->orderBy('id_customer_invoice_payment','desc')->get();
        return response()->json($showData);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\VerifyRegistration  $verifyRegistration
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $verifyPayment = VerifyRegistration::findOrFail($id);
        $verifyPayment->id_student = $request->id_student;    
        $verifyPayment->status = $request->status;
        $verifyPayment->id_customer_invoice_payment = $request->id_customer_invoice_payment;

        $verifyPayment->update();

        return response()->json('Registro Actualizado');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\VerifyRegistration  $verifyRegistration
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $verifyPayment = VerifyRegistration::findOrFail($id);
        $verifyPayment->deleted = 1;

        $verifyPayment->update();

        return response()->json('Registro Desactivado');
    }
}
