<?php

namespace App\Http\Controllers;

use App\Activities;
use Illuminate\Http\Request;

class ActivitiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $activities = Activities::all();
        return response()->json([$activities]);
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
        return $request;
        $data = $request->all();
        $activities = new Activities;

        // $activities->id_courser = $data["id_courser"];
        $activities->newDescription = $data["newDescription"];
        // $activities->newName = $data["newName"];
        // $activities->newId_subcategories = $data["newId_subcategories"];
        // $activities->newSubject = $data["newSubject"];
        $activities->newObjetive = $data["newObjetive"];
        $activities->newFromW = $data["newFromW"];
        $activities->newToW = $data["newToW"];
        $activities->newFromH = $data["newFromH"];
        $activities->newToH = $data["newToH"];
        $activities->newQuiz = $data["newQuiz"];
        $activities->newIndicator = $data["newIndicator"];
        $activities->newPercent = $data["newPercent"];
        $activities->newLocal = $data["newLocal"];
        $activities->newRegional = $data["newRegional"];
        $activities->newContry = $data["newContry"];
        $activities->newWorld = $data["newWorld"];
        $activities->newId_user = $data["newId_user"];
        $activities->newPlataform = $data["newPlataform"];
        $activities->newWork = $data["newWork"];
        $activities->newTema = $data["newTema"];
        $activities->newTR1 = $data["newTR1"];
        $activities->newTR2 = $data["newTR2"];
        $activities->newTR3 = $data["newTR3"];
        $activities->newOR1 = $data["newOR1"];
        $activities->newOR2 = $data["newOR2"];
        $activities->newOR3 = $data["newOR3"];
        $activities->newCE1 = $data["newCE1"];
        $activities->newEA1 = $data["newEA1"];
        $activities->newCE2 = $data["newCE2"];
        $activities->newCE3 = $data["newCE3"];
        $activities->newTimeWork = $data["newTimeWork"];
        $activities->newActivity1 = $data["newActivity1"];
        $activities->newEvidence = $data["newEvidence"];
        $activities->newSend = $data["newSend"];
        $activities->newActor = $data["newActor"];
        $activities->newRetro = $data["newRetro"];
        $activities->save();

        if ($activities->save()) {
            return response()->json([true]);
        } else {
            return response()->json([false]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Activities  $activities
     * @return \Illuminate\Http\Response
     */
    public function show(String $id)
    {
        $activity = Activities::findOrFail($id);
        return $activity;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Activities  $activities
     * @return \Illuminate\Http\Response
     */
    public function edit(Activities $activities)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Activities  $activities
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Activities $activities)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Activities  $activities
     * @return \Illuminate\Http\Response
     */
    public function destroy(Activities $activities)
    {
        //
    }
}
