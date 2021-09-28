<?php

namespace App\Http\Controllers;

use App\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\User;
use Illuminate\Support\Facades\Hash;
use Auth;
use DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $teachers = DB::table('users')
        ->join('classroom_teacher','users.id','=','classroom_teacher.id_user')
        ->join('area','area.id','=','classroom_teacher.id_area')
        ->select('area.name as area_name','users.*')
        ->get();

        $students = DB::table('classroom_student')
        ->join('classroom','classroom_student.id_classroom','=','classroom.id')
        ->join('grade','classroom.id_grade','=','grade.id')
        ->join('users','classroom_student.id_user','=','users.id')
        ->select('grade.name as grade_name','users.*')
        ->get();

        $users = [
            $teachers,
            $students,
        ];
            
        return response()->json($users);
        /*[
         'pagination'      => [
            'total'        => $users->total(),
            'current_page' => $users->currentPage(),
            'per_page'     => $users->perPage(),
            'last_page'    => $users->lastPage(),
            'from'         => $users->firstItem(),
            'to'           => $users->lastItem(),
         ],
         'users' => $users
     ];*/
    }

    public function getAllUsersPaginated(){
        $user = Auth::user();
        if($user->type_user === 1){
            $users = DB::table('users')->paginate(20);
            return response()->json($users);
        }else{
            return [];
        }
    }

    public function specificUser(String $name){
        $user = User::where('name',$name)->get();
        return response()->json($user);
    }

    /**
     * login
     */
    public function loginWeb(Request $request)
    {
        $user_name = $request->input('user_name');
        $password = $request->input('password');
        if (Auth::attempt(['user_name' => $user_name, 'password' => $password], false)) {
            $user = Auth::user();
            if($user->deleted === 0){
                return redirect('/inicio');
            }else{
                return redirect('/login')->with('status', 'Usuario Desactivado!');
            }
        } else {
            return redirect('/login')->with('status', 'Usuario no encontrado!');
        }
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

            'name' => 'required',
            'last_name' => 'required',
            'password' => 'required',
            'email' => 'required',
            'type_user' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'id_number' => 'required'
        ]);

        // User::create($request->all());
        $data = $request->all();
        $url = url()->current();
        $url = explode("/", $url);
        $url = $url[0] . "//" . $url[2];

        $user = new User;
        $user->name = isset($data['name']) ? $data['name'] : "";
        $user->last_name = isset($data['last_name']) ? $data['last_name'] : "";
        $user->email = isset($data['email']) ? $data['email'] : "";
        $user->user_name = isset($data['user_name']) ? $data['user_name'] : "";
        $user->phone = isset($data['phone']) ? $data['phone'] : "";
        $user->id_number = isset($data['id_number']) ? $data['id_number'] : "";
        $user->password = isset($data['Cpassword']) ? Hash::make($data['Cpassword']) : Hash::make($data['password']);
        $user->address = isset($data['address']) ? $data['address'] : "";
        $user->type_user = isset($data['type_user']) ? $data['type_user'] : "";
        $user->picture = isset($data['user_name']) ? $url . "/uploads/images/" . $data['user_name'] . ".png" : "";
        $user->save();

        /* Send email register */
        if (isset($data['email'])) {
            Mail::send('emails.register', $data, function ($msj) use ($data) {
                $msj->to($data['email'])->subject('Falta sólo un paso más');
            });
        }
        return view('home');
        // return response()->json([true]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $user = Auth::user();
        return $user;
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
            'name' => 'required'
        ]);
        User::find($id)->update($request->all());
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
        $users = User::findOrFail($id);
        $users->deleted = 1;
        $users->update();
        return response()->json('Usuario Desactivado');
    }
    public function uploadFile(Request $request)
    {
        // return $request;
        $file = request('file');
        // dd($file);
        if (!empty($file)) {
            $fileName = request('user_name');
            // file with path
            $filePath = url('uploads/images/' . $fileName . ".png");
            //Move Uploaded File
            $destinationPath = 'uploads/images';
            if ($file->move($destinationPath, $fileName . ".png")) {
                return "ok";
            }
        }
    }
    public function resetPassword(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if ($user) {
            $password = time() . $user->id;
            $data = [
                'user' => $user,
                'password' => $password,
                'email' => $user->email,
            ];

            Mail::send('emails.forgotPassword', $data, function ($msj) use ($data) {
                $msj->to($data['email'])->subject('Olvidé Contraseña');
            });

            $user->password = Hash::make($password);
            $user->save();
            return view('home');
        } else {
            return redirect()->back()->withErrors(['error' => 'Las credenciales ingresadas no coinciden en nuestros registros']);
        }
    }
    public function changePassword(Request $request)
    {
        $user = Auth::user();
        $password = $request->password;
        if ($user) {
            $user->password = Hash::make($password);
            $user->save();
            return 'ok';
        } else {
            return 'false';
        }
    }
    /**
     * login
     */
    public function loginClientWeb(Request $request)
    {
        $user_name = $request->input('user_name');
        $password = $request->input('password');
        if (Auth::attempt(['user_name' => $user_name, 'password' => $password], false)) {
            $user = Auth::user();
            /*
            if(!$user->isClient())
            {
               User::where('id',$user->id)->update([
                   'type_user'=>4
               ]);
            }*/

            $client = Customer::where('user_id', $user->id)->where('deleted', 0)->first();

            if (!isset($client)) {
                Customer::create([
                    'user_id' => $user->id,
                    'type' => 1,
                    'state' => 1,
                    'deleted' => 0,
                    'updated_user' => $user->id
                ]);
            }

            return redirect('/cliente/cuenta');
        } else {
            return redirect('/compra/plan');
        }
    }
    public function logOut()
    {
        // Cerramos la sesión
        Auth::logout();
        // Volvemos al login y mostramos un mensaje indicando que se cerró la sesión
        return Redirect::to('login');
    }

    public function getParents(String $id){
        $parents = User::where('parent_id','=',$id)->get();
        return response()->json($parents);
    }

    public function getUser(){
        $user = Auth::user();
        return response()->json($user);
    }
}
