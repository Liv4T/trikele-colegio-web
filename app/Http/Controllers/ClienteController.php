<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ClientDocuments;
use App\Leads;
use Auth;

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
        // // return $request;
        // $file = request('form');
        // // dd($file);
        // if (!empty($file)) {
        //     $Time = time();
        //      $Rand = rand(0,100);
        //     return 1;
        //     $startreturn[0]Name = ;
        // } else {
        //     return 0;
        // }
    }

    public function saveLead(Request $request)
    {
        $data = $request->all();

        $lead = new Leads;
        $lead->name_parent = $data['nameParent'];
        $lead->phone_parent = $data['emailParent'];
        $lead->email_parent = $data['phoneParent'];
        $lead->name_son = $data['nameSon'];
        $lead->age = $data['age'];
        $lead->grade = $data['grade'];

        $lead->save();
        if ($lead->save()) {
            $email_to = env("MAIL_LEADS", "trikeleeducacion@gmail.com");
            $subject = "Nuevo registro formulario de admisiones";

            \Mail::send('emails.contactus', ["subject" => $subject, "nombre" => $lead->name_parent, "telefono" => $lead->phone_parent, "correo" => $lead->email_parent], function ($message) use ($email_to) {
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
        $formFilePath = "";
        $idcard_parentFilePath = "";
        $idcard_sonFilePath = "";
        $last_certificateFilePath = "";
        $epsFilePath = "";
        $medical_certificateFilePath = "";
        $labor_parentFilePath = "";
        $labor_sonFilePath = "";
        $paz_salvoFilePath = "";

        if (!empty($formFile)) {
            $formTime = time();
            $formRand = rand(0, 100);
            $formFileName = $formFile->getClientOriginalName();
            $div_file_name = explode(".", $formFileName);
            $startName = $div_file_name[0];
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $formFileName = $startName . $formTime . $formRand;
            // file with path
            $formFilePath = url('uploads/documentos_clientes/' . $formFileName . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/documentos_clientes/';
            if ($formFile->move($destinationPath, $formFileName . "." . $extension)) {
                $form_file = 1;
            } else {
                return "error no guardo";
            }
        }

        if (!empty($idcard_parentFile)) {
            $idcard_parentTime = time();
            $idcard_parentRand = rand(0, 100);
            $idcard_parentFileName = $idcard_parentFile->getClientOriginalName();
            $div_file_name = explode(".", $idcard_parentFileName);
            $startName = $div_file_name[0];
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $idcard_parentFileName = $startName . $idcard_parentTime . $idcard_parentRand;
            // file with path
            $idcard_parentFilePath = url('uploads/documentos_clientes/' . $idcard_parentFileName . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/documentos_clientes/';
            if ($idcard_parentFile->move($destinationPath, $idcard_parentFileName . "." . $extension)) {
                $idcard_parent_file = 1;
            } else {
                return "error";
            }
        }

        if (!empty($idcard_sonFile)) {
            $idcard_sonTime = time();
            $idcard_sonRand = rand(0, 100);
            $idcard_sonFileName = $idcard_sonFile->getClientOriginalName();
            $div_file_name = explode(".", $idcard_sonFileName);
            $startName = $div_file_name[0];
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $idcard_sonFileName = $startName . $idcard_sonTime . $idcard_sonRand;
            // file with path
            $idcard_sonFilePath = url('uploads/documentos_clientes/' . $idcard_sonFileName . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/documentos_clientes/';
            if ($idcard_sonFile->move($destinationPath, $idcard_sonFileName . "." . $extension)) {
                $idcard_son_file = 1;
            } else {
                return "error";
            }
        }

        if (!empty($last_certificateFile)) {
            $last_certificateTime = time();
            $last_certificateRand = rand(0, 100);
            $last_certificateFileName = $last_certificateFile->getClientOriginalName();
            $div_file_name = explode(".", $last_certificateFileName);
            $startName = $div_file_name[0];
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $last_certificateFileName = $startName . $last_certificateTime . $last_certificateRand;
            // file with path
            $last_certificateFilePath = url('uploads/documentos_clientes/' . $last_certificateFileName . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/documentos_clientes/';
            if ($last_certificateFile->move($destinationPath, $last_certificateFileName . "." . $extension)) {
                $last_certificate_file = 1;
            } else {
                return "error";
            }
        }

        if (!empty($epsFile)) {
            $epsTime = time();
            $epsRand = rand(0, 100);
            $epsFileName = $epsFile->getClientOriginalName();
            $div_file_name = explode(".", $epsFileName);
            $startName = $div_file_name[0];
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $epsFileName = $startName . $epsTime . $epsRand;
            // file with path
            $epsFilePath = url('uploads/documentos_clientes/' . $epsFileName . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/documentos_clientes/';
            if ($epsFile->move($destinationPath, $epsFileName . "." . $extension)) {
                $eps_file = 1;
            } else {
                return "error";
            }
        }

        if (!empty($medical_certificateFile)) {
            $medical_certificateTime = time();
            $medical_certificateRand = rand(0, 100);
            $medical_certificateFileName = $medical_certificateFile->getClientOriginalName();
            $div_file_name = explode(".", $medical_certificateFileName);
            $startName = $div_file_name[0];
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $medical_certificateFileName = $startName . $medical_certificateTime . $medical_certificateRand;
            // file with path
            $medical_certificateFilePath = url('uploads/documentos_clientes/' . $medical_certificateFileName . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/documentos_clientes/';
            if ($medical_certificateFile->move($destinationPath, $medical_certificateFileName . "." . $extension)) {
                $medical_certificate_file = 1;
            } else {
                return "error";
            }
        }

        if (!empty($labor_parentFile)) {
            $labor_parentTime = time();
            $labor_parentRand = rand(0, 100);
            $labor_parentFileName = $labor_parentFile->getClientOriginalName();
            $div_file_name = explode(".", $labor_parentFileName);
            $startName = $div_file_name[0];
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $labor_parentFileName = $startName . $labor_parentTime . $labor_parentRand;
            // file with path
            $labor_parentFilePath = url('uploads/documentos_clientes/' . $labor_parentFileName . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/documentos_clientes/';
            if ($labor_parentFile->move($destinationPath, $labor_parentFileName . "." . $extension)) {
                $labor_parent_file = 1;
            } else {
                return "error";
            }
        }

        if (!empty($labor_sonFile)) {
            $labor_sonTime = time();
            $labor_sonRand = rand(0, 100);
            $labor_sonFileName = $labor_sonFile->getClientOriginalName();
            $div_file_name = explode(".", $labor_sonFileName);
            $startName = $div_file_name[0];
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $labor_sonFileName = $startName . $labor_sonTime . $labor_sonRand;
            // file with path
            $labor_sonFilePath = url('uploads/documentos_clientes/' . $labor_sonFileName . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/documentos_clientes/';
            if ($labor_sonFile->move($destinationPath, $labor_sonFileName . "." . $extension)) {
                $labor_son_file = 1;
            } else {
                return "error";
            }
        }

        if (!empty($paz_salvoFile)) {
            $paz_salvoTime = time();
            $paz_salvoRand = rand(0, 100);
            $paz_salvoFileName = $paz_salvoFile->getClientOriginalName();
            $div_file_name = explode(".", $paz_salvoFileName);
            $startName = $div_file_name[0];
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $paz_salvoFileName = $startName . $paz_salvoTime . $paz_salvoRand;
            // file with path
            $paz_salvoFilePath = url('uploads/documentos_clientes/' . $paz_salvoFileName . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/documentos_clientes/';
            if ($paz_salvoFile->move($destinationPath, $paz_salvoFileName . "." . $extension)) {
                $paz_salvo_file = 1;
            } else {
                return "error";
            }
        }

        /* Almacenamiento de los archivos que llegaron */
        $user = Auth::user();
        $validDocuments = ClientDocuments::where('id_user', $user->id)->first();
        if ($validDocuments) {
            if ($form_file == 1) {
                $filenameDeleteform = url('uploads/documentos_clientes/' . $validDocuments->form);
                \File::delete($filenameDeleteform);
                $validDocuments->form =  $formFilePath;
            }
            if ($idcard_parent_file == 1) {
                $filenameDeleteidcard_parent = url('uploads/documentos_clientes/' . $validDocuments->idcard_parent);
                \File::delete($filenameDeleteidcard_parent);
                $validDocuments->idcard_parent =  $idcard_parentFilePath;
            }
            if ($idcard_son_file == 1) {
                $filenameDeleteidcard_son = url('uploads/documentos_clientes/' . $validDocuments->idcard_son);
                \File::delete($filenameDeleteidcard_son);
                $validDocuments->idcard_son = $idcard_sonFilePath;
            }
            if ($last_certificate_file == 1) {
                $filenameDeletelast_certificate = url('uploads/documentos_clientes/' . $validDocuments->last_certificate);
                \File::delete($filenameDeletelast_certificate);
                $validDocuments->last_certificate = $last_certificateFilePath;
            }
            if ($eps_file == 1) {
                $filenameDeleteeps = url('uploads/documentos_clientes/' . $validDocuments->eps);
                \File::delete($filenameDeleteeps);
                $validDocuments->eps = $epsFilePath;
            }
            if ($medical_certificate_file == 1) {
                $filenameDeletemedical_certificate = url('uploads/documentos_clientes/' . $validDocuments->medical_certificate);
                \File::delete($filenameDeletemedical_certificate);
                $validDocuments->medical_certificate = $medical_certificateFilePath;
            }
            if ($labor_parent_file == 1) {
                $filenameDeletelabor_parent = url('uploads/documentos_clientes/' . $validDocuments->labor_parent);
                \File::delete($filenameDeletelabor_parent);
                $validDocuments->labor_parent = $labor_parentFilePath;
            }
            if ($labor_son_file == 1) {
                $filenameDeletelabor_son = url('uploads/documentos_clientes/' . $validDocuments->labor_son);
                \File::delete($filenameDeletelabor_son);
                $validDocuments->labor_son = $labor_sonFilePath;
            }
            if ($paz_salvo_file == 1) {
                $filenameDeletepaz_salvo = url('uploads/documentos_clientes/' . $validDocuments->paz_salvo);
                \File::delete($filenameDeletepaz_salvo);
                $validDocuments->paz_salvo = $paz_salvoFilePath;
            }
            $validDocuments->save();
            return "ok";
        } else {
            $documents = new ClientDocuments;
            $documents->form = ($form_file == 0) ? null : $formFilePath;
            $documents->idcard_parent = ($idcard_parent_file == 0) ? null : $idcard_parentFilePath;
            $documents->idcard_son = ($idcard_son_file == 0) ? null : $idcard_sonFilePath;
            $documents->last_certificate = ($last_certificate_file == 0) ? null : $last_certificateFilePath;
            $documents->eps = ($eps_file == 0) ? null : $epsFilePath;
            $documents->medical_certificate = ($medical_certificate_file == 0) ? null : $medical_certificateFilePath;
            $documents->labor_parent = ($labor_parent_file == 0) ? null : $labor_parentFilePath;
            $documents->labor_son = ($labor_son_file == 0) ? null : $labor_sonFilePath;
            $documents->paz_salvo = ($paz_salvo_file == 0) ? null : $paz_salvoFilePath;
            $documents->id_user = $user->id;

            $documents->save();
            return "ok";
        }
    }
}
