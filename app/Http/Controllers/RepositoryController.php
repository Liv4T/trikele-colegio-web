<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository;
use App\RepositoryComments;
use App\RepositoryStudents;
use App\ClassroomStudent;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RepositoryController extends Controller
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

        // User::create($request->all());
        $data = $request->all();
        $area_classroom = $data['id_area_class'];
        $area_classroom = explode("/", $area_classroom);

        $repositori = new Repository;
        $repositori->id_area = $area_classroom[0];
        $repositori->id_classroom = $area_classroom[1];
        $repositori->id_teacher = Auth::user()->id;
        $repositori->name = $data['name'];
        $repositori->description = $data['description'];
        $repositori->date = $data['date'];
        $repositori->file = isset($data['file']) ? $data['file'] : null;
        $repositori->save();

        if ($repositori->save()) {
            return response()->json([true]);
        } else {
            return response()->json([false]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeRepositoryComment(Request $request)
    {
        $data = $request->all();

        $repositori_comment = new RepositoryComments;
        $repositori_comment->id_student = $data['id_student'];
        $repositori_comment->id_repository = $data['id_repository'];
        $repositori_comment->comment = $data['comment'];
        $repositori_comment->file = $data['file'];
        $repositori_comment->audio = $data['audio'];
        $repositori_comment->save();

        if ($repositori_comment->save()) {
            $repositori_student = RepositoryStudents::where('id_repository', $data['id_repository'])->where('id_student', $data['id_student'])->first();
            $repositori_student->status = 'Calificado';
            $repositori_student->save();
            return response()->json([true]);
        } else {
            return response()->json([false]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeRepositoryStudent(Request $request)
    {
        $data = $request->all();

        $repositori_student = new RepositoryStudents;
        $repositori_student->id_student = Auth::user()->id;
        $repositori_student->id_repository = $data['id_repository'];
        $repositori_student->name = $data['name'];
        $repositori_student->status = 'No calificado';
        $repositori_student->file = $data['file'];
        $repositori_student->save();

        if ($repositori_student->save()) {
            return response()->json([true]);
        } else {
            return response()->json([false]);
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(String $id_area, String $id_classroom)
    {
        $user = Auth::user();
        $repositori = Repository::where('id_teacher', $user->id)->orderBy('id','desc')->get();
        if (isset($repositori)) {
            return $repositori;
        } else {
            return response()->json([false]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showStudent(String $id_area, String $id_classroom)
    {

        $repositoris = Repository::where('id_area', $id_area)->where('id_classroom', $id_classroom)->get();
        if (isset($repositoris)) {
            foreach ($repositoris as $repo) {
                $repoStudent = RepositoryStudents::where('id_student', Auth::user()->id)->where('id_repository', $repo->id)->first();
                $status_student = isset($repoStudent) ? $repoStudent->status : 'Pendiente';
                $repo->status = $status_student;
            }
            return $repositoris;
        } else {
            return response()->json([false]);
        }
    }

    public function showRepository(String $id)
    {

        $repositori = Repository::where('id', $id)->get();
        if (isset($repositori)) {
            return $repositori;
        } else {
            return response()->json([false]);
        }
    }
    public function showRepositoryStudents(String $id)
    {
        $repositori = Repository::findOrFail($id);
        $studentRepo = [];
        if (isset($repositori)) {
            $studenAsigned = ClassroomStudent::where('id_classroom', $repositori->id_classroom)->get();
            if (isset($studenAsigned)) {
                foreach ($studenAsigned as $index => $asigned) {
                    $student = User::find($asigned->id_user);
                    $studentRepository = RepositoryStudents::where('id_student', $asigned->id_user)->where('id_repository', $id)->first();
                    $studentRepo[$index] = [
                        'name' => $student->name . "" . $student->last_name,
                        'status' => isset($studentRepository) ? $studentRepository->status : 'Pendiente',
                        'id_student' => isset($studentRepository) ? $student->id : null,
                    ];
                }
            }
            return $studentRepo;
        } else {
            return response()->json([false]);
        }
    }

    public function showRepositoryComments(String $student_id, String $id_repository)
    {
        $repositori = Repository::findOrFail($id_repository);
        if (isset($repositori)) {
            $repo_student = RepositoryStudents::where('id_student', $student_id)->where('id_repository', $id_repository)->first();
            $student = User::find($student_id);
            $commentsTeacher = RepositoryComments::where('id_student', $student_id)->where('id_repository', $id_repository)->first();
            if (isset($commentsTeacher)) {
                $studenRepo[] = [
                    'name_repo' => $repositori->name,
                    'name_student' => $student->name . " " . $student->last_name,
                    'file' => $repo_student->file,
                    'name' => $repo_student->name,
                    'comment' => $commentsTeacher->comment,
                    'file_teacher' => isset($commentsTeacher->file) ? $commentsTeacher->file : null,
                    'audio_teacher' => isset($commentsTeacher->audio) ? $commentsTeacher->audio : null,
                ];
            } else {
                $studenRepo[] = [
                    'name_repo' => $repositori->name,
                    'name_student' => $student->name . " " . $student->last_name,
                    'file' => $repo_student->file,
                    'name' => $repo_student->name,
                ];
            }
            return $studenRepo;
        } else {
            return response()->json([false]);
        }
    }

    public function showRepositoryCommentsStudents(String $id_repository)
    {
        $repositori = Repository::findOrFail($id_repository);
        $user_id = Auth::user()->id;
        $commentsTeacher = RepositoryComments::where('id_student', $user_id)->where('id_repository', $id_repository)->first();
        if (isset($commentsTeacher)) {
            $repo_student = RepositoryStudents::where('id_student', $user_id)->where('id_repository', $id_repository)->first();
            $studenRepo[] = [
                'name_repo' => $repositori->name,
                'file_student' => $repo_student->file,
                'name_file_student' => $repo_student->name,
                'comment' => $commentsTeacher->comment,
                'file_teacher' => isset($commentsTeacher->file) ? $commentsTeacher->file : null,
                'audio_teacher' => isset($commentsTeacher->audio) ? $commentsTeacher->audio : null,
            ];
            return $studenRepo;
        } else {
            return response()->json([false]);
        }
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

    public function getPendingRepositories()
    {
        $respositories=[];
        $user = Auth::user();

        if(!isset($user)) return response()->json([]);

        if($user->type_user!=3) return response()->json([]);

        $current_date=date('Y-m-d');

        $respositories=DB::table('classroom_student')
                    ->join('repository', 'classroom_student.id_classroom', '=', 'repository.id_classroom')
                    ->join('classroom', 'repository.id_classroom', '=', 'classroom.id')
                    ->join('area', 'repository.id_area', '=', 'area.id')
                    ->leftJoin('repository_students',function($leftJoin){
                        $leftJoin->on( 'repository_students.id_repository', '=', 'repository.id')->where('repository_students.id_student','=','classroom_student.id_user');
                     })
                    ->select('repository.*','area.name as area_name','classroom.name as classroom_name')
                    ->where('classroom_student.id_user', $user->id)
                    ->whereNull('repository_students.id')
                    ->whereDate('repository.date','>=',date('Y-m-d', strtotime($current_date. ' - 60 days')))
                    ->whereDate('repository.date','<=',date('Y-m-d', strtotime($current_date. ' + 60 days')))
                    ->orderBy('repository.date')
                    ->limit(30)
                    ->get();

        if(count($respositories)==0) return response()->json([]);

        return response()->json([$respositories[0]]);

    }
}
