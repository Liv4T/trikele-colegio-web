<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ClientDocuments;
use App\Leads;

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
            $Time = time();
            return 1;
        } else {
            return 0;
        }
    }

    public function saveLead(Request $request)
    {
        $data = $request->all();

        $lead = n "-" . $Time .ew Leads;
        $lead->name_parent = $data['name'];
        $lead->phone_parent = $data['email'];
        $lead->email_parent = $data['phone'];
        $lead->name_son = $data['son'];
        $lead->age = $data['age'];
        $lead->grade = $data['grade'];
        
        $lead->save();
        if($lead->save()){
            $email_to = "colegiotrikele@gmail.com";
            $subject = "Nuevo registro formulario de admisiones";

            Mail::send('emails.contactus', ["subject" => $subject, "nombre" => $lead->name_parent, "telefono" => $lead->phone_parent, "correo" => $lead->email_parent], function ($message) use ($email_to) {
                $message->to($email_to, 'Trikele Contáctanos');
                $message->subject('Nuevo usuario Admisiones');
            });
            return 'ok';
        }
    }

    public function uploadFile(Request $request)
    {
        $formFile = request('form');
        $idcard_parentFile = request('idcard_parent');
        $idcard_sonFile = request('idcard_son');
        $last_certificateFile = request('last_certificate');
        $epsFile = request('eps');
        $medical_certificateFile = request('medical_certificate');
        $labor_parentFile = request('labor_parent');
        $labor_sonFile = request('labor_son');
        $paz_salvoFile = request('paz_salvo');

        $form_file = 0;
        $idcard_parent_file = 0;
        $idcard_son_file = 0;
        $last_certificate_file = 0;
        $eps_file = 0;
        $medical_certificate_file = 0;
        $labor_parent_file = 0;
        $labor_son_file = 0;
        $paz_salvo_file = 0;
        
        
        if (!empty($formFile)) {
            $formTime = time();
            $formFileName = $formFile->getClientOriginalName();
            $div_file_name = explode(".", $formFileName);
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $formFileName_1 = request('name');
            $formFileName = strtr($formFileName_1, " ", "_");
            // file with path
            $formFilePath = url('uploads/documentos_clientes/' . $formFileName . "-" . $formTime . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/documentos_clientes/';
            if ($formFile->move($destinationPath, $formFileName . "." . $extension)) {
                $form_file = 1;
            }
            return "error";
        }

        if (!empty($idcard_parentFile)) {
            $idcard_parentTime = time();
            $idcard_parentFileName = $idcard_parentFile->getClientOriginalName();
            $div_file_name = explode(".", $idcard_parentFileName);
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $idcard_parentFileName_1 = request('name');
            $idcard_parentFileName = strtr($idcard_parentFileName_1, " ", "_");
            // file with path
            $idcard_parentFilePath = url('uploads/documentos_clientes/' . $idcard_parentFileName . "-" . $idcard_parentTime . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/documentos_clientes/';
            if ($idcard_parentFile->move($destinationPath, $idcard_parentFileName . "." . $extension)) {
                $idcard_parent_file = 1;
            }
            return "error";
        }

        if (!empty($idcard_sonFile)) {
            $idcard_sonTime = time();
            $idcard_sonFileName = $idcard_sonFile->getClientOriginalName();
            $div_file_name = explode(".", $idcard_sonFileName);
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $idcard_sonFileName_1 = request('name');
            $idcard_sonFileName = strtr($idcard_sonFileName_1, " ", "_");
            // file with path
            $idcard_sonFilePath = url('uploads/documentos_clientes/' . $idcard_sonFileName . "-" . $idcard_sonTime . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/documentos_clientes/';
            if ($idcard_sonFile->move($destinationPath, $idcard_sonFileName . "." . $extension)) {
                $idcard_son_file = 1;
            }
            return "error";
        }

        if (!empty($last_certificateFile)) {
            $last_certificateTime = time();
            $last_certificateFileName = $last_certificateFile->getClientOriginalName();
            $div_file_name = explode(".", $last_certificateFileName);
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $last_certificateFileName_1 = request('name');
            $last_certificateFileName = strtr($last_certificateFileName_1, " ", "_");
            // file with path
            $last_certificateFilePath = url('uploads/documentos_clientes/' . $last_certificateFileName . "-" . $last_certificateTime . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/documentos_clientes/';
            if ($last_certificateFile->move($destinationPath, $last_certificateFileName . "." . $extension)) {
                $last_certificate_file = 1;
            }
            return "error";
        }

        if (!empty($epsFile)) {
            $epsTime = time();
            $epsFileName = $epsFile->getClientOriginalName();
            $div_file_name = explode(".", $epsFileName);
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $epsFileName_1 = request('name');
            $epsFileName = strtr($epsFileName_1, " ", "_");
            // file with path
            $epsFilePath = url('uploads/documentos_clientes/' . $epsFileName . "-" . $epsTime . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/documentos_clientes/';
            if ($epsFile->move($destinationPath, $epsFileName . "." . $extension)) {
                $eps_file = 1;
            }
            return "error";
        }

        if (!empty($medical_certificateFile)) {
            $medical_certificateTime = time();
            $medical_certificateFileName = $medical_certificateFile->getClientOriginalName();
            $div_file_name = explode(".", $medical_certificateFileName);
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $medical_certificateFileName_1 = request('name');
            $medical_certificateFileName = strtr($medical_certificateFileName_1, " ", "_");
            // file with path
            $medical_certificateFilePath = url('uploads/documentos_clientes/' . $medical_certificateFileName . "-" . $medical_certificateTime . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/documentos_clientes/';
            if ($medical_certificateFile->move($destinationPath, $medical_certificateFileName . "." . $extension)) {
                $medical_certificate_file = 1;
            }
            return "error";
        }

        if (!empty($labor_parentFile)) {
            $labor_parentTime = time();
            $labor_parentFileName = $labor_parentFile->getClientOriginalName();
            $div_file_name = explode(".", $labor_parentFileName);
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $labor_parentFileName_1 = request('name');
            $labor_parentFileName = strtr($labor_parentFileName_1, " ", "_");
            // file with path
            $labor_parentFilePath = url('uploads/documentos_clientes/' . $labor_parentFileName . "-" . $labor_parentTime . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/documentos_clientes/';
            if ($labor_parentFile->move($destinationPath, $labor_parentFileName . "." . $extension)) {
                $labor_parent_file = 1;
            }
            return "error";
        }

        if (!empty($labor_sonFile)) {
            $labor_sonTime = time();
            $labor_sonFileName = $labor_sonFile->getClientOriginalName();
            $div_file_name = explode(".", $labor_sonFileName);
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $labor_sonFileName_1 = request('name');
            $labor_sonFileName = strtr($labor_sonFileName_1, " ", "_");
            // file with path
            $labor_sonFilePath = url('uploads/documentos_clientes/' . $labor_sonFileName . "-" . $labor_sonTime . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/documentos_clientes/';
            if ($labor_sonFile->move($destinationPath, $labor_sonFileName . "." . $extension)) {
                $labor_son_file = 1;
            }
            return "error";
        }

        if (!empty($paz_salvoFile)) {
            $paz_salvoTime = time();
            $paz_salvoFileName = $paz_salvoFile->getClientOriginalName();
            $div_file_name = explode(".", $paz_salvoFileName);
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $paz_salvoFileName_1 = request('name');
            $paz_salvoFileName = strtr($paz_salvoFileName_1, " ", "_");
            // file with path
            $paz_salvoFilePath = url('uploads/documentos_clientes/' . $paz_salvoFileName . "-" . $paz_salvoTime . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/documentos_clientes/';
            if ($paz_salvoFile->move($destinationPath, $paz_salvoFileName . "." . $extension)) {
                $paz_salvo_file = 1;
            }
            return "error";
        }

        /* Almacenamiento de los archivos que llegaron */
        $user = Auth::user();
        $validDocuments = ClientDocuments::where('id_user',$user->id)->get();
        if($validDocuments){
            $validDocuments->form = ($form_file == 0) ? $validDocuments->form: $formFilePath;
            $validDocuments->idcard_parent = ($idcard_parent_file == 0) ? $validDocuments->idcard_parent: $idcard_parentFilePath;
            $validDocuments->idcard_son = ($idcard_son_file == 0)? $validDocuments->idcard_son : $idcard_sonFilePath;
            $validDocuments->last_certificate = ($last_certificate_file == 0)? $validDocuments->last_certificate : $last_certificateFilePath;
            $validDocuments->eps = ($eps_file == 0)? $validDocuments->eps : $epsFilePath;
            $validDocuments->medical_certificate = ($medical_certificate_file == 0)? $validDocuments->medical_certificate : $medical_certificateFilePath;
            $validDocuments->labor_parent = ($labor_parent_file == 0)? $validDocuments->labor_parent : $labor_parentFilePath;
            $validDocuments->labor_son = ($labor_son_file == 0)? $validDocuments->labor_son : $labor_sonFilePath;
            $validDocuments->paz_salvo = ($paz_salvo_file == 0)? $validDocuments->paz_salvo : $paz_salvoFilePath;
            $validDocuments->save();
            return "ok";
        }else{
            $documents = new ClientDocuments;
            $documents->form = ($form_file == 0) ? null: $formFilePath;
            $documents->idcard_parent = null;
            $documents->idcard_son = ($idcard_son_file == 0)? null : $idcard_sonFilePath;
            $documents->last_certificate = ($last_certificate_file == 0)? null : $last_certificateFilePath;
            $documents->eps = ($eps_file == 0)? null : $epsFilePath;
            $documents->medical_certificate = ($medical_certificate_file == 0)? null : $medical_certificateFilePath;
            $documents->labor_parent = ($labor_parent_file == 0)? null : $labor_parentFilePath;
            $documents->labor_son = ($labor_son_file == 0)? null : $labor_sonFilePath;
            $documents->paz_salvo = ($paz_salvo_file == 0)? null : $paz_salvoFilePath;
            $documents->id_user = $user->id;

            $documents->save();
            return "ok";
        }
        
    }
    public function uploadFileUpdate(Request $request)
    {
        // return $request;
        $file = request('file');
        // dd($file);
        if (!empty($file)) {
            $Time = time();
            $fileName = $file->getClientOriginalName();
            $div_file_name = explode(".", $fileName);
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $fileName_1 = request('name');
            $number = request('count');
            $fileName = strtr($fileName_1, " ", "_");
            // file with path
            $filePath = url('up "-" . $Time .loads/clases/' . $fileName . $number . "." . $extension);
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
