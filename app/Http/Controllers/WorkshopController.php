<?php

namespace App\Http\Controllers;

use App\Workshop;
use App\Activity;
use App\ActivityInteraction;
use Auth;
use Illuminate\Http\Request;

class WorkshopController extends Controller
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

    public function getActivityByBimestre(String $id_bimestre, String $id_area, String $id_classroom){
        $data = [];
        $interaction=['state'=>1,'score'=>0];
        $workshop = Workshop::where('id_bimestre',$id_bimestre)->where('id_area',$id_area)->where('id_classroom',$id_classroom)->get();        
        if(isset($workshop)){
            foreach($workshop as $work) {     
                $activities = Activity::where('id_class', $work->id_class)->where('id', $work->id_activity)->where('deleted',0)->first();
                // if(isset($activities)){
                //     // return $workshop;
                // }else{
                //     return $work;
                // }   
                $user = Auth::user();
                if($user->type_user===3){
                    $interaction=ActivityInteraction::where('id_activity',$activities->id)->where('id_student',$user->id)->first();

                    array_push($data, 
                        array(
                            "id"=>$activities->id,
                            "id_class"=> $activities->id_class,
                            'id_achievement'=> $activities->id_achievement,
                            'id_indicator'=> $activities->id_indicator,
                            'activity_type'=> $activities->activity_type ,
                            'name'=> $activities->name,
                            'description'=> $activities->description ,
                            'delivery_max_date'=> $activities->delivery_max_date,
                            'feedback_date'=> $activities->feedback_date,
                            'rules'=> $activities->rules,
                            'is_required'=> $activities->is_required,
                            'state'=> $activities->state,
                            'deleted'=> $activities->deleted,
                            'updated_user'=> $activities->updated_user,
                            'id_bimestre'=> $work->id_bimestre,
                            'id_workshop'=> $work->id,
                            'score_activity' => $interaction ? $interaction->score : 0
                        )
                    );
                }else{
                    array_push($data, 
                        array(
                            "id"=>$activities->id,
                            "id_class"=> $activities->id_class,
                            'id_achievement'=> $activities->id_achievement,
                            'id_indicator'=> $activities->id_indicator,
                            'activity_type'=> $activities->activity_type ,
                            'name'=> $activities->name,
                            'description'=> $activities->description ,
                            'delivery_max_date'=> $activities->delivery_max_date,
                            'feedback_date'=> $activities->feedback_date,
                            'rules'=> $activities->rules,
                            'is_required'=> $activities->is_required,
                            'state'=> $activities->state,
                            'deleted'=> $activities->deleted,
                            'updated_user'=> $activities->updated_user,
                            'id_bimestre'=> $work->id_bimestre,
                            'id_workshop'=> $work->id,                            
                        )
                    );
                }                               
            }
            return response()->json($data);
        }else{
            return [];
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }    

    /**
     * Display the specified resource.
     *
     * @param  \App\Workshop  $workshop
     * @return \Illuminate\Http\Response
     */
    public function show(Workshop $workshop)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Workshop  $workshop
     * @return \Illuminate\Http\Response
     */
    public function edit(Workshop $workshop)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Workshop  $workshop
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Workshop $workshop)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Workshop  $workshop
     * @return \Illuminate\Http\Response
     */
    public function destroy(Workshop $workshop)
    {
        //
    }
}
