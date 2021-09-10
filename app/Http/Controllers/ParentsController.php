<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
use App\User;
use App\Observer;
use App\RequestPermissions;

class ParentsController extends Controller
{

    public function getDataObserverStudents(){
        $user_name = Auth::user();

        $observer = Observer::where('id_student','=', $user_name->parent_id)->get();        

        return response()->json($observer);
    }
}
