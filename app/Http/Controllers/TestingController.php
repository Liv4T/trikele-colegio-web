<?php

namespace App\Http\Controllers;

use App;
use App\Account;
use App\Event;
use App\Extensions\payment_placetopay\src\Gateway;
use App\Jobs\SendOrderTickets;
use App\Mail\BookingConfirmed;
use App\MessageUser;
use App\Order;
use Barryvdh\DomPDF\Facade as PDF;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Mail;
use QRCode;
use Sendinblue\Mailin;
use Spatie\Permission\Models\Permission;
use \App\Message;
use Omnipay;

class TestingController extends Controller
{


    public function sendEmailHome(Request $request)
    {
        $email_to = "colegiotrikele@gmail.com";

        Mail::send('emails.contactus', ["subject" => $request->subject, "nombre" => $request->name, "telefono" => $request->phone, "correo" => $request->email], function ($message) use ($email_to) {
            $message->to($email_to, 'Trikele Contáctanos');
            $message->subject('Nuevo usuario Contáctanos');
        });

        return 'ok';
    }
}
