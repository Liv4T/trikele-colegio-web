<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Carbon\Carbon;

class SystemCalendarController extends Controller
{


    public function index()
    {


        return view('calendar');
    }
}
