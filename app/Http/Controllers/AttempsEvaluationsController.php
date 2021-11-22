<?php

namespace App\Http\Controllers;

use App\attempsEvaluations;
use Illuminate\Http\Request;

class AttempsEvaluationsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = attempsEvaluations::all();
        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        attempsEvaluations::create($request->all());
        return response()->json('Intento Guardado');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\attempsEvaluations  $attempsEvaluations
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = attempsEvaluations::where('id_student',$id)->orderBy('id', 'desc')->get();
        return response()->json($data);   
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\attempsEvaluations  $attempsEvaluations
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $updated = attempsEvaluations::findOrFail($id);
        $input = $request->all();
        $updateList->fill($input)->save();

        return response()->json('Intento Actualizado');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\attempsEvaluations  $attempsEvaluations
     * @return \Illuminate\Http\Response
     */
    public function destroy(attempsEvaluations $attempsEvaluations)
    {
        $data = attempsEvaluations::findOrFail($id); 
        $data->delete();
        return response()->json('Intento Eliminado');
    }
}
