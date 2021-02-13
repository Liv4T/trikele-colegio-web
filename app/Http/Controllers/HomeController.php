<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Response;
use Auth;
use App\User;
use App\Group;
use App\Terms;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    public function savePrintDoc(Request $request)
    {
        // dd($request->dataBoard);
        // $phpWord = new \PhpOffice\PhpWord\PhpWord();
        // $section = $phpWord->addSection();
        // // $text = $section->addText($request->get('dataBoard'));
        // $text = $section->addText(
        //     htmlspecialchars(
        //         $request->get('dataBoard')
        //     )
        //    );
        // $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'Word2007');
        // header('Content-Type: text/html');
        // $objWriter->save('example_doc2.docx');

        $content = $request->get('dataBoard');

        $phpWord = new \PhpOffice\PhpWord\PhpWord();
        $section = $phpWord->addSection();

        $section->addText('');

        \PhpOffice\PhpWord\Shared\Html::addHtml(
            $section,
            "<html>
        <head>
        <style>
        h2{
            font-size: 1.5em;
            font-weight: bolder;
            color: #FF0000;
        }
        </style>
        </head>
        <body>
        $content
        </body>
        </html>
        ",
            true,
            true
        );

        header('Content-Type: text/html');
        header("Content-disposition: attachment; filename=" . date("Y-m-d") . ".docx");

        $objectWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'Word2007');
        $name_doc = "liv4tskool-" . Auth::user()->id . ".docx";
        $objectWriter->save($name_doc);
    }
    public function downloadFile()
    {
        $name_doc = "liv4tskool-" . Auth::user()->id . ".docx";
        $pathtoFile = public_path() . '/' . $name_doc;
        // var_dump($pathtoFile);
        // die;
        return (env('APP_STAGE') == "DEV") ? env('APP_URL_DEV') . $name_doc : env('APP_URL_PROD') . $name_doc;
        // return response()->download($pathtoFile, 'Benjamin_Gakami_CV.docx', $headers);
        // return Redirect::to($pathtoFile);
    }
    public function CreateGroup()
    {
        $groups = auth()->user()->groups;

        $users = User::where('id', '<>', auth()->user()->id)->get();
        $user = User::find(auth()->user()->id);
        // $user = auth()->user()->id;
        // $user = $user->id;
        return view('grupos', ['groups' => $groups, 'users' => $users, 'user' => $user->id]);
    }
    public function UserTerms(Request $request)
    {
        $data = $request->all();


        $user_terms = new Terms();

        $user_terms->id_user = Auth::user()->id;
        $user_terms->status = $data['status'];

        $user_terms->save();
        return "ok";
    }
    public function getUserTerms()
    {
        $terms = Terms::where('id_user', Auth::user()->id)->first();
        return response()->json($terms);
    }
}
