<?php

namespace App\Http\Controllers;

use App\Imports\bookImport;
use App\Imports\teachersClassroomImport;
use App\Imports\studensClassroomImport;
use App\Imports\usersImport;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

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
        return redirect('/importar_adm')->with('success', 'All good!');
    }
    public function importTeacherClassroom()
    {
        Excel::import(new teachersClassroomImport, 'asignacion.xlsx');

        // return redirect('/')->with('success', 'File imported successfully!');
        return redirect('/importar_adm')->with('success', 'All good!');
    }
    public function importStudentClassroom()
    {
        Excel::import(new studensClassroomImport, 'asignacionStudent.xlsx');

        // return redirect('/')->with('success', 'File imported successfully!');
        return redirect('/importar_adm')->with('success', 'All good!');
    }
    public function importUsers()
    {
        Excel::import(new usersImport, 'users.xlsx');

        // return redirect('/')->with('success', 'File imported successfully!');
        return redirect('/importar_adm')->with('success', 'All good!');
    }
}
