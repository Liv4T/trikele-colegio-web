<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LectiveCourseController extends Controller
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

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAreaByUser()
    {
        //
        $auth = Auth::user();

        $user = User::find($auth->id);
        $areas = [];
        if ($user->type_user == 1) {
            $user_asigneds = ClassroomTeacher::all();
            foreach ($user_asigneds as $key => $user_asigned) {
                $user = User::find($user_asigned->id_user);
                $classroom = Classroom::find($user_asigned->id_classroom);
                $class = Area::find($user_asigned->id_area);
                $areas[$key] = [
                    'id' => isset($class->id) ? $class->id : '',
                    'text' => isset($class->name) && isset($classroom->name) ? $class->name . " - " . $classroom->name : '',
                    'id_classroom' => isset($classroom->id) ? $classroom->id : '',
                ];
            }
        } elseif ($user->type_user == 2) {
            $user_asignated = ClassroomTeacher::where('id_user', $user->id)->get();
            if (isset($user_asignated)) {
                foreach ($user_asignated as $key => $area) {
                    $classroom = Classroom::find($area->id_classroom);
                    $class = Area::find($area->id_area);
                    $areas[$key] = [
                        'id'           => $class->id,
                        'text'         => $class->name . " - " . $classroom->name,
                        'id_classroom' => $classroom->id,
                    ];
                }
            }
        } elseif ($user->type_user == 3) {
            $user_asignateds = ClassroomStudent::where('id_user', $user->id)->get();
            if (isset($user_asignateds)) {
                foreach ($user_asignateds as $key => $user_asignated) {
                    $classroom = Classroom::find($user_asignated->id_classroom);
                    $class = Area::where('id_grade', $classroom->id_grade)->get();
                    foreach ($class as $key => $area) {
                        $areas[$key] = [
                            'id' => $area->id,
                            'text' => $area->name,
                            'id_classroom' => $user_asignated->id_classroom,
                        ];
                    }
                }
            }
        }
        return response()->json($areas);
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
