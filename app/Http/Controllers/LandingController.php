<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\HomeLeads;
use App\Area;
use App\User;
use App\Classes;
use App\Classroom;
use App\ClassSubject;
use App\TeachersHome;
use App\Weekly;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class LandingController extends Controller
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
        $lead = new HomeLeads;

        $lead->name = $request->name;
        $lead->email = $request->email;
        $lead->phone = $request->phone;
        $lead->subject = $request->subject;
        $lead->save();


        $data = $request->all();

        //validate email
        $userExist = User::where('email', $data['email'])->where('deleted', 0)->first();

        if (isset($userExist)) {
            return view("landing", ["error" => true]);
        }
        $usernamer_email = explode('@', $data['email']);
        $username = $usernamer_email[0];

        $user = new User;
        $user->name = isset($data['name']) ? $data['name'] : "";
        $user->last_name = isset($data['last_name']) ? $data['last_name'] : "";
        $user->document_type = isset($data['document_type']) ? $data['document_type'] : 1;
        $user->email = isset($data['email']) ? $data['email'] : "";
        $user->user_name = $username;
        $user->phone = isset($data['phone']) ? $data['phone'] : "";
        $user->id_number = isset($data['id_number']) ? $data['id_number'] : 0;
        $user->password = isset($data['email']) ? Hash::make($data['email']) : Hash::make($data['email']);
        $user->address = isset($data['address']) ? $data['address'] : "";
        $user->type_user = isset($data['type_user']) ? $data['type_user'] : 3;
        $user->picture =  "";
        $user->save();

        if ($lead->save() && $user->save()) {
            $email_to = "trikeleeducacion@gmail.com";

            Mail::send('emails.contactus', ["subject" => $request->subject, "nombre" => $request->name, "telefono" => $request->phone, "correo" => $request->email], function ($message) use ($email_to) {
                $message->to($email_to, 'Trikele Contáctanos');
                $message->subject('Nuevo lead Landing');
            });
            // vista de email landingLead
            Mail::send('emails.landingLead', ["subject" => $request->subject, "nombre" => $request->name, "telefono" => $request->phone, "correo" => $request->email, "username" => $username], function ($message) use ($request) {
                $message->to($request->email, 'Inscripciones Trikele');
                $message->subject('Bienvenido a la Familia Trikele');
            });
            return view("landing", ["saved" => true]);
        }
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
    public function sendemail(Request $request, string $id)
    {
        // $data = $request->json()->all();
        $name = 'Mildred';
        $surname = 'prueba';
        $data = [
            'namwe' => $name,
            'surname' => $surname,
        ];
        Mail::send('emails.register', $data, function ($msj) {
            $msj->to('desarrollador.sr@dybcatering.com')->subject('Theres only one more step to go');
        });
        return "ok";
    }
    public function findTeacher()
    {
        $teachers = TeachersHome::all();
        return $teachers;
    }
    public function findTeacherById($id)
    {
        $teachers = TeachersHome::findOrFail($id);
        return $teachers;
    }
    public function findAreaByGrade(String $id)
    {
        $areas = [];


        $area = Area::where('id_grade', $id)->get();
        foreach ($area as $key => $val) {
            $areas[] = [
                'id' => $val->id,
                'name' => $val->name,
            ];
        }

        return $areas;
    }
    public function findAreaById(String $id)
    {
        $area = Area::find($id);
        return $area->name;
    }
    public function findWeeklyById(String $id)
    {

        $weekly = Weekly::find($id);
        return $weekly->driving_question;
    }
    public function findAreaByGradeImage(String $id)
    {
        $areas = [];


       // $area = Area::where('id_grade', $id)->get();

        $area = DB::table('area')
        ->join('weekly_plan', 'weekly_plan.id_area', '=', 'area.id')
        ->where('weekly_plan.deleted',0)
        ->where('area.id_grade', $id)
        ->select('area.id','area.images','area.name',DB::raw('sum(weekly_plan.credits_quantity)*7000 as price'))
        ->groupBy('area.id','area.images','area.name')
        ->get();


        foreach ($area as $key => $val) {
            if (!is_null($val->images) && isset($val->images) && $val->images !== "") {
                $arrayImg = $val->images;
                $array = explode('",', $arrayImg);
                $var_random = rand(0, 2);
                $img_subject_first = $array[$var_random];
                $img_subject = str_replace('"', '', $img_subject_first);
                $img_subject = str_replace('[', '', $img_subject);
            } else {
                $img_subject = null;
            }
            $areas[] = [
                'id' => $val->id,
                'name' => $val->name,
                'image' => $img_subject,
                'price'=>$val->price,
            ];
        }

        return $areas;
    }
    public function findClassroomByGrade(string $id)
    {



        $Classroom = Classroom::where('id_grade', $id)->first();

        return $Classroom->id;
    }
    public function findClassByModule(string $id)
    {
        $clases = [];
        //$class = Classes::where('id_weekly_plan', $id)->get();
        $class = DB::table('class')
        ->join('weekly_plan', 'weekly_plan.id', '=', 'class.id_weekly_plan')
        ->where('weekly_plan.deleted',0)
        ->where('class.id_weekly_plan', $id)
        ->select('class.name','class.id',DB::raw('sum(weekly_plan.credits_quantity)*7000 as price'))
        ->groupBy('class.name','class.id')
        ->get();
        // return $class;
        if (isset($class)) {
            foreach ($class as $key => $val) {
                $classSubject = ClassSubject::where('id_class', $val->id)->first();
                if (!is_null($classSubject['subject']) || !is_null($classSubject['achievement'])) {
                    $clases[$key] = [
                        'name' => $val->name,
                        'subject' => $classSubject['subject'],
                        'achievement' => $classSubject['achievement'],
                        'price'=> $val->price
                    ];
                }
            }
            return response()->json($clases);
        } else {
            return false;
        }
    }
    public function sendEmailHome(Request $request)
    {
        $email_to = "trikeleeducacion@gmail.com";

        Mail::send('emails.contactus', ["subject" => $request->subject, "nombre" => $request->name, "telefono" => $request->phone, "correo" => $request->email], function ($message) use ($email_to) {
            $message->to($email_to, 'Trikele Contáctanos');
            $message->subject('Nuevo usuario Contáctanos');
        });

        return 'ok';
    }
}
