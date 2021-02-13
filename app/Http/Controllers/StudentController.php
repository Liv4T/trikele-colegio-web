<?php

namespace App\Http\Controllers;

use App\Classroom;
use App\ClassroomStudent;
use App\User;
use Illuminate\Support\Facades\Auth;
use App\Weekly;
use Illuminate\Support\Facades\DB;

class StudentController extends Controller
{

    public function get(int $student_id){
        $auth = Auth::user();

        if(!isset($auth)) return  response()->json([]);


        $student=User::find($student_id);


        return  response()->json($student);
    }
}
