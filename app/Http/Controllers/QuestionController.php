<?php

namespace App\Http\Controllers;

use App\Http\Requests\AskQuestionRequest;
use App\Question;
use App\Answers;
use App\LectiveActivityQuestionAnswer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Str;


class QuestionController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth', ['except' => ['index', 'show']]);
    // }

    public function index()
    {
        $allQues = Question::latest()->paginate(5);
        return view('questions.index', compact('allQues'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('questions.create');
    }

    public function store(AskQuestionRequest $request)
    {
        $queData = Question::create([
            'title' => $request['title'],
            'body' => $request['body'],
            'user_id' => Auth::user()->id
        ]);
        if ($queData) {
            return redirect('/questions')->with('success', 'question is submitted successfully');
        }
        return redirect()->back()->withInput()->with('error', 'question is not submitted');
    }

    public function show(String $question)
    {
        $parQue = Question::findOrFail($question);
        $parQue->increment('views');
        return view('questions.show', compact('parQue'));
    }


    public function edit(String $question)
    {
        // if (Gate::allows('update', $question)) {
        $editQue = Question::findOrFail($question);
        return view('questions.edit', compact('editQue'));
        // }
        // abort(403, 'access denied');
    }


    public function update(AskQuestionRequest $request, Question $question)
    {
        $question = Question::findOrFail($request->id_question);
        $updateQue =  $question->update($request->only('title', 'body'));
        if ($updateQue) {
            return redirect('/questions')->with('success', 'question is updated successfully');
        }
        return redirect()->back()->withInput()->with('error', 'question is not updated');
    }

    public function destroy(String $question)
    {
        // if (Gate::allows('delete', $question)) {
        $delteQue = Question::findOrFail($question);
        $delteQue = $delteQue->delete();
        if ($delteQue) {
            return redirect('/questions')->with('success', 'La pregunta ha sido eliminada exitosamente');
        }
        return redirect()->back()->withInput()->with('error', 'La pregunta no ha sido borrada');
        // }
        // abort(403, 'access denied');
    }


    public function responseQuestiononLective(Request $request,int $id_lective_planification,int $id_weekly_plan,int $id_class,int $id_activity,int $id_question)
    {
        $data = $request->all();
        $auth = Auth::user();

        LectiveActivityQuestionAnswer::where('id_lective_activity_question',$id_question)->where('id_student',$auth->id)->where('deleted',0)->update(array('deleted'=>1,'updated_user'=>$auth->id));

        LectiveActivityQuestionAnswer::create([
            'id_lective_activity_question'=>$id_question,
            'id_student'=>$auth->id,
            'response'=>$data['response'],
            'is_correct'=>$data['ok'],
            'state'=>1,
            'deleted'=>0,
            'updated_user'=>$auth->id
        ]);


    }
}
