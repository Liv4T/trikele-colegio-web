<?php

namespace App\Http\Controllers;

use App\VerifyRegistration;
use Illuminate\Http\Request;
use App\CustomerInvoicePayment;

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
        $data = CustomerInvoicePayment::where('response_code','aproved')->get();
        foreach($data as $key => $key){
            $user = User::where('email',$key->buyer_email)->first();
            array_push($users, $user);
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
        $showData = VerifyRegistration::where('id_student',$id)->first();
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
