<?php

namespace App\Http\Controllers;

use App\SignUp;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;

class SignUpController extends Controller
{
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
        $data = $request->all();

        $signUp = new SignUp;

        $signUp->name = $data['name'];
        $signUp->email = $data['email'];
        $signUp->phone = $data['phone'];
        $signUp->message = $data['message'];
        $signUp->save();

        if ($signUp->save()) {
            $email_to = "trikeleeducacion@gmail.com";
            Mail::send('emails.contactus', ["subject" => $request->subject, "nombre" => $request->name, "telefono" => $request->phone, "correo" => $request->email], function ($message) use ($email_to) {
                $message->to($email_to, 'Trikele Contáctanos');
                $message->subject('Nuevo lead Landing');
            });
            return view("home");
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SignUp  $signUp
     * @return \Illuminate\Http\Response
     */
    public function show(SignUp $signUp)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SignUp  $signUp
     * @return \Illuminate\Http\Response
     */
    public function edit(SignUp $signUp)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SignUp  $signUp
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SignUp $signUp)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SignUp  $signUp
     * @return \Illuminate\Http\Response
     */
    public function destroy(SignUp $signUp)
    {
        //
    }
}
