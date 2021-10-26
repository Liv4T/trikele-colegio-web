<?php

namespace App\Http\Controllers;

use App\Activity;
use App\ActivityInteraction;
use App\Trivia;
use App\Answer;
use App\Area;
use App\Classs;
use App\Courses;
use App\Indicator;
use App\Classroom;
use App\ClassroomStudent;
use App\CoursesAchievement;
use App\Repository;
use App\RepositoryStudents;
use App\Weekly;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class ActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexActivityByArea(String $id_area, String $id_classroom)
    {
        $user = Auth::user();
        if ($user->type_user == 3) {
            $weekly_plans = Weekly::where('id_area', $id_area)->where('id_classroom', $id_classroom)->get();
        } elseif ($user->type_user == 2) {
            $weekly_plans = Weekly::where('id_teacher', $user->id)->where('id_area', $id_area)->where('id_classroom', $id_classroom)->get();
        }

        $activities=[];
        foreach ($weekly_plans as $key => $weekly_plan) {

            $classes=Classs::where('id_weekly_plan',$weekly_plan->id)->get();

            foreach ($classes as $key_class => $class) {

                if ($user->type_user == 3){
                    $activity_list = Activity::where('id_class', $class->id)->where('deleted',0)->where('state',2)->get();
                }
                else{
                    $activity_list = Activity::where('id_class', $class->id)->where('deleted',0)->get();
                }

                foreach ($activity_list as $num => $act) {

                    $interaction=ActivityInteraction::where('id_activity',$act->id)->where('id_student',$user->id)->where('deleted',0)->first();

                    array_push($activities,[
                        'id' => $act->id,
                        'activity_name' => $act->activity_name,
                        'activity_type' => $act->activity_type,
                        'deliver_date' => $act->deliver_date,
                        'feedback_date' => $act->feedback_date,
                        'activity_state'=>isset($interaction)?$interaction->state:1,
                        'qualification'=>isset($interaction)?$interaction->qualification:0
                    ]);
                }

            }


        }
        return response()->json($activities);

    }
    public function getActivitiesTeacher(String $id_area, String $id_classroom){
        $user = Auth::user();
        $activities=DB::table('classroom_teacher')
                    ->join('classroom', 'classroom_teacher.id_classroom', '=', 'classroom.id')
                    ->join('annual_planification', 'annual_planification.id_classroom', '=', 'classroom_teacher.id_classroom')
                    ->join('area', 'annual_planification.id_area', '=', 'area.id')
                    ->join('achievement_planification', 'achievement_planification.id_planification', '=', 'annual_planification.id')
                    ->join('activity', 'activity.id_achievement', '=', 'achievement_planification.id')
                    ->join('class', 'class.id', '=', 'activity.id_class')
                    ->leftJoin('activity_interaction', 'activity_interaction.id_activity', '=', 'activity.id')
                    ->select(
                        'area.name as area_name',
                        'classroom.name as classroom_name',
                        'activity.*',
                        'activity_interaction.score as interaction_score',
                        'activity_interaction.state as interaction_state',
                        'class.id_weekly_plan as weekly_plan_id',
                        'class.activityForPIARStudents',
                        'class.activityForSelectStudents',
                        'class.activityForAllStudents',
                        'class.selectedStudents',
                        'class.date_init_class',
                        'class.url_class')
                    
                    ->where('classroom_teacher.id_user','=',$user->id)
                    ->where('activity.deleted','=',0)
                    ->where('area.id','=',$id_area)
                    ->where('classroom.id','=',$id_classroom)

                    ->orderBy('id','desc')
                    ->limit(30)
                    ->get();
        return response()->json($activities->filter(function($activity){
            return $activity->interaction_state<3;
        }));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAllActivitiesRepositories()
    {
        $user = Auth::user();
        if ($user->type_user == 3) {
            $user_asignateds = ClassroomStudent::where('id_user', $user->id)->get();
            if (isset($user_asignateds)) {
                foreach ($user_asignateds as $key => $user_asignated) {
                    $classroom = Classroom::find($user_asignated->id_classroom);
                    $class = Area::where('id_grade', $classroom->id_grade)->get();
                    foreach ($class as $key => $area) {
                        $areas[] = $area->id;
                    }
                }
                $repositoris = Repository::whereIn('id_area', $areas)->where('id_classroom', $user_asignated->id_classroom)->get();
                if (isset($repositoris)) {
                    foreach ($repositoris as $repo) {
                        $area = Area::findOrFail($repo->id_area);
                        $repoStudent = RepositoryStudents::where('id_student', Auth::user()->id)->where('id_repository', $repo->id)->first();
                        $status_student = isset($repoStudent) ? $repoStudent->status : 'Pendiente';
                        $repo->status = $status_student;
                        $repo->area = $area->name;
                    }
                    $repositoris;
                    // return $repos;
                } else {
                    $repos = [];
                }
                $weekly_plans = Weekly::whereIn('id_area', $areas)->where('id_classroom', $user_asignated->id_classroom)->get();
                $activities=[];
                foreach ($weekly_plans as $key => $weekly_plan) {
                    $classes=Classs::where('id_weekly_plan',$weekly_plan->id)->get();
                    $area = Area::findOrFail($weekly_plan->id_area);
                    foreach ($classes as $key_class => $class) {
                        $activity_list = Activity::where('id_class', $class->id)->where('deleted',0)->where('state',2)->get();
                        foreach ($activity_list as $num => $act) {
                            $interaction=ActivityInteraction::where('id_activity',$act->id)->where('id_student',$user->id)->where('deleted',0)->first();
                            array_push($activities,[
                                'id' => $act->id,
                                'activity_name' => $act->activity_name,
                                'activity_type' => $act->activity_type,
                                'deliver_date' => $act->deliver_date,
                                'feedback_date' => $act->feedback_date,
                                'activity_state'=>isset($interaction)?$interaction->state:1,
                                'qualification'=>isset($interaction)?$interaction->qualification:0,
                                'area'=>$area->name,
                            ]);
                        }
                    }

                }
                $data=  $activities;

                return response()->json($data);
            }
        }
        // } elseif ($user->type_user == 2) {
        //     $weekly_plans = Weekly::where('id_teac   her', $user->id)->where('id_area', $id_area)->where('id_classroom', $id_classroom)->get();
        // }

        // $activities=[];
        // foreach ($weekly_plans as $key => $weekly_plan) {

        //     $classes=Classs::where('id_weekly_plan',$weekly_plan->id)->get();

        //     foreach ($classes as $key_class => $class) {

        //         if ($user->type_user == 3){
        //             $activity_list = Activity::where('id_class', $class->id)->where('deleted',0)->where('state',2)->get();
        //         }
        //         else{
        //             $activity_list = Activity::where('id_class', $class->id)->where('deleted',0)->get();
        //         }

        //         foreach ($activity_list as $num => $act) {

        //             $interaction=ActivityInteraction::where('id_activity',$act->id)->where('id_student',$user->id)->where('deleted',0)->first();

        //             array_push($activities,[
        //                 'id' => $act->id,
        //                 'activity_name' => $act->activity_name,
        //                 'activity_type' => $act->activity_type,
        //                 'deliver_date' => $act->deliver_date,
        //                 'feedback_date' => $act->feedback_date,
        //                 'activity_state'=>isset($interaction)?$interaction->state:1,
        //                 'qualification'=>isset($interaction)?$interaction->qualification:0
        //             ]);
        //         }

        //     }


        // }
        // return response()->json($activities);

    }


    public function getByCurrentStudent()
    {
        $user = Auth::user();

        if(!isset($user)) return response()->json([]);

        $activities=DB::table('classroom_student')
                    ->join('classroom', 'classroom_student.id_classroom', '=', 'classroom.id')
                    ->join('annual_planification', 'annual_planification.id_classroom', '=', 'classroom_student.id_classroom')
                    ->join('area', 'annual_planification.id_area', '=', 'area.id')
                    ->join('achievement_planification', 'achievement_planification.id_planification', '=', 'annual_planification.id')
                    ->join('activity', 'activity.id_achievement', '=', 'achievement_planification.id')
                    ->join('class', 'class.id', '=', 'activity.id_class')
                    ->leftJoin('activity_interaction', 'activity_interaction.id_activity', '=', 'activity.id')
                    ->select('area.name as area_name','classroom.name as classroom_name','activity.*','activity_interaction.score as interaction_score','activity_interaction.state as interaction_state','class.id_weekly_plan as weekly_plan_id')
                    ->where('classroom_student.id_user', $user->id)
                    ->where('activity.deleted',0)
                    ->orderBy('activity.delivery_max_date')
                    ->limit(30)
                    ->get();

        if(count($activities)==0)
        {
            return response()->json([]);
        }

        return response()->json($activities->filter(function($activity){
            return $activity->interaction_state<3;
        }));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Activity = Activity::all();

        return response()->json($Activity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function activityId(Request $request, String $id)
    {
        $quiz = $id;
        return view("trivia", compact("quiz"));;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getActivityById(String $id)
    {
        $activity= Activity::find($id);

        if(isset($activity))
        {
            $activity->achievement_data=CoursesAchievement::find($activity->achievement);
            $activity->indicator_data=Indicator::find($activity->id_indicator);
            $activity->class_data=Classs::find($activity->id_weekly_plan);

            if(isset($activity->class_data))
            {
                $activity->weekly_data=Weekly::find( $activity->class_data->id_weekly_plan);
            }
        }

        return $activity;
    }

    public function saveStudentData(Request $request,int $id_area,int $id_classroom,int $id_activity)
    {
        $user = Auth::user();
        $data=$request->all();

        if(!isset($data)) return response('Error al procesar. Contenido es requerido.',400);


        $is_qualificated=$data['score']>0 && $data['complete'];

        ActivityInteraction::create([
            'id_activity'=>$id_activity,
            'id_student'=>$user->id,
            'score'=>$data['score'],
            'state'=>$is_qualificated?3:1
        ]);

        //todo add interaction user
    }

    public function saveTeacherScore(Request $request,int $id_activity, int $id_student)
    {
        $user = Auth::user();

        if(!isset($user)) return response('Usuario no autenticado.',402);


        $data=$request->all();

        if(!isset($data)) return response('Error al procesar. Contenido es requerido.',400);


        $activity=Activity::find($id_activity);

        $activity_interaction=ActivityInteraction::where('id_activity',$activity->id)->where('deleted',0)->first();

        if(!isset($activity_interaction))
        {
            ActivityInteraction::create([
                'id_activity'=>$id_activity,
                'id_student'=>$id_student,
                'score'=>$data['score'],
                'is_qualified'=> isset($data['score']) ? 1 : 0,
                'qualified_date'=>date("Y-m-d H:i"),
                'state'=>3,
                'deleted'=>0,
                'updated_user'=>$user->id,
            ]);

        }else{
            ActivityInteraction::where('id_activity',$activity->id)->update([
                'score'=>$data['score'],
                'qualified_date'=>date("Y-m-d H:i"),
                'is_qualified'=> isset($data['score']) ? 1 : 0,
                'state'=>3,
                'deleted'=>0,
                'updated_user'=>$user->id,
            ]);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAllQuestions(Request $request, String $id)
    {
        $Trivias = Trivia::where('id_activity', $id)->inRandomOrder()->get();
        $trivia = [];
        foreach ($Trivias as $key => $Trivia) {
            $answers = Answer::where('question',  $Trivia->id)->inRandomOrder()->get();
            $respuestas = array();
            foreach ($answers as $answer) {
                if ($answer->correct == 1) {
                    $respuestas[] = ["text" => $answer->answer, 'correct' => true];
                } else {
                    $respuestas[] = ["text" => $answer->answer];
                }
            }
            // var_dump($respuestas);
            // die;
            $trivia[$key] = [
                'text' => $Trivia->question,
                'responses' => $respuestas

            ];
        }
        $quiz = [
            'questions' => $trivia
        ];

        return response()->json($quiz);
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
        $data = $request->all();
        $activity = Activity::create([
            'achievement'   => $data['achievement'],
            'activity_desc' => $data['activity_desc'],
            'activity_name' => $data['activity_name'],
            'activity_type' => $data['activity_type'],
            'deliver_date'  => $data['deliver_date'],
            'feedback_date' => $data['feedback_date'],
            'id_weekly_plan' => $data['id_weekly_plan'],
            'id_indicator' => $data['id_indicator'],
            'content'=>json_encode($data['activity_data']),
            'state'=> 2,
            'deleted'=> 0,
        ]);

        if($data['trivia'])
        {
            $Trivias = $data['trivia'];

            foreach ($Trivias as $index => $Trivia) {
                $trivia = Trivia::create([
                    'question' => $Trivia['question'],
                    'id_activity' => $activity->id,
                ]);
                $answers1 = Answer::create([
                    'answer' => $Trivia['answer_1'],
                    'question' => $trivia->id,
                    'correct' => false
                ]);
                $answers2 = Answer::create([
                    'answer' => $Trivia['answer_2'],
                    'question' => $trivia->id,
                    'correct' => false
                ]);
                $answers3 = Answer::create([
                    'answer' => $Trivia['answer_3'],
                    'question' => $trivia->id,
                    'correct' => false
                ]);
                $answers4 = Answer::create([
                    'answer' => $Trivia['correct_answer'],
                    'question' => $trivia->id,
                    'correct' => true
                ]);
            }
        }


        return 'ok';
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function show(Activity $activity)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function edit(Activity $activity)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Activity $activity)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function destroy(Activity $activity)
    {
        //
    }
    public function showTrivia(String $id)
    {
        $trivias = Trivia::where('id_activity', $id)->get();
        $Trivias = array();
        foreach ($trivias as $key => $trivia) {
            $answers = Answer::where('question',  $trivia->id)->inRandomOrder()->get();
            $respuestas = array();
            foreach ($answers as $answer) {
                if ($answer->correct == 1) {
                    $respuestas[] = ["answer" => $answer->answer, 'correct' => true];
                } else {
                    $respuestas[] = ["answer" => $answer->answer];
                }
            }
            // var_dump($respuestas);
            // die;
            $Trivias[$key] = [
                'questions' => $trivia->question,
                'responses' => $respuestas

            ];
        }
        return response()->json($Trivias);
    }
}
