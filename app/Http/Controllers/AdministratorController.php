<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Institution;
use App\Section;
use App\Period;
use App\Grade;
use App\Classroom;
use App\Area;
use App\City;
use App\State;
use App\User;
use App\ClassroomStudent;
use App\ClassroomTeacher;
use App\Extracurricular;
use App\ExtracurricularCategory;
use App\ExtracurricularTeacher;
use Auth;
use DB;

class AdministratorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexInstitution()
    {
        $institutions = Institution::all();

        return $institutions;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexUsers()
    {
        $users = User::all();

        return $users;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexStudents()
    {
        $students = [];
        $studentAssigned = ClassroomStudent::all();
        foreach ($studentAssigned as $key => $stud) {
            $students[$key] = $stud->id_user;
        }
        $users = User::where('type_user', 3)->get();
        return $users;
    }

    public function getStudents(){
        $students = [];
        $users = User::where('type_user','=',3)->get();        
        foreach($users as $key => $user){
            $findUser = ClassroomStudent::where('id_user', $user->id)->first();
            if($findUser){
                $dataToPush = User::where('id',$findUser->id_user)->first();
                array_push($students, $dataToPush);
            }            
        }

        return $students;
    }

    public function getParents(){
        $users = User::where('type_user',5)->get();
        return $users;
    }

    public function assignParent(Request $request, $id){        
        $parent = User::where('id',$id)->first();        
        $parent->parent_id = $request->parent_id;
        $parent->update();
        return response()->json('Asignación Realizada');
    }

    public function indexCoords()
    {        
        $coords = User::where('type_user',4)->get();
        return response()->json($coords);
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexStudentsTeachersAssigned()
    {
        /* aqui hace falta editar la consulta cuando sea por institucion */

        $studentAssigned = ClassroomStudent::all();
        $students = [];

        foreach ($studentAssigned as $key => $studen) {
            $user = User::findOrFail($studen->id_user);
            $nombre = $user->name . " " . $user->last_name;
            $Classroom = Classroom::findOrFail($studen->id_classroom);
            $salon = $Classroom->name;

            $students[$key] = [
                'student_name'   => $nombre,
                'classroom_name' => $salon,
                'type'           => 'Estudiantes',
            ];
        }

        $teachersAssigned = ClassroomTeacher::all();
        $teachers = [];

        foreach ($teachersAssigned as $key => $teacher) {
            $user = User::findOrFail($teacher->id_user);
            $nombre = $user->name . " " . $user->last_name;
            $Classroom = Classroom::findOrFail($teacher->id_classroom);
            $salon = $Classroom->name;

            $teachers[$key] = [
                'student_name'   => $nombre,
                'classroom_name' => $salon,
                'type'           => 'Profesores',
                'area'           => $teacher->id_area,
            ];
        }
        $data = [
            'estudiantes' => $students,
            'profesores'  => $teachers
        ];

        return $data;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexTeachers()
    {
        $users = User::where('type_user', 2)->get();

        return $users;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function assignStudents(Request $request)
    {

        $data = $request->all();

        $students = $data['users'];

        foreach ($students as $student) {
            $ClassroomStudent = new ClassroomStudent;
            $ClassroomStudent->id_classroom = $data['id_classroom'];
            $ClassroomStudent->id_user = $student;
            $ClassroomStudent->save();
        }
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function assignTeachers(Request $request)
    {

        $data = $request->all();

        foreach ($data['classroom'] as $class) {
            foreach ($data['areas'] as $area) {
                $ClassroomTeacher = new ClassroomTeacher;
                $ClassroomTeacher->id_user = $data['id_teacher'];
                $ClassroomTeacher->id_area = $area;
                $ClassroomTeacher->id_classroom = $class;
                $ClassroomTeacher->save();
            }
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAllState()
    {
        $departamentos = State::all();

        return $departamentos;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function findCity(String $id)
    {
        $municipios = [];
        $Municipios = City::where('id_state', $id)->get();
        foreach ($Municipios as $key => $value) {
            $municipios[$key + 1] = [
                'id'   => $value->id_state,
                'text' => $value->name,
            ];
        };

        $data = [];
        $data = [
            'states' => $municipios,
        ];

        return $municipios;
    }

    /**
     *Create and store new institutotion resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function createInstitution(Request $request)
    {
        $data = $request->all();
        $institution = new Institution;
        $user = Auth::user();

        /* Save the new institution */
        $institution->id_user = $user->id;
        $institution->name = $data['name'];
        $institution->state = $data['state'];
        $institution->city = $data['city'];
        $institution->address = $data['address'];
        $institution->streaming = $data['streaming'];
        $institution->year = $data['year'];
        $institution->save();

        /* Save the new section */
        $sections = $data['sections'];

        foreach ($sections as $index => $section) {
            $sectiones = Section::create([
                'name' => $section['name'],
                'id_institution' => $institution->id,
            ]);
        }

        /* Save the new period */
        $periods = $data['periods'];

        foreach ($periods as $index => $period) {
            $periodos = Period::create([
                'name' => $period['name'],
                'date_from' => $period['date_from'],
                'date_to' => $period['date_to'],
                'id_institution' => $institution->id,
            ]);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function findInstitution(String $id)
    {
        $sections = [];
        $periods = [];
        $institution = Institution::findOrFail($id);
        $Sections = Section::where('id_institution', $id)->get();
        foreach ($Sections as $key => $value) {
            $sections[$key + 1] = [
                'id'   => $value->id,
                'name' => $value->name,
                'id_institution' => $id,
            ];
        };
        $Periodos = Period::where('id_institution', $id)->get();
        foreach ($Periodos as $key => $value) {
            $periods[$key + 1] = [
                'id'   => $value->id,
                'name' => $value->name,
                'date_to' => $value->date_to,
                'date_from' => $value->date_from,
                'id_institution' => $id,
            ];
        };

        $data = [];
        $data = [
            'institution' => $institution,
            'sections' => $sections,
            'periods' => $periods,
        ];

        return $data;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getSections()
    {
        $sections = [];
        $institutions = Institution::all();
        foreach ($institutions as $institution) {
            $Sections = Section::where('id_institution', $institution->id)->get();
            foreach ($Sections as $key => $value) {
                $sections[$key + 1] = [
                    'id'   => $value->id,
                    'name' => $value->name,
                    'id_institution' => $institution->id,
                ];
            }
        }

        $data = [];
        $data = [
            'sections' => $sections,
        ];

        return $data;
    }

    /**
     *Create and store new institutotion resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function updateInstitution(Request $request)
    {
        $data = $request->all();
        $institution = Institution::findOrFail($data['id']);
        $user = Auth::user();

        /* Save the new institution */
        $institution->id_user = $user->id;
        $institution->name = $data['name'];
        $institution->address = $data['address'];
        $institution->year = $data['year'];
        $institution->save();

        /* Save the new section */
        $sections = $data['sections'];

        foreach ($sections as $sec) {

            $section = Section::findOrFail($sec['id']);

            $section->name = $sec['name'];
            $section->id_institution = $institution->id;
            $section->save();
        }


        /* Save the new period */
        $periods = $data['periods'];

        foreach ($periods as $per) {

            $period = Period::findOrFail($per['id']);

            $period->name = $per['name'];
            $period->date_from = $per['date_from'];
            $period->date_to = $per['date_to'];
            $period->id_institution = $institution->id;
            $period->save();
        }
        return 'ok';
    }

    /**
     *Find some resource fron DB.
     *
     * @return \Illuminate\Http\Response
     */
    public function findSection()
    {
        $institution = Institution::all();
        $sections = [];

        foreach ($institution as $key => $value) {
            $section = Section::where('id_institution', $value->id)->get();
            foreach ($section as $key => $val) {
                $sections[$key + 1] = [
                    'id' => $val->id,
                    'id' => $val->id,
                    'section' => $val->name,
                    'institution' => $value->name,
                ];
            }
        }
        return $sections;
    }
    /**
     *Find some resource fron DB.
     *
     * @return \Illuminate\Http\Response
     */
    public function findGrade()
    {
        $institution = Institution::all();
        $grades = [];

        foreach ($institution as $key => $value) {
            $grade = Grade::where('id_institution', $value->id)->get();
            foreach ($grade as $key => $val) {
                $grades[$key + 1] = [
                    'id' => $val->id,
                    'grade' => $val->name,
                    'institution' => $value->name,
                ];
            }
        }
        return $grades;
    }

    public function getAllGrades()
    {
        $institution = Institution::all();
        // $grades = [];

        foreach ($institution as $key => $value) {
            $grade = Grade::where('id_institution', $value->id)->get();
            foreach ($grade as $key => $val) {
                $areas = DB::table('area')
                ->join('weekly_plan', 'weekly_plan.id_area', '=', 'area.id')
                ->where('weekly_plan.deleted',0)
                ->where('area.id_grade', $val->id)
                ->select('area.id','area.name','area.images',DB::raw('sum(weekly_plan.credits_quantity)*7000 as precio'))
                ->groupBy('area.id','area.name','area.images')
                ->get();


                //Area::where('id_grade',$val->id)->get();
                // foreach($areas as $area){
                    $grades[] = [
                        'id' => $val->id,
                        'grade' => $val->name,
                        'institution' => $value->name,
                        'areas' => $areas,
                    ];
                // }
            }
        }
        return $grades;
    }

    /**
     *Find some resource fron DB.
     *
     * @return \Illuminate\Http\Response
     */
    public function findArea()
    {
        $institution = Institution::all();
        $areas = [];

        foreach ($institution as $key => $value) {
            $area = Area::where('id_institution', $value->id)->get();
            foreach ($area as $key => $val) {
                $areas[] = [
                    'id' => $val->id,
                    'area' => $val->name,
                    'institution' => $value->name,
                ];
            }
        }
        return $areas;
    }

    /**
     *Find some resource fron DB.
     *
     * @return \Illuminate\Http\Response
     */
    public function findClassroom()
    {
        $institution = Institution::all();
        $Classrooms = [];

        foreach ($institution as $key => $value) {
            $Classroom = Classroom::where('id_institution', $value->id)->get();
            foreach ($Classroom as $key => $val) {
                $Classrooms[] = [
                    'id' => $val->id,
                    'clasroom' => $val->name,
                    'institution' => $value->name,
                ];
            }
        }
        return $Classrooms;
    }

    /**
     *Create and store new grade resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function createGrade(Request $request)
    {
        $data = $request->all();

        $section = Section::findOrFail($data['section']);

        $grades = $data['grade'];

        foreach ($grades as $grad) {
            /* Save the new grade */
            $grade = new Grade;
            $grade->name = $grad['name'];
            $grade->id_section = $section->id;
            $grade->id_institution = $section->id_institution;
            $grade->save();
        }
    }


    /**
     *Create and store new grade resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function createClassroom(Request $request)
    {
        $data = $request->all();

        $grade = Grade::findOrFail($data['grade']);

        foreach ($data['class'] as $clas) {
            /* Save the new classroom */
            $class = new Classroom;
            $class->name = $clas['name'];
            $class->id_grade = $grade->id;
            $class->id_institution = $grade->id_institution;
            $class->save();
        }
    }

    /**
     *Create and store new grade resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function createArea(Request $request)
    {
        $data = $request->all();

        $grade = Grade::findOrFail($data['grade']);

        foreach ($data['area'] as $are) {
            $area = new Area;
            /* Save the new area */
            $area->name = $are['name'];
            $area->id_grade = $grade->id;
            $area->id_institution = $grade->id_institution;
            $area->save();
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

    public function assignCoord(Request $request){
        $coord = User::findOrFail($request->id);
        $coord->new_coord_area = $request->new_coord_area;
        $coord->save();
        return response()->json('El usuario '.$coord->name.'Fué asignado a '.$request->new_coord_area);
    }

    public function createExtra(Request $request)
    {
        $data = $request->all();
        $extra = $data['name'];
        foreach ($extra as $ext) {
            $extracurricular = new Extracurricular();
            $extracurricular->name = $ext['name'];
            $extracurricular->save();
        }
        return 'ok';
    }
    public function createCatExtra(Request $request)
    {
        $data = $request->all();
        $ExtracurricularCategory = $data['name'];
        foreach ($ExtracurricularCategory as $ext) {
            $cat = new ExtracurricularCategory();
            $cat->name = $ext['name'];
            $cat->id_extra = $data['id_extra'];
            $cat->save();
        }

        return 'ok';
    }
    public function findExtra()
    {
        $extra = Extracurricular::all();
        return $extra;
    }
    public function findCatExtra(String $id)
    {
        $extras = [];

        $cat_extra = ExtracurricularCategory::where('id_extra', $id)->get();;
        foreach ($cat_extra as $key => $val) {
            $extras[] = [
                'id' => $val->id,
                'name' => $val->name,
            ];
        }
        return $extras;
    }
    public function findCatName($id)
    {
        if (Auth::user()->type_user == 1) {
            $extra = ExtracurricularCategory::findOrFail($id);
            $extra->status = 1;
        } elseif (Auth::user()->type_user == 2) {            
            $extra = ExtracurricularCategory::findOrFail($id);
            // dd($extra);
            $teacher_extra = ExtracurricularTeacher::where('id_user', Auth::user()->id)->get();
            if (isset($teacher_extra)) {
                foreach ($teacher_extra as $key => $ext) {
                    if ($ext->id_category == $id) {
                        $status = 1;
                        break;
                    }
                }
            }
            $extra->id_user = Auth::user()->id;
            $extra->status = 2;
            $extra->id_category = $id;
        } elseif (Auth::user()->type_user == 3) {
            $extra = ExtracurricularCategory::findOrFail($id);
            $extra->status = 0;
        }

        return $extra;
    }
}
