<?php

namespace App\Http\Controllers;
use App\Course_unit;
use Illuminate\Http\Request;

class Course_unitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         $course_unit = Course_unit::all();
        return $course_unit;
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
        $this->validate($request, [
        
            //'name'=>'required',
           /* 'last_name'=>'required',
            'password'=>'required',
            'email'=>'required',
            'id_categories'=>'required',
            'id_subcategories'=>'required',
            'type_user'=>'required',
            'address'=>'required',
            'phone'=>'required',
            'id_number'=>'required'
            */
        ]);
        //return $request;
        Course_unit::create($request->all());
        return;
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
        $this->validate($request, [
            'description' => 'required'
        ]);
        Course_unit::find($id)->update($request->all());
        return;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $course_unit = Course_unit::findOrFail($id);
        $course_unit->delete();
    }
}
