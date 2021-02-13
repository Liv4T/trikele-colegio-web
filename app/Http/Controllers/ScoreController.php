<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Activity;
use App\Indicator;
use App\ScoreAnual;
use App\Courses;
use App\ScoreActivity;
use App\ScoreCumulative;
use App\CoursesAchievement;
use App\ClassroomStudent;
use App\User;
use Auth;

class ScoreController extends Controller
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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getStudentByArea(String $id_area, String $id_classroom)
    {
        //
        $scores = [];
        $studenAsigned = ClassroomStudent::where('id_classroom', $id_classroom)->get();
        if (isset($studenAsigned)) {
            foreach ($studenAsigned as $index => $asigned) {
                $student = User::find($asigned->id_user);
                $scoreCumulative = ScoreCumulative::where('id_user', $student->id)->where('id_area', $id_area)->first();
                $scores[$index] = [
                    'name' => $student->name . " " . $student->last_name,
                    'score' => isset($scoreCumulative->score) ? $scoreCumulative->score : 0,
                ];
            }
        }
        return $scores;
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
    public function saveIndicator(Request $request)
    {
        $data = $request->all();

        if(isset($data['id_indicator']) && $data['id_indicator']!=0)
        {
            Indicator::where('id', $data['id_indicator'])->update(array('type_activity'=>$data['type_activity'], 'activity_rate'=>$data['activity_rate']));     
        }
        else{
            $indicator = new Indicator;

            $indicator->id_annual = $data['id_annual'];
            $indicator->id_achievement = $data['id_achievement'];
            $indicator->type_activity = $data['type_activity'];
            $indicator->activity_rate = $data['activity_rate'];
            $indicator->save();
        }     
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getIndicator(String $id)
    {

        $indicators = Indicator::where('id_achievement', $id)->get();
        return $indicators;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $user = Auth::user();

        $activity = Activity::find($data['id_activity']);
        $scoreActivity = new ScoreActivity;

        $scoreActivity->id_user = $user->id;
        $scoreActivity->score = $data['score'];
        $scoreActivity->id_indicator = $activity->id_indicator;
        $scoreActivity->save();

        $indicator = Indicator::find($activity->id_indicator);
        $score_indicator = ($indicator->activity_rate / 100);

        $scoreAnual = ScoreAnual::where('id_user', $user->id)->where('id_annual', $indicator->id_annual)->first();
        if (isset($scoreAnual)) {
            $scoreAnual->score = $scoreAnual->score + ($scoreActivity->score * $score_indicator);
            $scoreAnual->save();
        } else {
            $scoreAnual = new ScoreAnual;
            $scoreAnual->id_score = $scoreActivity->id;
            $scoreAnual->id_annual = $indicator->id_annual;
            $scoreAnual->score = ($scoreActivity->score * $score_indicator);
            $scoreAnual->id_user = $user->id;
            $scoreAnual->save();
        }

        $achievement = CoursesAchievement::find($indicator->id_achievement);
        $courses = Courses::find($achievement->id_planification);
        $score_achievement = ($achievement->percentaje / 100);

        $scoreCumulative = ScoreCumulative::where('id_user', $user->id)->where('id_area', $achievement->id_materia)->first();
        if (isset($scoreCumulative)) {
            $scoreCumulative->score = $scoreCumulative->score + ($scoreAnual->score * $score_achievement);
            $scoreCumulative->save();
        } else {
            $scoreCumulative = new ScoreCumulative;
            $scoreCumulative->id_user = $user->id;
            $scoreCumulative->score = ($scoreAnual->score * $score_achievement);
            $scoreCumulative->id_area = $courses->id_area;
            $scoreCumulative->save();
        }
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
        $data = $request->all();
        Indicator::where('id', $id)->update(array('type_activity'=>$data['type_activity'], 'activity_rate'=>$data['activity_rate']));     

        return 'ok';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteIndicator(request $request)
    {
        $data = $request->all();
        Indicator::where('id', $data['id_indicator'])->delete();

        return 'ok';
    }
}
