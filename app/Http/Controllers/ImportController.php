<?php

namespace App\Http\Controllers;

use App\Imports\bookImport;
use App\Imports\teachersClassroomImport;
use App\Imports\studensClassroomImport;
use App\Imports\usersImport;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;

class ImportController extends Controller
{
    public function import()
    {
        // \Excel::import('book.csv', function ($reader) {

        //     foreach ($reader->get() as $book) {
        //         Book::create([
        //             'name' => $book->title,
        //             'author' => $book->author,
        //             'year' => $book->publication_year
        //         ]);
        //     }
        // });

        Excel::import(new bookImport, 'book.xlsx');

        // return redirect('/')->with('success', 'File imported successfully!');
        return "Importación realizada con exito";
    }
    public function importTeacherClassroom()
    {
        try {
            Excel::import(new teachersClassroomImport, 'asignacion.xlsx');        
            return "Importación realizada con exito";
        } catch (\Throwable $th) {
            return "Ningun campo puede ir Vacio, revisa e intenta de nuevo";
        }        
    }
    public function importStudentClassroom()
    {
        try {
            Excel::import(new studensClassroomImport, 'asignacionStudent.xlsx');
            return "Importación realizada con exito";
        } catch (\Throwable $th) {
            return "Ningun campo puede ir Vacio, revisa e intenta de nuevo";
        }        
    }
    public function importUsers()
    {
        try {
            Excel::import(new usersImport, 'users.xlsx');
            return "Importación realizada con exito";
        } catch (\Throwable $th) {
            return "Ningun campo puede ir Vacio, revisa e intenta de nuevo";
        }        
    }

    public function uploadFiles(Request $request)
    {
        if ($request->file == null) {            
            return "el documento no existe";
        }else{
            $request->file->move(public_path(),'users.xlsx');
            return "subido y guardado";
        }
   }
}
