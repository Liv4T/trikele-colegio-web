<?php

namespace App\Http\Controllers;

use App\Observer;
use App\User;
use App\ClassroomTeacher;
use App\ClassroomStudent;
use Auth;
use Illuminate\Http\Request;

class ObserverController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('observer');
    }

    public function getDataParentsStudents(){
        $user_name = Auth::user()->name;
        $user = Auth::user();
        if($user->type_user == 1){
            $observer = Observer::all();
            return response()->json($observer);
        }else{
            $observer = Observer::where('user_creator','=', $user_name)->get();
            return response()->json($observer);
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
        $observer = new Observer;
        $observer->create($request->all());
        return $observer;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Observer  $observer
     * @return \Illuminate\Http\Response
     */
    public function show(Observer $observer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Observer  $observer
     * @return \Illuminate\Http\Response
     */
    public function edit(Observer $observer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Observer  $observer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $observer = Observer::findOrFail($id);
        $data = $request->all();
        $observer->fill($data)->save();

        return response()->json('Data Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Observer  $observer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Observer $observer)
    {
        $observer = Observer::find($id);
        $observer->delete();
        return response()->json('Data Deleted');
    }
}
