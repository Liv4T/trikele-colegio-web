<?php

namespace App\Http\Controllers;

use App\ReportsParents;
use Illuminate\Support\Facades\Mail;
use DB;
use Auth;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\User;

class ReportsParentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('reportSendParents');
    }

    public function getReportsByParent(){
        $user = Auth::user();
        $data = ReportsParents::where('id_parent','=',$user->id)->orderBy('id','DESC')->get();

        return response()->json($data);
    }

    public function getAllRecentActivities(String $area_id){
        $actual_date = Carbon::today();
        
        $data = DB::table('activity')
                ->join('class','activity.id_class','=','class.id')
                ->join('weekly_plan','class.id_weekly_plan','=','weekly_plan.id')
                ->join('area','weekly_plan.id_area','=','area.id')
                ->join('classroom','weekly_plan.id_classroom','=','classroom.id')
                // ->join('annual_planification','classroom.id','=','annual_planification.id_classroom')
                ->join('achievement_planification','achievement_planification.id','=','activity.id_achievement')
                ->select(
                    'area.id as area_id',
                    'area.name as area_name',
                    'classroom.name as classroom_name',
                    'classroom.id as classroom_id',
                    'class.name as class_name',
                    'achievement_planification.achievement as logro',
                    'achievement_planification.percentage as percentage',
                    'activity.name as activity_name',
                    'activity.description as activity_description',
                    'activity.delivery_max_date as activity_date',
                    'weekly_plan.driving_question as weekly_plan_driving_question',
                    'weekly_plan.observation as weekly_plan_observation'
                )
                 ->where('area.id','=',$area_id)
                //  ->where('activity.delivery_max_date','>=',$actual_date)
                 ->first();
        return response()->json($data);
    }

    public function getAllAssistances(String $user_id, String $id_area, String $id_classroom){
        $data = DB::table('assistances')
            ->join('users','assistances.id_student','=','users.id')
            ->join('assitants_motives','assistances.id_motive','=','assitants_motives.id')
            ->select(
                'assistances.id_area',
                'assistances.id_classroom',
                'assistances.course',
                'users.name',
                'users.parent_id',
                'assistances.id_motive',
                'assitants_motives.motive'
            )
            ->where([
                ['users.id','=',$user_id],
                ['assistances.id_area','=',$id_area],
                ['assistances.id_classroom','=',$id_classroom]
            ])
            ->selectRaw('count(assistances.course) as total_assistances ')
            ->groupBy('assistances.course','users.name','assistances.id_motive','assitants_motives.motive','assistances.id_area',
            'assistances.id_classroom','users.parent_id')
            ->first();

        $data_total_class = DB::table('assistances')
            ->selectRaw('count(assistances.created_at) as total_class')
            ->where('assistances.id_area','=', $id_area)
            ->first();

        $data->total_class = $data_total_class->total_class;

        return response()->json($data);
    }

    public function user(String $userid){
        $user = User::where('parent_id',$userid)->first();
        return response()->json($user);
    }

    public function getNotesBySudentAndArea($id_student,$id_area){
        $data = DB::table('score_cumulative')
                  ->join('users','score_cumulative.id_user','=','users.id')
                  ->join('area','score_cumulative.id_area','=','area.id')
                  ->join('classroom_student','users.id','=','classroom_student.id_user')
                  ->join('classroom','classroom_student.id_classroom','=','classroom.id')
                  ->select(
                      'users.id as user_id',
                      'users.name as student_name',
                      'users.last_name as student_last_name',
                      'area.name as area_name',
                      'area.id as area_id',
                      'classroom.id as classroom_id',
                      'classroom.name as classroom_name',
                      'score_cumulative.score as score'
                  )
                  ->where('users.id','=',$id_student)
                  ->where('area.id','=', $id_area)
                  ->orderBy('score_cumulative.created_at','ASC')
                  ->first();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
         
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        $newReport = new ReportsParents();
        $newReport->dataStudent = $request->dataStudent;
        $newReport->id_area = $request->id_area;
        $newReport->id_classroom = $request->id_classroom;
        $newReport->id_parent = $request->id_parent;
        $newReport->id_teacher = $user->id;

        $newReport->save();
        return response()->json('Reporte Guardado');
    }

    public function sendSingleMessage(Request $request){
        $data_email = [
            'body' => $request->message,
            'subject' => $request->subject,
            'email' => $request->email,
        ];

        Mail::send('emails.sendMessages', $data_email, function ($msj) use ($data_email) {
            $msj->subject($data_email['subject'])
                ->bcc($data_email['email']);
        });
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\ReportsParents  $reportsParents
     * @return \Illuminate\Http\Response
     */
    public function show(ReportsParents $reportsParents)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ReportsParents  $reportsParents
     * @return \Illuminate\Http\Response
     */
    public function edit(ReportsParents $reportsParents)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ReportsParents  $reportsParents
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ReportsParents  $reportsParents
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

    }
}
