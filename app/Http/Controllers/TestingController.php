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

public function sendemail(Request $request, string $id)
    {
        // $data = $request->json()->all();
            $name = 'Mildred';
            $surname = 'prueba';
        $data = [
            'namwe' => $name,
            'surname' => $surname,
        ];
    Mail::send('emails.register', $data, function($msj){
        $msj->to('desarrollador.sr@dybcatering.com')->subject('Theres only one more step to go');
     });
    return "ok";

    }
}