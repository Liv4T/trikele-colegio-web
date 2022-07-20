<?php

namespace App\Http\Controllers;

use App\Bimestre;
use Illuminate\Http\Request;

class BimestreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bimestres = Bimestre::all();
        return response()->json($bimestres);
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
        $bimestres = new Bimestre();
        $bimestres->name = $request->name;
        $bimestres->save();

        return response()->json('Bimestre Guardado');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Bimestre  $bimestre
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $bimestre = Bimestre::where('id',$id)->first();
        return response()->json($bimestre);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Bimestre  $bimestre
     * @return \Illuminate\Http\Response
     */
    public function edit(Bimestre $bimestre)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bimestre  $bimestre
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $bimestres = Bimestre::findOrFail($id);
        $bimestres->name = $request->name;
        $bimestres->update();

        return response()->json('Bimestre Actualizado');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bimestre  $bimestre
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $bimestres = Bimestre::findOrFail($id);
        $bimestres->status = 0;
        $bimestres->update();

        return response()->json('Bimestre Desactivado');
    }
}
