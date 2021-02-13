<?php

namespace App\Http\Controllers;

use App\Activity;
use App\ActivityCompleteSentence;
use App\ActivityCompleteSentenceInteraction;
use App\ActivityCrossword;
use App\ActivityCrosswordInteraction;
use App\ActivityInteraction;
use App\ActivityQuestion;
use App\ActivityQuestionInteraction;
use App\ActivityRelationship;
use App\ActivityRelationshipInteraction;
use App\ClassContent;
use App\Classroom;
use App\ClassroomStudent;
use App\Classs;
use Illuminate\Support\Facades\Auth;
use App\Weekly;
use Illuminate\Support\Facades\DB;
use App\User;

class CalificationController extends Controller
{
    public function getAllStudents(int $area_id,int $classroom_id)
    {
        $auth = Auth::user();

        if(!isset($auth)) return  response()->json([]);

        $weekly_plans=Weekly::where('id_classroom',$classroom_id)->where('id_area',$area_id)->get();

        $students=DB::table('classroom_student')
                    ->join('users', 'users.id', '=', 'classroom_student.id_user')
                    ->select('users.id as user_id','users.name as user_name','users.last_name as user_lastname', 'users.picture as user_picture', 'users.email as user_email')
                    ->where('classroom_student.id_classroom', $classroom_id)
                    ->orderBy('users.last_name')
                    ->get();

        foreach ($students as $key_student => $student) {

            $progress=0;
            $score=0;
            $activities_pending=0;

            $weekly_plans_with_score=0;
            $weekly_plans_with_progress=0;


            foreach ($weekly_plans as $weekly_plan) {

                $_progress=  DB::select('call obtener_progreso_modulo(?,?)',[$weekly_plan->id, $student->user_id])[0]->porcentaje;

                if($_progress>-1)
                {
                    $weekly_plans_with_progress++;
                    $progress+=$_progress;
                }


                $activities=DB::table('class')
                            ->join('activity', 'activity.id_class', '=', 'class.id')
                            ->where('class.id_weekly_plan', $weekly_plan->id)
                            ->where('activity.deleted', 0)
                            ->where('activity.state', 1)
                            ->get();

                if(count($activities)>0)
                {
                    $weekly_plans_with_score++;
                    $score+=  DB::select('call obtener_calificacion_modulo(?,?)',[$weekly_plan->id, $student->user_id])[0]->calificacion;

                    $activities_interaction=DB::table('class')
                        ->join('activity', 'activity.id_class', '=', 'class.id')
                        ->join('activity_interaction', 'activity_interaction.id_activity', '=', 'activity.id')
                        ->where('class.id_weekly_plan', $weekly_plan->id)
                        ->where('activity.deleted', 0)
                        ->where('activity.state', 1)
                        ->where('activity_interaction.deleted', 0)
                        ->where('activity_interaction.id_student', $student->user_id)//pendientes de calificacion
                        ->where('activity_interaction.state', 2)
                        ->get();

                    $activities_pending+=count($activities_interaction);
                }



            }

            $students[$key_student]->progress = round(($weekly_plans_with_progress>0)?($progress/$weekly_plans_with_progress):-1,2);

            $students[$key_student]->score =round(($weekly_plans_with_score>0)?($score/$weekly_plans_with_score):-1,2);

            $students[$key_student]->score_base=5;

            $students[$key_student]->pending_calification =$activities_pending;
        }
        //DB::select('call obtener_progreso_clase(?,?)',[$clase[$key]->id, $user->id])[0]->porcentaje;

        return  response()->json($students);


    }
    public function getByStudent(int $area_id,int $classroom_id,int $id_student)
    {
        $auth = Auth::user();

        if(!isset($auth)) return  response()->json([]);

        $student=User::find($id_student);

        $weekly_plans=Weekly::where('id_classroom',$classroom_id)->where('id_area',$area_id)->get();


            $progress=0;
            $score=0;
            $activities_pending=0;

            $weekly_plans_with_score=0;
            $weekly_plans_with_progress=0;


            foreach ($weekly_plans as $weekly_plan) {

                $_progress=  DB::select('call obtener_progreso_modulo(?,?)',[$weekly_plan->id, $student->id])[0]->porcentaje;

                if($_progress>-1)
                {
                    $weekly_plans_with_progress++;
                    $progress+=$_progress;
                }

                $activities=DB::table('class')
                            ->join('activity', 'activity.id_class', '=', 'class.id')
                            ->where('class.id_weekly_plan', $weekly_plan->id)
                            ->where('activity.deleted', 0)
                            ->where('activity.state', 1)
                            ->get();

                if(count($activities)>0)
                {
                    $weekly_plans_with_score++;
                    $score+=  DB::select('call obtener_calificacion_modulo(?,?)',[$weekly_plan->id, $id_student])[0]->calificacion;

                    $activities_interaction=DB::table('class')
                        ->join('activity', 'activity.id_class', '=', 'class.id')
                        ->join('activity_interaction', 'activity_interaction.id_activity', '=', 'activity.id')
                        ->where('class.id_weekly_plan', $weekly_plan->id)
                        ->where('activity.deleted', 0)
                        ->where('activity.state', 1)
                        ->where('activity_interaction.deleted', 0)
                        ->where('activity_interaction.id_student', $id_student)//pendientes de calificacion
                        ->where('activity_interaction.state', 2)
                        ->get();

                    $activities_pending+=count($activities_interaction);
                }



            }

            $student->progress = round(($weekly_plans_with_progress>0)?($progress/$weekly_plans_with_progress):-1,2);

            $student->score =round(($weekly_plans_with_score>0)?($score/$weekly_plans_with_score):-1,2);

            $student->score_base=5;

            $student->pending_calification =$activities_pending;

        return  response()->json($student);


    }
    public function getAllModules(int $area_id,int $classroom_id,int $student_id){
        $auth = Auth::user();

        if(!isset($auth)) return  response()->json([]);


        $weekly_plans=Weekly::where('id_classroom',$classroom_id)->where('id_area',$area_id)->get();

        foreach ($weekly_plans as $key_weekly_plan => $weekly_plan) {
            $score=-1;
            $activities_interaction=[];
            $progress=  DB::select('call obtener_progreso_modulo(?,?)',[$weekly_plan->id, $student_id])[0]->porcentaje;

            $activities=DB::table('class')
                ->join('activity', 'activity.id_class', '=', 'class.id')
                ->where('class.id_weekly_plan', $weekly_plan->id)
                ->where('activity.deleted', 0)
                ->where('activity.state', 1)
                ->get();

            if(count($activities)>0)
            {
                $score=  DB::select('call obtener_calificacion_modulo(?,?)',[$weekly_plan->id, $student_id])[0]->calificacion;
                $activities_interaction=DB::table('class')
                ->join('activity', 'activity.id_class', '=', 'class.id')
                ->join('activity_interaction', 'activity_interaction.id_activity', '=', 'activity.id')
                ->where('class.id_weekly_plan', $weekly_plan->id)
                ->where('activity.deleted', 0)
                ->where('activity.state', 1)
                ->where('activity_interaction.deleted', 0)
                ->where('activity_interaction.id_student', $student_id)//pendientes de calificacion
                ->where('activity_interaction.state', 2)
                ->get();

            }





            $weekly_plans[$key_weekly_plan]->progress = $progress;
            $weekly_plans[$key_weekly_plan]->score = $score;
            $weekly_plans[$key_weekly_plan]->pending_calification = count($activities_interaction);



        }


        return  response()->json($weekly_plans);
    }
    public function getAllClasses(int $area_id,int $classroom_id,int $student_id,int $id_module){
        $auth = Auth::user();

        if(!isset($auth)) return  response()->json([]);


            $classes=Classs::where('id_weekly_plan',$id_module)->get();

            foreach ($classes as $key_class => $class) {
                $progress=  DB::select('call obtener_progreso_clase(?,?)',[$class->id, $student_id])[0]->porcentaje;
                $score=  DB::select('call obtener_calificacion_clase(?,?)',[$class->id, $student_id])[0]->calificacion;


                $activities_interaction=DB::table('class')
                        ->join('activity', 'activity.id_class', '=', 'class.id')
                        ->join('activity_interaction', 'activity_interaction.id_activity', '=', 'activity.id')
                        ->where('class.id', $class->id)
                        ->where('activity.deleted', 0)
                        ->where('activity.state', 1)
                        ->where('activity_interaction.deleted', 0)
                        ->where('activity_interaction.id_student', $student_id)//pendientes de calificacion
                        ->where('activity_interaction.state', 2)
                        ->get();


                        $classes[$key_class]->progress = $progress;
                        $classes[$key_class]->score = $score;
                        $classes[$key_class]->score_base = 5;
                        $classes[$key_class]->pending_calification = count($activities_interaction);

            }




        return  response()->json($classes);
    }
    public function getByClass(int $area_id,int $classroom_id,int $student_id,int $module_id,int $class_id){
        $auth = Auth::user();

        if(!isset($auth)) return  response()->json([]);

        $class=Classs::find($class_id);

        $class->content=DB::table('class_content')
                            ->leftJoin('class_content_interaction',function($leftJoin)use($student_id){
                               $leftJoin->on( 'class_content.id', '=', 'class_content_interaction.id_class_content')->where('class_content_interaction.deleted',0)->where('id_student',$student_id);
                            })
                            ->where('class_content.id_class', $class_id)
                            ->where('class_content.deleted', 0)
                            ->select('class_content.*','class_content_interaction.updated_at as date_interaction')
                            ->get();


        $class->activities=DB::table('activity')
                            ->leftJoin('activity_interaction',function($leftJoin)use($student_id){
                               $leftJoin->on( 'activity.id', '=', 'activity_interaction.id_activity')->where('activity_interaction.deleted',0)->where('id_student',$student_id);
                            })
                            ->where('activity.id_class', $class_id)
                            ->where('activity.deleted', 0)
                            ->select('activity.*','activity_interaction.latest_access_date as date_interaction','activity_interaction.score as score','activity_interaction.state as state_interaction')
                            ->get();


        foreach ($class->activities as $key_activity => $activity) {

            $module=[];

            if($activity->activity_type=='CUESTIONARIO')
            {

                $module=[
                    'questions'=>[]
                ];

                $activity_questions=ActivityQuestion::where('id_activity',$activity->id)->where('deleted',0)->get();

                foreach($activity_questions as $i_question => $question) {
                    $student_response=[];
                    $response='';

                    $student_response=ActivityQuestionInteraction::where('id_activity_question',$question->id)->where('id_student',$student_id)->where('deleted',0)->first();

                    if(!isset($student_response))
                    {
                        $student_response=['response'=>-1];
                    }
                    else{
                        $response=$student_response->response;
                    }


                    array_push($module['questions'],[
                        'id'=>$question->id,
                        'question'=>$question->question,
                        'type_question'=>$question->type_question,
                        'options'=>json_decode($question->content),
                        'valid_answer_index'=>json_decode($question->correct_answer),
                        'justify'=>$question->justify,
                        'state'=>$question->state,
                        'student_response'=>$student_response,
                        'response'=>$response
                    ]);
                }
            }


            if($activity->activity_type=='COMPLETAR_ORACION')
            {

                $module=[
                    'sentences'=>[]
                ];


                $activity_sentences=ActivityCompleteSentence::where('id_activity',$activity->id)->where('deleted',0)->get();

                foreach($activity_sentences as $sentence) {
                    $student_response=[];

                    $model_student_response=ActivityCompleteSentenceInteraction::where('id_activity_complete_sentence',$sentence->id)->where('id_student',$student_id)->where('deleted',0)->first();

                    if(!isset($model_student_response))
                    {
                        $student_response=[];
                    }
                    else{
                        $student_response=json_decode($model_student_response->response);
                    }


                    $sentence_content=json_decode($sentence->content,true);

                    $sentence_content['id']=$sentence->id;
                    $sentence_content['state']=$sentence->state;
                    $sentence_content['student_response']=$student_response;

                    array_push($module['sentences'],$sentence_content);
                }
            }


            if($activity->activity_type=='RELACION')
            {

                $module=[];

                $activity_relationship=ActivityRelationship::where('id_activity',$activity->id)->where('deleted',0)->first();

                if(isset($activity_relationship))
                {
                    $student_response=null;

                        $student_response=ActivityRelationshipInteraction::where('id_activity_relationship',$activity_relationship->id)->where('id_student',$student_id)->where('deleted',0)->first();

                        if(!isset($student_response))
                        {
                            $student_response=null;
                        }

                    $module=json_decode($activity_relationship->content,true);

                    $module['id']=$activity_relationship->id;
                    $module['state']=$activity_relationship->state;
                    if(isset($student_response))
                    {
                        $module['student_response']=json_decode($student_response->response);
                    }


                }


            }

            if($activity->activity_type=='CRUCIGRAMA')
            {

                $module=[];


                $activity_crossword=ActivityCrossword::where('id_activity',$activity->id)->where('deleted',0)->first();

                if(isset($activity_crossword))
                {
                    $student_response=null;

                        $student_response=ActivityCrosswordInteraction::where('id_activity_crossword',$activity_crossword->id)->where('id_student',$student_id)->where('deleted',0)->first();

                        if(!isset($student_response))
                        {
                            $student_response=null;
                        }

                    $module=json_decode($activity_crossword->content,true);

                    $module['id']=$activity_crossword->id;
                    $module['state']=$activity_crossword->state;

                    if(isset($student_response))
                    {
                        $module['words']=json_decode($student_response->response);
                    }


                }


            }


            $class->activities[$key_activity]->module=$module;

        }


        return  response()->json($class);
    }
}
