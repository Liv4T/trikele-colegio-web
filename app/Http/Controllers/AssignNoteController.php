<?php

namespace App\Http\Controllers;

use App\AssignNote;
use Illuminate\Http\Request;
use Auth;

class AssignNoteController extends Controller
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        $assignNote = new AssignNote();
        $assignNote->id_bimestre = $request->id_bimestre;
        $assignNote->id_student = $request->id_student;
        $assignNote->id_teacher = $user->id;
        $assignNote->id_area = $request->id_area;
        $assignNote->class = $request->class;
        $assignNote->student_name = $request->student_name;
        $assignNote->note = $request->note;
        $assignNote->asignNote = $request->asignNote;
        $assignNote->save();

        return response()->json('Asignación de nota registrada');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\AssignNote  $assignNote
     * @return \Illuminate\Http\Response
     */
    public function show($id_student,$id_area)
    {
        $getNote = AssignNote::where('id_student',$id_student)->where('id_area',$id_area)->orderBy('id_bimestre','asc')->get();
        return response()->json($getNote);
    }

    public function getAssignNote($id_assign)
    {
        $getNote = AssignNote::where('id',$id_assign)->first();
        return response()->json($getNote);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\AssignNote  $assignNote
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = Auth::user();
        $assignNote = AssignNote::findOrFail($id);
        $assignNote->id_bimestre = $request->id_bimestre;
        $assignNote->id_student = $request->id_student;
        $assignNote->id_teacher = $user->id;
        $assignNote->id_area = $request->id_area;
        $assignNote->class = $request->class;
        $assignNote->student_name = $request->student_name;
        $assignNote->note = $request->note;
        $assignNote->asignNote = $request->asignNote;
        $assignNote->update();

        return response()->json('Asignación de nota actualizada');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\AssignNote  $assignNote
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $assignNote = AssignNote::findOrFail($id);
        $assignNote->delete();
        return response()->json('Asignación de nota eliminada');
    }
}
