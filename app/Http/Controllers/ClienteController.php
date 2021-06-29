<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ClientDocuments;

class ClienteController extends Controller
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function testFile(Request $request)
    {
        // return $request;
        $file = request('form');
        // dd($file);
        if (!empty($file)) {
            return 1;
        } else {
            return 0;
        }
    }

    public function uploadFile(Request $request)
    {
        $files = $request->all();
        foreach ($files as $file) {
            var_dump($file);
            die;
        }
        // return $request;
        $formfile = request('file');
        // dd($file);
        if (!empty($formfile)) {
            $formfileName = $formfile->getClientOriginalName();
            $div_file_name = explode(".", $formfileName);
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $formfileName_1 = request('name');
            $formfileName = strtr($formfileName_1, " ", "_");
            // file with path
            $formfilePath = url('uploads/documentos_clientes/' . $formfileName . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/documentos_clientes/';
            if ($formfile->move($destinationPath, $formfileName . "." . $extension)) {
                $form_file = 1;
            }
            return "error";
        }
        $documents = new ClientDocuments;

        return "ok";
    }
    public function uploadFileUpdate(Request $request)
    {
        // return $request;
        $file = request('file');
        // dd($file);
        if (!empty($file)) {
            $fileName = $file->getClientOriginalName();
            $div_file_name = explode(".", $fileName);
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $fileName_1 = request('name');
            $number = request('count');
            $fileName = strtr($fileName_1, " ", "_");
            // file with path
            $filePath = url('uploads/clases/' . $fileName . $number . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/clases/';
            if ($extension == "flv" || $extension == "mp4" || $extension == "m3u8" || $extension == "ts" || $extension == "3gp" || $extension == "mov" || $extension == "avi" || $extension == "wmv") {
                $type = 2;
            } else {
                $type = 1;
            }
            //se elimina el archivo anterior
            $filenameDelete = url('uploads/clases/' . $fileName . $number . "." . $extension);
            \File::delete($filenameDelete);
            //se añade el nuevo archivo
            if ($file->move($destinationPath, $fileName . $number . "." . $extension)) {
                $files_prevoiusly = Files::where('path', $filePath)->orderBy('id', 'DESC')->first();
                if (isset($files_prevoiusly)) {
                    $files_prevoiusly->delete();
                }
                $file = Files::create([
                    'path' => $filePath,
                    'unit' => $fileName_1,
                    'type' => $type,
                ]);
                return "ok";
            }
            return "error";
        }
    }
}
