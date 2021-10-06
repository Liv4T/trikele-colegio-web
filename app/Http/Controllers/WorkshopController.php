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
                array_push($data, $getActivities);
            }
            return response()->json($data);
        }else{
            return [];
        }
    }

    public function saveUrlFile(Request $request, String $id){
        $work = Workshop::where('id_activity',$id)->first();
        $work->urlFile = $request->url;
        $work->update();

        return ('Url Actualizada');
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
