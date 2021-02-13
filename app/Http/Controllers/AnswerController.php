<?php

namespace App\Http\Controllers;

use App\Answers;
use App\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class AnswerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['index', 'show']]);
    }


    public function store(Question $question, Request $request)
    {
        $request->validate([
            'body' => 'required'
        ]);
        // answer of corresponding question
        // ---------------------------------
        $question = Question::findOrFail($request->id_question);
        $question->answer()->create([
            'body' => $request['body'],
            'user_id' => Auth::user()->id
        ]);

        $question->increment('answer_count');

        return response()->json('ok');
    }

    public function edit(Question $question, Answers $answer)
    {
        if (Gate::allows('update', $answer)) {
            $editAns = Answers::findOrFail($answer->id);
            return view('answers.edit', compact('question', 'editAns'));
        }
        abort(403, 'access denied');
    }

    public function update(Request $request, Question $question, Answers $answer)
    {
        $request->validate([
            'body' => 'required'
        ]);

        $updateAns = $answer->update([
            'body' => $request['body']
        ]);

        if ($request->expectsJson()) {
            return response()->json([
                'message' => 'answer is updated successfully',
                'updatedAnswer' => $answer->body
            ]);
        }

        //        if ($updateAns){
        //            return redirect(route('questions.show', $question->id))->with('success','answer is updated successfully');
        //        }
        //
        return redirect()->back()->withInput()->with('error', 'answer is not updated');
    }


    public function destroy(Question $question, Answers $answer)
    {
        if (Gate::allows('delete', $answer)) {
            $correspondingQue = $question;
            $correspondingQue->decrement('answer_count');
            // operation for if best answer is deleted then the 'bestAnswer' attribute will be null
            if ($answer->id === $correspondingQue->bestAnswer) {
                $correspondingQue->bestAnswer = null;
                $correspondingQue->save();
                //                $answer->delete();
                return back()->with('success', 'this is not best answer at all');
            } else {
                $answer->delete();
                if (request()->expectsJson()) {
                    return response()->json([
                        'message' => 'answer is deleted successfully',
                    ]);
                }
                //                return back()->with('success', 'answer is deleted successfully');
            }
        }
        abort(403, 'access denied');
    }
}
