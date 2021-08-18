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
use App\Classs;
use App\Files;
use App\Courses;
use App\Weekly;
use App\CoursesAchievement;
use App\Area;
use App\ClassContent;
use App\ClassContentInteraction;
use App\ClassInteraction;
use App\Classroom;
use App\User;
use App\Grade;
use App\ClassSubject;
use Illuminate\Http\Request;
use Auth;
use PhpParser\Node\Stmt\Foreach_;
use Illuminate\Support\Facades\DB;

class ClassController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clases = Classs::all();
        return $clases;
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

    public function getWeeklyName(String $id_weekly)
    {
        $weekly_name = '';
        $weekly = Weekly::find($id_weekly);
        $weekly_name = $weekly->driving_question;

        return response()->json($weekly_name);
    }

      /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getCourse(int $id_module,int $id_course)
    {
        $auth = Auth::user();
        $user = User::find($auth->id);

        $course=Classs::where('id',$id_course)->first();
        // return ;
        $car_class = 0;
        // Saber el id de la siguiente clase
        $classes = Classs::where('id_weekly_plan', $course->id_weekly_plan)->get();
        foreach($classes as $index_class => $clas){
            if($clas->id == $id_course){
                $car_class = $index_class;
                break;
            }
        }
        $car_class = $car_class +1;
        $next_class = isset($classes[$car_class]) ? $classes[$car_class]->id:false;

        $class_resources=[];

        $content=ClassContent::where('id_class', $course->id)->where('deleted',0)->orderBy('order', 'ASC')->orderBy('id', 'ASC')->get();

        $class_content_required_quantity=0;
        foreach($content as $i_content => $resource) {

            $class_content_interaction=null;
            if($user->type_user==3)//student
            {
                $class_content_interaction= ClassContentInteraction::where('id_class_content',$resource->id)->where('deleted',0)->where('id_student',$user->id)->first();
            }
            
            if(strrpos($resource->content, ".mp4") && strrpos($resource->content, "trikele.com")){
                $resultado =  $resource->content;
            }else{
                $resultado = str_replace("https://trikele.com", "https://trikele.edu.co", $resource->content);
                $resultado = str_replace("http://trikele.com", "https://trikele.edu.co", $resource->content);
            }
            
            array_push( $class_resources,[
                'id'=>$resource->id,
                'id_class'=>$resource->id_class,
                'order'=>$resource->order,
                'content_type'=>$resource->content_type,
                'description'=>$resource->description,
                'content'=>$resultado,                
                'observation'=>$resource->observation,                
                'is_required'=>$resource->is_required,
                'interaction'=> $class_content_interaction

            ]);

            if($resource->is_required)
                $class_content_required_quantity++;
        }

        //get progress
        $class_interaction=null;
        $progress=0;
        if($user->type_user==3)//student
        {
            $progress=DB::select('call obtener_progreso_clase(?,?)',[$course->id, $user->id])[0]->porcentaje;
        }

        $ret=[
            'state'=>$course->state,
            'id_class'=>$course->id,
            'name'=>$course->name,
            'description'=>$course->description,
            'id_weekly_plan'=>$course->id_weekly_plan,
            'hourly_intensity'=>$course->hourly_intensity,
            'content'=>$class_resources,
            'activities'=>[],            
            'activity_quantity'=>$course->activity_quantity,
            'content_quantity'=>$course->content_quantity,
            'class_interaction'=>$class_interaction,
            'progress'=> $progress,
            'next_class'=>$next_class,
        ];



        $activities=Activity::where('id_class', $course->id)->where('deleted',0)->get();


        foreach($activities as $i_activity => $activity) {

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
                    if($user->type_user==3)//student
                    {
                        $student_response=ActivityQuestionInteraction::where('id_activity_question',$question->id)->where('id_student',$user->id)->where('deleted',0)->first();

                        if(!isset($student_response))
                        {
                            $student_response=['response'=>-1];
                        }
                        else{
                            $response=$student_response->response;
                        }
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
                    if($user->type_user==3)//student
                    {
                        $model_student_response=ActivityCompleteSentenceInteraction::where('id_activity_complete_sentence',$sentence->id)->where('id_student',$user->id)->where('deleted',0)->first();

                        if(!isset($model_student_response))
                        {
                            $student_response=[];
                        }
                        else{
                            $student_response=json_decode($model_student_response->response);
                        }
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
                    if($user->type_user==3)//student
                    {
                        $student_response=ActivityRelationshipInteraction::where('id_activity_relationship',$activity_relationship->id)->where('id_student',$user->id)->where('deleted',0)->first();

                        if(!isset($student_response))
                        {
                            $student_response=null;
                        }
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
                    if($user->type_user==3)//student
                    {
                        $student_response=ActivityCrosswordInteraction::where('id_activity_crossword',$activity_crossword->id)->where('id_student',$user->id)->where('deleted',0)->first();

                        if(!isset($student_response))
                        {
                            $student_response=null;
                        }
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




            if($user->type_user==3)//student
            {
                $interaction=ActivityInteraction::where('id_activity',$activity->id)->where('id_student',$user->id)->where('deleted',0)->first();
            }

            if(!isset($interaction))
            {
                $interaction=['state'=>1,'score'=>0];
            }


            array_push($ret['activities'],[
                'id'=>$activity->id,
                'id_achievement'=>$activity->id_achievement,
                'id_indicator'=>$activity->id_indicator,
                'activity_type'=>$activity->activity_type,
                'name'=>$activity->name,
                'description'=>$activity->description,
                'delivery_max_date'=>$activity->delivery_max_date,
                'feedback_date'=>$activity->feedback_date,
                'rules'=>json_decode($activity->rules),
                'is_required'=>$activity->is_required,
                'state'=>$activity->state,
                'updated_user'=>$activity->updated_user,
                'module'=>$module,
                'interaction'=> $interaction
            ]);
        }




        return response()->json($ret);
    }

     /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function saveActivityInteraction(Request $request,int $id_module,int $id_course, int $id_activity)
    {
        $auth = Auth::user();
        $base_score=5;

        if(!isset($auth)) return;

        $this->validate($request, [
            'id' => 'required',
            'module' => 'required',
            'activity_type' => 'required'
        ]);

        $data = $request->all();
        $g_score=0;
        $g_index=0;
        $g_is_qualified=true;

        if($data['activity_type']=='CUESTIONARIO')
        {

            foreach($data['module']['questions'] as $i_question => $question) {

                $g_index++;

                //calcule score
                $score=0;
                $is_qualified=false;
                if($question['type_question']=='SIMPLE_RTA')
                {
                    $is_qualified=true;
                    if($question['response']==$question['valid_answer_index'])
                    {
                        $score=1;
                        $g_score+=$score;

                    }

                }
                else{
                    $g_is_qualified=false;
                }

                $activity_q_interaction=ActivityQuestionInteraction::where('id_activity_question',$question['id'])->where('id_student',$auth->id)->where('deleted',0)->first();

                if(isset($activity_q_interaction))
                {
                    ActivityQuestionInteraction::where('id_activity_question',$question['id'])->where('id_student',$auth->id)->where('deleted',0)->update(array('response'=>$question['response'],'score'=>$score*$base_score,'state'=>($is_qualified?2:1),'deleted'=>0,'updated_user'=>$auth->id));
                }
                else{
                    ActivityQuestionInteraction::create([
                        'id_activity_question'=>$question['id'],
                        'id_student'=>$auth->id,
                        'response'=>$question['response'],
                        'score'=>$score*$base_score,
                        'state'=>($is_qualified?2:1),
                        'deleted'=>0,
                        'updated_user'=>$auth->id
                    ]);
                }
            }
        }

        if($data['activity_type']=='COMPLETAR_ORACION')
        {

            foreach($data['module']['sentences'] as $i_sentence => $sentence) {

                $g_index++;

                //calcule score
                $score=0;
                $is_qualified=false;

                if(isset($sentence['student_response']))
                {
                    $r_index=0;
                    foreach($sentence['student_response'] as $i_response => $response) {
                        if(isset($response['response']) && isset($response['content']))
                        {
                            $is_qualified=true;
                            $content_list=explode(",",strtolower($response['content']));
                            foreach($content_list as $i_content => $content) {
                                $score+=(trim($content)==trim(strtolower($response['response'])))?1:0;
                            }
                        }
                        $r_index++;
                    }
                }

                if($is_qualified){
                    $score=$score/$r_index;
                    $g_score+=$score;
                }


                $sentence_interaction=ActivityCompleteSentenceInteraction::where('id_activity_complete_sentence',$sentence['id'])->where('id_student',$auth->id)->where('deleted',0)->first();

                if(isset($sentence_interaction))
                {
                    ActivityCompleteSentenceInteraction::where('id_activity_complete_sentence',$sentence['id'])->where('id_student',$auth->id)->where('deleted',0)->update(array('response'=>json_encode($sentence['student_response']),'score'=>$score*$base_score,'state'=>($is_qualified?2:1),'deleted'=>0,'updated_user'=>$auth->id));
                }
                else{
                    ActivityCompleteSentenceInteraction::create([
                        'id_activity_complete_sentence'=>$sentence['id'],
                        'id_student'=>$auth->id,
                        'response'=>json_encode($sentence['student_response']),
                        'score'=>$score*$base_score,
                        'state'=>($is_qualified?2:1),
                        'deleted'=>0,
                        'updated_user'=>$auth->id
                    ]);
                }
            }
        }

        if($data['activity_type']=='RELACION')
        {
                $module=$data['module'];


                $g_index++;

                //calcule score
                $score=0;
                $is_qualified=false;

                if(isset($module['student_response']))
                {
                    $is_qualified=true;
                    $r_index=0;
                    for($i=0;$i<count($module['student_response']['selected_items']);$i++)
                    {
                        $index_selected=$module['student_response']['selected_items'][$i]['index'];
                        $index_correct=$module['student_response']['items_left'][$i]['index'];
                        if($index_selected==$index_correct)
                        {
                            $score+=1;
                        }

                        $r_index++;
                    }



                }

                if($is_qualified){
                    $score=$score/$r_index;
                    $g_score+=$score;
                }


                $module_interaction=ActivityRelationshipInteraction::where('id_activity_relationship',$module['id'])->where('id_student',$auth->id)->where('deleted',0)->first();

                if(isset($module_interaction))
                {
                    ActivityRelationshipInteraction::where('id_activity_relationship',$module['id'])->where('id_student',$auth->id)->where('deleted',0)->update(array('response'=>json_encode($module['student_response']),'score'=>$score*$base_score,'state'=>($is_qualified?2:1),'deleted'=>0,'updated_user'=>$auth->id));
                }
                else{
                    ActivityRelationshipInteraction::create([
                        'id_activity_relationship'=>$module['id'],
                        'id_student'=>$auth->id,
                        'response'=>json_encode($module['student_response']),
                        'score'=>$score*$base_score,
                        'state'=>($is_qualified?2:1),
                        'deleted'=>0,
                        'updated_user'=>$auth->id
                    ]);
                }

        }

        if($data['activity_type']=='CRUCIGRAMA')
        {
                $module=$data['module'];


                $g_index++;

                //calcule score
                $score=0;
                $is_qualified=false;

                if(isset($module['words']))
                {
                    $is_qualified=true;
                    $r_index=0;
                    for($i=0;$i<count($module['words']);$i++)
                    {
                        $response_word=$module['words'][$i]['response'];
                        $correct_word=$module['words'][$i]['word'];
                        if(strtolower($response_word)==strtolower($correct_word))
                        {
                            $score+=1;
                        }

                        $r_index++;
                    }



                }

                if($is_qualified){
                    $score=$score/$r_index;
                    $g_score+=$score;
                }


                $module_interaction=ActivityCrosswordInteraction::where('id_activity_crossword',$module['id'])->where('id_student',$auth->id)->where('deleted',0)->first();

                if(isset($module_interaction))
                {
                    ActivityCrosswordInteraction::where('id_activity_crossword',$module['id'])->where('id_student',$auth->id)->where('deleted',0)->update(array('response'=>json_encode($module['words']),'score'=>$score*$base_score,'state'=>($is_qualified?2:1),'deleted'=>0,'updated_user'=>$auth->id));
                }
                else{
                    ActivityCrosswordInteraction::create([
                        'id_activity_crossword'=>$module['id'],
                        'id_student'=>$auth->id,
                        'response'=>json_encode($module['words']),
                        'score'=>$score*$base_score,
                        'state'=>($is_qualified?2:1),
                        'deleted'=>0,
                        'updated_user'=>$auth->id
                    ]);
                }

        }



        if(isset($data['interaction']) && isset($data['interaction']['id']))
        {
            ActivityInteraction::where('id',$data['interaction']['id'])->update(array('latest_access_date'=>date("Y-m-d H:i"), 'score'=>($g_score/($g_index>0?$g_index:1))*$base_score,'state'=>($g_is_qualified?3:2),'deleted'=>0,'updated_user'=>$auth->id));
        }
        else{
            ActivityInteraction::create([
                'id_activity'=>$id_activity,
                'id_student'=>$auth->id,
                'latest_access_date'=>date("Y-m-d H:i"),
                'score'=>($g_score/($g_index>0?$g_index:1))*$base_score,
                'state'=>($g_is_qualified?3:2),
                'deleted'=>0,
                'updated_user'=>$auth->id
            ]);
        }


        Activity::where('id',$id_activity)->update(['state'=>2]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function saveCourse(Request $request,int $id_module)
    {
        $auth = Auth::user();

        $this->validate($request, [
            'name' => 'required',
            'description' => 'required',
            'hourly_intensity' => 'required',
           /* 'content' => 'required',
            'activities' => 'required'*/
        ]);

        $data = $request->all();

        $id_course=0;

        if(isset($data['id_class']))
        {
            Classs::where('id',$data['id_class'])->update(
                array(
                    'name'=>$data['name'],
                    'description'=>$data['description'],
                    'hourly_intensity'=>$data['hourly_intensity'],                     
                    'activity_quantity'=>count($data['activities']),
                    'content_quantity'=>count($data['content']))
                );
            $id_course=$data['id_class'];
        }
        else{

            $course=Classs::create([
                'name'=>$data['name'],
                'description'=>$data['description'],
                'hourly_intensity'=>$data['hourly_intensity'],
                'id_weekly_plan'=>$id_module,
                'activity_quantity'=>count($data['activities']),
                'content_quantity'=>count($data['content']),                
                'state'=>1,
                'updated_user'=>$auth->id,
                'deleted'=>0
            ]);
            $id_course=$course->id;
        }

        if($id_course==0) return;

        //update class content
        ClassContent::where('id_class',$id_course)->update(array('deleted'=>1));
        $order_id=0;
        if(count($data['content'])>0)
        {
            foreach($data['content'] as $i_resource => $resource) {

                if($resource['content_type']=='YOUTUBE')
                {
                    $order_id=1;
                }
                else if($resource['content_type']=='VIDEO')
                {
                    $order_id=1;
                }
                else if($resource['content_type']=='LINK')
                {
                    $order_id=2;
                }
                else if($resource['content_type']=='DOCUMENT')
                {
                    $order_id=3;
                }
                else
                    $order_id=4;



                if(isset($resource['id']))
                {
                    ClassContent::where('id',$resource['id'])->update(array('order'=>$order_id,'deleted'=>0,'state'=>1,'content'=>$resource['content'],'description'=>$resource['description'],'is_required'=>$resource['is_required'],'updated_user'=>$auth->id));
                }
                else
                {

                    ClassContent::create([
                        'id_class'=>$id_course,
                        'order'=>$order_id,
                        'content_type'=>$resource['content_type'],
                        'description'=>$resource['description'],
                        'content'=>$resource['content'],
                        'is_required'=>isset($resource['is_required'])?$resource['is_required']:0,
                        'state'=>1,
                        'deleted'=>0,
                        'updated_user'=>$auth->id
                    ]);
                }


            }//foreach class_content

        }



        //update activities

        $activities= Activity::where('id_class',$id_course)->where('deleted',0)->get();

        foreach($activities as $activity)
        {
            ActivityQuestion::where('id_activity',$activity->id)->update(array('deleted'=>1));
            ActivityCompleteSentence::where('id_activity',$activity->id)->update(array('deleted'=>1));
            ActivityCrossword::where('id_activity',$activity->id)->update(array('deleted'=>1));
            ActivityRelationship::where('id_activity',$activity->id)->update(array('deleted'=>1));
        }

        Activity::where('id_class',$id_course)->update(array('deleted'=>1));


        if(count($data['activities'])>0)
        {
            foreach($data['activities'] as $i_activity => $activity) {

                $id_activity=0;
                if(isset($activity['id']))
                {
                    $id_activity=$activity['id'];
                    Activity::where('id',$activity['id'])->update(array('deleted'=>0,'state'=>1,'id_achievement'=>$activity['id_achievement'],'name'=>$activity['name'],'description'=>$activity['description'],'activity_type'=>$activity['activity_type'],'is_required'=>1,'updated_user'=>$auth->id,'delivery_max_date'=>$activity['delivery_max_date'],'feedback_date'=>$activity['feedback_date']));
                }
                else
                {
                    $activity_new=Activity::create([
                        'id_class'=>$id_course,
                        'id_achievement'=>$activity['id_achievement'],
                        'id_indicator'=>$activity['id_indicator'],
                        'activity_type'=>$activity['activity_type'],
                        'name'=>$activity['name'],
                        'description'=>$activity['description'],
                        'is_required'=>1,
                        'state'=>1,
                        'deleted'=>0,
                        'updated_user'=>$auth->id,
                        'delivery_max_date'=>$activity['delivery_max_date'],
                        'feedback_date'=>$activity['feedback_date']
                    ]);
                    $id_activity=$activity_new->id;
                }


                if($id_activity!=0 && $activity['activity_type']=='CUESTIONARIO')
                {
                    //update activity_questions
                    ActivityQuestion::where('id_activity',$id_activity)->update(array('deleted'=>1));
                    foreach($activity['module']['questions'] as $i_question => $question) {
                        $id_question=0;
                        if(isset($question['id']))
                        {
                            $id_question=$question['id'];
                            ActivityQuestion::where('id',$question['id'])->update(array('deleted'=>0,'state'=>1,'question'=>$question['question'],'type_question'=>$question['type_question'],'content'=>(isset($question['options'])?json_encode($question['options']):'[]'),'correct_answer'=>(isset($question['valid_answer_index'])?$question['valid_answer_index']:0),'justify'=>$question['justify'],'updated_user'=>$auth->id));
                        }
                        else{
                            $question_new=ActivityQuestion::create([
                                'id_activity'=>$id_activity,
                                'question'=>$question['question'],
                                'type_question'=>$question['type_question'],
                                'content'=>isset($question['options'])?json_encode($question['options']):'[]',
                                'correct_answer'=>isset($question['valid_answer_index'])?$question['valid_answer_index']:0,
                                'justify'=>$question['justify'],
                                'state'=>1,
                                'deleted'=>0,
                                'updated_user'=>$auth->id
                            ]);
                            $id_question=$question_new->id;
                        }
                    }



                }

                if($id_activity!=0 && $activity['activity_type']=='COMPLETAR_ORACION')
                {
                    //inactive exists
                    ActivityCompleteSentence::where('id_activity',$id_activity)->update(array('deleted'=>1));
                    foreach($activity['module']['sentences'] as $i_modelo => $modelo) {
                        $id_modelo=0;
                        if(isset($modelo['id']))
                        {
                            $id_modelo=$modelo['id'];
                            ActivityCompleteSentence::where('id',$modelo['id'])->update(array('deleted'=>0,'state'=>1,'content'=>json_encode($modelo),'updated_user'=>$auth->id));
                        }
                        else{
                            $modelo_new=ActivityCompleteSentence::create([
                                'id_activity'=>$id_activity,
                                'content'=>json_encode($modelo),
                                'state'=>1,
                                'deleted'=>0,
                                'updated_user'=>$auth->id
                            ]);
                            $id_modelo=$modelo_new->id;
                        }
                    }

                }

                if($id_activity!=0 && $activity['activity_type']=='CRUCIGRAMA')
                {
                    //inactive exists
                    ActivityCrossword::where('id_activity',$id_activity)->update(array('deleted'=>1));
                    $id_modelo=0;
                    $modelo=$activity['module'];
                    if(isset($modelo['id']))
                    {
                        $id_modelo=$modelo['id'];
                        ActivityCrossword::where('id',$modelo['id'])->update(array('deleted'=>0,'state'=>1,'content'=>json_encode($modelo),'updated_user'=>$auth->id));
                    }
                    else{
                        $modelo_new=ActivityCrossword::create([
                            'id_activity'=>$id_activity,
                            'content'=>json_encode($modelo),
                            'state'=>1,
                            'deleted'=>0,
                            'updated_user'=>$auth->id
                        ]);
                        $id_modelo=$modelo_new->id;
                    }

                }

                if($id_activity!=0 && $activity['activity_type']=='RELACION')
                {
                    //inactive exists
                    ActivityRelationship::where('id_activity',$id_activity)->update(array('deleted'=>1));

                    $id_modelo=0;
                    $modelo=$activity['module'];
                    if(isset($modelo['id']))
                    {
                        $id_modelo=$modelo['id'];
                        ActivityRelationship::where('id',$modelo['id'])->update(array('deleted'=>0,'state'=>1,'content'=>json_encode($modelo),'updated_user'=>$auth->id));
                    }
                    else{
                        $modelo_new=ActivityRelationship::create([
                            'id_activity'=>$id_activity,
                            'content'=>json_encode($modelo),
                            'state'=>1,
                            'deleted'=>0,
                            'updated_user'=>$auth->id
                        ]);
                        $id_modelo=$modelo_new->id;
                    }



                }


            }//foreach activities
        }

        return;


    }

        /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function saveCourseContentInteraction(int $id_module,int $id_course,int $id_resource)
    {
        $auth = Auth::user();


        $register_count=ClassContentInteraction::where('id_class_content',$id_resource)->where('id_student',$auth->id)->where('deleted',0)->update(array('updated_user'=>$auth->id));

        if($register_count==0)
        {
            ClassContentInteraction::create([
                'id_class_content'=>$id_resource,
                'id_student'=>$auth->id,
                'deleted'=>0,
                'updated_user'=>$auth->id
            ]);
        }

        return;


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
        if (isset($data['video']) && $data['video'] !== "") {
            $data['video'] = str_replace("watch?v=", "embed/", $data['video']);
        }
        if (isset($data['video1']) && $data['video1'] !== "") {
            $data['video1'] = str_replace("watch?v=", "embed/", $data['video1']);
        }
        if (isset($data['video2']) && $data['video2'] !== "") {
            $data['video2'] = str_replace("watch?v=", "embed/", $data['video2']);
        }
        $documentos = Files::where('unit', $data['name'])->where('type', 1)->orderBy('id', 'ASC')->get();
        $url_documento = [];
        foreach ($documentos as $key => $documento) {
            $url_documento[$key] = $documento->path;
        }
        $courses = Classs::create([
            'description' => $data['description'],
            'id_weekly_plan' => $data['id_weekly_plan'],
            'name' => $data['name'],
            'name_document' => $data['name_document'],
            'url'    => $data['url'],
            'url1'    => $data['url1'],
            'url2'    => $data['url2'],
            'hourly_intensity'    => $data['hourly_intensity'],
            'document' => isset($url_documento[0]) ? $url_documento[0] : '',
            'document1' => isset($url_documento[1]) ? $url_documento[1] : '',
            'document2' => isset($url_documento[2]) ? $url_documento[2] : '',
            'video'  => (isset($data['video']) && $data['video'] !== "") ? $data['video'] : '',
            'video1'  => (isset($data['video1']) && $data['video1'] !== "") ? $data['video1'] : '',
            'video2'  => (isset($data['video2']) && $data['video2'] !== "") ? $data['video2'] : '',
        ]);
        return 'ok';
        $arch = Files::findOrFail($documento->id);
        $arch->delete();
        $vid = Files::findOrFail($video->id);
        $vid->delete();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, String $id)
    {
        $clase = Classs::where('id_weekly_plan', $id)->get();
        $week = Weekly::find($id);
        $user = Auth::user();
        $achievements = [];
        $area = [];
        $classroom = [];
        if ($user->type_user == 3) {
            $Courses = Courses::where('id_area', $week->id_area)->where('id_classroom', $week->id_classroom)->first();
        } elseif ($user->type_user == 2) {
            $Courses = Courses::where('id_teacher', $user->id)->where('id_area', $week->id_area)->where('id_classroom', $week->id_classroom)->first();
        }
        if (isset($Courses)) {
            $achievements = CoursesAchievement::where('id_planification', $Courses->id)->get();
        }

        if(isset($week))
        {
            $area=Area::find($week->id_area);
            $classroom=Classroom::find($week->id_classroom);
        }


        $data = [
            'clase' => $clase,
            'achievements' => $achievements,
            'area'=>$area,
            'classroom'=>$classroom
        ];
        return $data;
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
    public function updateClass(Request $request)
    {
        // $this->validate($request, [
        //     'description' => 'required'
        // ]);
        $data = $request->all();
        if (isset($data['video']) && $data['video'] !== "") {
            $data['video'] = str_replace("watch?v=", "embed/", $data['video']);
        }
        if (isset($data['video1']) && $data['video1'] !== "") {
            $data['video1'] = str_replace("watch?v=", "embed/", $data['video1']);
        }
        if (isset($data['video2']) && $data['video2'] !== "") {
            $data['video2'] = str_replace("watch?v=", "embed/", $data['video2']);
        }
        $documentos = Files::where('unit', $data['name'])->where('type', 1)->orderBy('id', 'DESC')->get();
        $url_documento = [];
        foreach ($documentos as $key => $documento) {
            $url_documento[$key] = $documento->path;
        }
        $class = Classs::find($data['id']);
        $class->description = $data['description'];
        $class->id_weekly_plan = $data['id_weekly_plan'];
        $class->name = $data['name'];
        $class->name_document = $data['name_document'];
        $class->url    = $data['url'];
        $class->url1    = $data['url1'];
        $class->url2    = $data['url2'];
        $class->hourly_intensity    = $data['hourly_intensity'];
        $class->document = isset($url_documento[0]) ? $url_documento[0] : $class->document;
        $class->document1 = isset($url_documento[1]) ? $url_documento[1] : $class->document1;
        $class->document2 = isset($url_documento[2]) ? $url_documento[2] : $class->document2;
        $class->video  = $data['video'];
        $class->video1  = $data['video1'];
        $class->video2  = $data['video2'];
        $class->save();

        return 'class update';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
    }
    public function getNameArea(String $id_area, String $id_classroom)
    {
        $classroom_name = '';
        $classroom = Classroom::where('id', $id_classroom)->get();
        $area = Area::where('id', $id_area)->get();

        if (isset($classroom) && count($classroom) > 0 && isset($area) && count($area) > 0) {
            $classroom_name = $area[0]->name . ' ' . $classroom[0]->name;
        }
        return response()->json($classroom_name);
    }
    public function uploadFile(Request $request)
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
            $number = request('count');
            $fileName = strtr($fileName_1, " ", "_");
            // file with path
            $filePath = url('uploads/clases/' . $fileName . $number . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/clases/';
            if ($extension == "flv" || $extension == "mp4" || $extension == "m3u8" || $extension == "ts" || $extension == "3gp" || $extension == "mov" || $extension == "avi" || $extension == "wmv") {
                $type = 2;
            } else {
                $type = 1;
            }
            if ($file->move($destinationPath, $fileName . $number . "." . $extension)) {
                $file = Files::create([
                    'path' => $filePath,
                    'unit' => $fileName_1,
                    'type' => $type,
                ]);
                return "ok";
            }
            return "error";
        }
    }
    public function uploadFileUpdate(Request $request)
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
            $number = request('count');
            $fileName = strtr($fileName_1, " ", "_");
            // file with path
            $filePath = url('uploads/clases/' . $fileName . $number . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/clases/';
            if ($extension == "flv" || $extension == "mp4" || $extension == "m3u8" || $extension == "ts" || $extension == "3gp" || $extension == "mov" || $extension == "avi" || $extension == "wmv") {
                $type = 2;
            } else {
                $type = 1;
            }
            //se elimina el archivo anterior
            $filenameDelete = url('uploads/clases/' . $fileName . $number . "." . $extension);
            \File::delete($filenameDelete);
            //se añade el nuevo archivo
            if ($file->move($destinationPath, $fileName . $number . "." . $extension)) {
                $files_prevoiusly = Files::where('path', $filePath)->orderBy('id', 'DESC')->first();
                if (isset($files_prevoiusly)) {
                    $files_prevoiusly->delete();
                }
                $file = Files::create([
                    'path' => $filePath,
                    'unit' => $fileName_1,
                    'type' => $type,
                ]);
                return "ok";
            }
            return "error";
        }
    }
    public function getClass()
    {

        $Classes = Classs::all();
        $data = [];
        $data[0] = [
            'id'   => 0,
            'text' => 'Seleccione',
        ];
        foreach ($Classes as $key => $class) {
            $data[$key + 1] = [
                'id'   => $class->id,
                'text' => $class->name,
            ];
        }
        return response()->json($data);
    }
    public function getAllClass()
    {
        // $Classes =[];
        $price_credit = 7000;
        $class_subjects = ClassSubject::inRandomOrder()->get();
        // Recorremod todos los modulos que ya estan aprovados
        foreach ($class_subjects as $class_subject) {
            $weekly = Weekly::where('id', $class_subject->id_weekly)->first();
            $count_class = Classs::where('id_weekly_plan', $class_subject->id_weekly)->count();
            if (isset($weekly)) {
                $area = Area::find($weekly->id_area);
                $grade=Grade::find($area->id_grade);
                // Validamos si existe la imagen del modulo
                if (!is_null($area->images) && isset($area->images) && $area->images !== "") {
                    $arrayImg = $area->images;
                    $array = explode('",', $arrayImg);
                    $var_random = rand(0, 2);
                    $img_subject_first = $array[$var_random];
                    $img_subject = str_replace('"', '', $img_subject_first);
                    $img_subject = str_replace('[', '', $img_subject);
                    // $img_subject = substr($img_subject_first, 2);
                } else {
                    $img_subject = null;
                }
                // return $Classe;
                // Asignamos la imagen, descripcion y precio del modulo
                $class_subject->name = $weekly->driving_question;
                $class_subject->image = $img_subject;
                $class_subject->quantity_class = $count_class;
                $class_subject->price = $weekly->credits_quantity * $price_credit;
                $class_subject->area_name=$area->name;
                $class_subject->grade_name=$grade->name;
            } else {
                $class_subject->name = "Módulo";
            }
        }

        return response()->json($class_subjects);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getClassId(Request $request, String $id)
    {

        $Classes = Classs::where('id_weekly_plan', $id)->get();
        $clase = [];
        $clase[0] = [
            'id'   => 0,
            'text' => 'Seleccione',
        ];
        foreach ($Classes as $key => $class) {
            $clase[$key + 1] = [
                'id'   => $class->id,
                'text' => $class->name,
            ];
        }
        $week = Weekly::find($id);
        $Courses = Courses::where('id_teacher', Auth::user()->id)->where('id_area', $week->id_area)->where('id_classroom', $week->id_classroom)->first();
        if (isset($Courses)) {
            $achievements = CoursesAchievement::where('id_planification', $Courses->id)->get();
        }
        $data = [
            'clase' => $clase,
            'achievements' => $achievements
        ];
        return response()->json($data);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function findClass(String $id)
    {

        $clases = Classs::findOrFail($id);


        return $clases;
    }
    public function activityWeekId(Request $request, String $id)
    {
        $week = $id;
        return view("activity", compact("week"));;
    }
}
