<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ProceedingsGeneral;
use App\User;
use Illuminate\Support\Facades\DB;
use App\ConfigurationParameter;
use Illuminate\Support\Facades\Auth;

class ProceedingsGeneralController extends Controller
{
    public function save(Request $request)
    {       
            $user = Auth::user();
            
            if($user->type_user==2){
                $user_id = $user->id; 
            }else{
                $user_id = "";
            }
            ProceedingsGeneral::create([
                'title' => $request->title,
                'body' => $request->body,
                'id_user_managed' => $request->id_user_managed,
                'state' => 0,
                'viewed' =>0,
                'id_user' => $user_id,
            ]);

        return response()->json('Acta Guardada');
    }
    public function uploadFile(Request $request)
    {   
        $user = Auth::user();
            
        if($user->type_user==2){
            $user_id = $user->id; 
        }else{
            $user_id = "";
        }

        $file = request('file');
        if (!empty($file)) {
            $fileName = $file->getClientOriginalName();
            $div_file_name = explode(".", $fileName);
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $fileName_1 = request('name');
            $fileName = strtr($fileName_1, " ", "_");
            // file with path
            $filePath = url('uploads/actas/general/' . $fileName . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/actas/general/';
            if ($file->move($destinationPath, $fileName . "." . $extension)) {
                ProceedingsGeneral::create([
                    'url' => $filePath,
                    'id_user_managed' => request('id_user_managed'),
                    'state' => 0,
                    'viewed' =>0,
                    'id_user' => $user_id,
                ]);
                return 'ok';
            }
            return "error";
        }
    }
    public function uploadFileUpdate(Request $request, int $id)
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
            $fileName = strtr($fileName_1, " ", "_");
            // file with path
            $filePath = url('uploads/actas/general/' . $fileName . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/actas/general';
            //Buscamos la ruta del archivo a eliminar
            $fileSearch = ProceedingsGeneral::where('id', $id)->first();
            $arrayNames = explode("/", $fileSearch->url);
            $nameArchive = end($arrayNames);
            //se elimina el archivo anterior
            $filenameDelete = 'uploads/actas/general/' . $nameArchive;
            unlink($filenameDelete);
            //se añade el nuevo archivo
            if ($file->move($destinationPath, $fileName . "." . $extension)) {
                $file = ProceedingsGeneral::where('id', $id)->update([
                    'url' => $filePath,
                ]);
                return "ok";
            }
            return "error";
        }
    }
    public function uploadFileUpdateSign(Request $request, int $id)
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
            $fileName = strtr($fileName_1, " ", "_");
            // file with path
            $filePath = url('uploads/actas/general/' . $fileName . "_FIRMADA" . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/actas/general/';
            //se añade el nuevo archivo
            if ($file->move($destinationPath, $fileName . "_FIRMADA" . "." . $extension)) {
                $file = ProceedingsGeneral::where('id', $id)->update([
                    'url' => $filePath,
                    'state' => 1,
                ]);
                return "ok";
            }
            return "error";
        }
    }
    public function indexProceedings()
    {
        $user = Auth::user();
        $user_id = $user->id;
        $proceedings=[];
        $proceedingsC=[];
        $proceedingsR=[];
        if($user->type_user==1){
            $proceedingsC=ProceedingsGeneral::all();
            $proceedingsC->type="Administrador";
        }else if($user->type_user==2){
            $proceedingsC=ProceedingsGeneral::where('id_user', $user_id)->get();
        }else if($user->type_user==3){
            $proceedingsC=ProceedingsGeneral::where('id_user', $user_id)->get();
        }else if($user->type_user==5){
            $proceedingsC=ProceedingsGeneral::where('id_user', $user_id)->get();
        }else if($user->type_user==6){
            $proceedingsC=ProceedingsGeneral::where('id_user', $user_id)->get();
        }else if($user->type_user==8){
            $proceedingsC=ProceedingsGeneral::where('id_user', $user_id)->get();
        }

        if($user->type_user==2){
            $proceedingsR=ProceedingsGeneral::where('id_user_managed', $user_id)->get();
        }else if($user->type_user==3){
            $proceedingsR=ProceedingsGeneral::where('id_user_managed', $user_id)->get();
        }else if($user->type_user==5){
            $proceedingsR=ProceedingsGeneral::where('id_user_managed', $user_id)->get();
        }else if($user->type_user==6){
            $proceedingsR=ProceedingsGeneral::where('id_user_managed', $user_id)->get();
        }else if($user->type_user==8){
            $proceedingsR=ProceedingsGeneral::where('id_user_managed', $user_id)->get();
        }

        foreach ($proceedingsC as $key => $proceedingC) {
        
            if(isset($proceedingC->id_user_managed)){
                $name_parent=User::where('id', $proceedingC->id_user_managed)->get();
            }else{
                $name_parent="No hay usuario registrado";
            }

            $proceedingC->user_name=$name_parent[0]->name;
            
        }

        foreach ($proceedingsR as $key => $proceedingR) {
        
            if(isset($proceedingR->id_user_managed)){
                $name_parent=User::where('id', $proceedingR->id_user_managed)->get();
            }else{
                $name_parent="No hay usuario registrado";
            }

            $proceedingR->user_name=$name_parent[0]->name;
            
        }

        array_push($proceedings, $proceedingsC, $proceedingsR);

        return response()->json($proceedings);
    }
    public function urlArchive(int $id)
    {
        $file = ProceedingsGeneral::where('id', $id)->first();

        $arrayNames = explode("/", $file->url);
        $nameArchive = end($arrayNames);
        $filename = '../../../uploads/actas/general/' . $nameArchive;

        return $filename;

    }
    public function generatePdf(int $id)
    {
        $templateHeader=ConfigurationParameter::where('code','TEMPLATE_NOTESHEET_HEADER')->first();
        $templateFooter=ConfigurationParameter::where('code','TEMPLATE_NOTESHEET_FOOTER')->first();
        $file = ProceedingsGeneral::where('id', $id)->first();
        $current_date=date('Y-m-d');
        $html='';
        $html.=$file->title;
        $html.=$file->body;

        $mpdf = new \Mpdf\Mpdf(['setAutoTopMargin' => 'stretch']);

        $mpdf->SetHTMLHeader($templateHeader->content);

        $mpdf->SetWatermarkImage("data:image/png;base64,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");
        $mpdf->showWatermarkImage = true;

        $mpdf->SetHTMLFooter($templateFooter->content);

        $mpdf->WriteHTML($html);

        $temp = tmpfile();
        $path_temp = tempnam(sys_get_temp_dir(), 'prefix');
        $filename=$path_temp.uniqid();
        $mpdf->Output( $filename);


        return response()->make(file_get_contents($filename), 200, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="'. 'acta_' .$id.'_'.$current_date.'.pdf"'
        ]);
    }
    public function updateViewed(int $id)
    {
        $user = Auth::user();
        $user_id = $user->id;
        $file = ProceedingsGeneral::where('id', $id)->where('id_user_managed', $user_id)->update([
            'viewed' => 1,
        ]);

        return $file;
    }
    public function downloadProceedings(int $id)
    {
        $fileSearch = ProceedingsGeneral::where('id', $id)->first();
        $arrayNames = explode("/", $fileSearch->url);
        $nameArchive = end($arrayNames);
        $pathtoFile = 'uploads/actas/general/' . $nameArchive;

        return response()->download($pathtoFile);
    }
    public function getUsersToProceedings(){
        $users = [];

        $admins = DB::table("users")
        ->select('users.*')
        ->where('type_user','=',1)
        ->get();

        $teachers = DB::table("users")
        ->select('users.*')
        ->where('type_user','=',2)
        ->get();

        $students = DB::table("users")
        ->select('users.*')
        ->where('type_user','=',3)
        ->get();

        $parents = DB::table("users")
        ->select('users.*')
        ->where('type_user','=',5)
        ->get();

        array_push($users, $admins, $teachers, $students, $parents);

        return response()->json($users, 200);
    }
}
