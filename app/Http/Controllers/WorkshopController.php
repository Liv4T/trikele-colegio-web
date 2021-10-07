<?php

namespace App\Http\Controllers;

use App\Workshop;
use App\Activity;
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
        $workshop = Workshop::where('id_bimestre',$id_bimestre)->where('id_area',$id_area)->where('id_classroom',$id_classroom)->get();        
        if(isset($workshop)){
            foreach($workshop as $work) {                
                $getActivities = Activity::where('id_class',$work->id_class)->first();
                array_push($data, 
                    array(
                        "id"=>$getActivities->id,
                        "id_class"=> $getActivities->id_class,
                        'id_achievement'=> $getActivities->id_achievement,
                        'id_indicator'=> $getActivities->id_indicator,
                        'activity_type'=> $getActivities->activity_type ,
                        'name'=> $getActivities->name,
                        'description'=> $getActivities->description ,
                        'delivery_max_date'=> $getActivities->delivery_max_date,
                        'feedback_date'=> $getActivities->feedback_date,
                        'rules'=> $getActivities->rules,
                        'is_required'=> $getActivities->is_required,
                        'state'=> $getActivities->state,
                        'deleted'=> $getActivities->deleted,
                        'updated_user'=> $getActivities->updated_user,
                        'id_bimestre'=> $work->id_bimestre,
                        'id_workshop'=> $work->id,
                    )
                );                
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
