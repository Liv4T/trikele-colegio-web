<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use App\DocumentType;

class DocumentTypeController extends Controller
{
    public function all()
    {
        return DocumentType::where('deleted',0)->get();
    }
    public function allActive()
    {
        return DocumentType::where('deleted',0)->where('state',1)->get();
    }
    public function get(int $id)
    {
        return DocumentType::find($id);
    }
    public function update(Request $request,int $id)
    {
        $auth = Auth::user();
        $data=$request->all();
        if(!isset($data)) return response('Datos inválidos',400);
        if($id<=0) return response('ID inválida',400);

        DocumentType::where('id',$id)->update([
            'shortname'=>$data['shortname'],
            'name'=>$data['name'],
            'state'=>$data['state'],
            'updated_user'=>$auth->id,
        ]);

    }
    public function insert(Request $request)
    {
        $auth = Auth::user();
        $data=$request->all();
        if(!isset($data)) return response('Datos inválidos',400);

        DocumentType::create([
            'shortname'=>$data['shortname'],
            'name'=>$data['name'],
            'state'=>1,
            'deleted'=>0,
            'updated_user'=>$auth->id,
        ]);

    }
    public function delete(int $id)
    {
        $auth = Auth::user();
        
        if($id<=0) return response('ID inválida',400);

        DocumentType::where('id',$id)->update([
            'deleted'=>1,
            'updated_user'=>$auth->id,
        ]);

    }
}