<?php

namespace App\Http\Controllers;

use App\PIAR;
use App\User;
use App\ClassroomStudent;
use App\ScoreCumulative;
use Illuminate\Http\Request;

class PIARController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('piar');
    }


    public function getPIARStudents(){
        $PIARStudents = User::where('isPIAR','=',true)->get();
        return response()->json($PIARStudents);
    }

    public function getPIARStudentsArea(String $id_area, String $id_classroom){
        //
        $scores = [];
        $studenAsigned = ClassroomStudent::where('id_classroom', $id_classroom)->get();
        if (isset($studenAsigned)) {
            foreach ($studenAsigned as $index => $asigned) {
                $student = User::where([
                    ['isPIAR','1'],
                    ['id',$asigned->id_user]
                ])->first();
                if(isset($student)){
                    $scores[$index] = [
                        'text' => $student->name . " " . $student->last_name,
                        'id' => $student->id
                    ];
                }
            }
        }
        return $scores;
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
     * @param  \App\PIAR  $pIAR
     * @return \Illuminate\Http\Response
     */
    public function show(PIAR $pIAR)
    {
    
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PIAR  $pIAR
     * @return \Illuminate\Http\Response
     */
    public function edit(PIAR $pIAR)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PIAR  $pIAR
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $userUpdate = User::findOrFail($id);
        $userUpdate->isPiar = $request->isPiar;
        $userUpdate->save();
        return response()->json('Estudiante PIAR Registrado');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PIAR  $pIAR
     * @return \Illuminate\Http\Response
     */
    public function destroy(PIAR $pIAR)
    {
        //
    }
}
