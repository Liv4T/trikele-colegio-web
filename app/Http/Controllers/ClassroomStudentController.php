<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\ClassroomStudent;

class ClassroomStudentController extends Controller
{
    public function updateStatus(Request $request){
        ClassroomStudent::where('id_user',$request->id_user)->update([
            'status' => $request->status,
        ]);
        return response('Actualizado');
    }
    public function getStatus(){
        $user = Auth::user();
        $status = ClassroomStudent::select('status')->where('id_user',$user->id)->first();

        return response()->json($status);
    }
}
