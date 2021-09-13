<?php

namespace App\Http\Controllers;

use App\ChangeGrade;
use Illuminate\Http\Request;
use DB;

class ChangeGradeController extends Controller
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
    
    public function getStudentsByGrade(String $grade_id){
        $grade = DB::table('classroom_student')
            ->join('classroom','classroom_student.id_classroom','=','classroom.id')
            ->join('grade','classroom.id_grade','=','grade.id')
            ->join('users','classroom_student.id_user','=','users.id')
            ->select('grade.id as grade_id','grade.name as grade_name','users.*')
            ->where('grade.id','=',$grade_id)
            ->get();

        return response()->json($grade);
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
     * @param  \App\ChangeGrade  $changeGrade
     * @return \Illuminate\Http\Response
     */
    public function show(ChangeGrade $changeGrade)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ChangeGrade  $changeGrade
     * @return \Illuminate\Http\Response
     */
    public function edit(ChangeGrade $changeGrade)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ChangeGrade  $changeGrade
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ChangeGrade $changeGrade)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ChangeGrade  $changeGrade
     * @return \Illuminate\Http\Response
     */
    public function destroy(ChangeGrade $changeGrade)
    {
        //
    }
}
