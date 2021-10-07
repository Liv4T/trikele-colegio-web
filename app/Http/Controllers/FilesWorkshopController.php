<?php

namespace App\Http\Controllers;

use App\FilesWorkshop;
use App\Activity;
use Auth;
use Illuminate\Http\Request;

class FilesWorkshopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user_id = Auth::user()->id;
        $data = FilesWorkshop::all();

        return response()->json($data);
    }

    public function getFilesStudents(String $id_activity, String $id_workshop){
        $data = FilesWorkshop::where('id_activity',$id_activity)->where('id_workshop', $id_workshop)->get();
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
        $user_id = Auth::user()->id;

        $files = new FilesWorkshop();
        $files->id_activity = $request->id_activity;
        $files->id_workshop = $request->id_workshop;
        $files->id_teacher  = $user_id;
        $files->name        = $request->name;
        $files->url         = $request->url;
        $files->save();

        return response()->json('El archivo se ha guardado exitosamente');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\FilesWorkshop  $filesWorkshop
     * @return \Illuminate\Http\Response
     */
    public function show(FilesWorkshop $filesWorkshop)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\FilesWorkshop  $filesWorkshop
     * @return \Illuminate\Http\Response
     */
    public function edit(FilesWorkshop $filesWorkshop)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\FilesWorkshop  $filesWorkshop
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\FilesWorkshop  $filesWorkshop
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $file = FilesWorkshop::findOrFail($id);
        $file->delete();
        return response()->json('Documento Eliminado');
    }
}
