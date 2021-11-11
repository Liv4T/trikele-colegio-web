<?php

namespace App\Http\Controllers;

use App\AnswersLite;
use Illuminate\Http\Request;

class AnswersLiteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $data = AnswersLite::all();
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
        AnswersLite::create($request->all());
        return response()->json('Dato Guardado');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\AnswersLite  $answersLite
     * @return \Illuminate\Http\Response
     */
    public function show(AnswersLite $answersLite)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\AnswersLite  $answersLite
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $updateList  = AnswersLite::findOrFail($id);
        $input = $request->all();
        $updateList->fill($input)->save();

        return response()->json('Dato Actualizado');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\AnswersLite  $answersLite
     * @return \Illuminate\Http\Response
     */
    public function destroy(AnswersLite $answersLite)
    {
        $answertLite = AnswersLite::findOrFail($id);
        $answersLite->delete();

        return response()->json('Dato Eliminado');
    }
}
