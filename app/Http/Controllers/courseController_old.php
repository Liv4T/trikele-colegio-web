<?php

namespace App\Http\Controllers;
use App\Courses;
use App\Units;
use App\Topic;
use App\Suscription;
use Illuminate\Http\Request;

class courseController extends Controller
{
    public function GetCourses()
    {
        $course = Courses::all();
        $data = [];
        $data[0] = [
            'id'   => 0,
            'text' =>'Seleccione',
        ];
        foreach ($course as $key => $value) {
            $data[$key+1] =[
                'id'   => $value->id,
                'text' => $value->name,
            ];
        }
        return response()->json($data);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $course = Courses::all();
        return $course;
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

    
    public function GetUnits($id)
    {
        $units = Units::where('id_courser',$id)->get();
        $data = [];
        $data[0] = [
            'id'   => 0,
            'text' =>'Seleccione',
        ];
        foreach ($units as $key => $value) {
           $data[$key+1] =[
                'id'   => $value->id,
                'text' => $value->name,
            ];
        }
        return response()->json($data);
    }
    
    public function GetTopics($id)
    {
        $topics = Topic::where('id_courser',$id)->get();
        $data = [];
        $data[0] = [
            'id'   => 0,
            'text' =>'Seleccione',
        ];
        foreach ($topics as $key => $value) {
           $data[$key+1] =[
                'id'   => $value->id,
                'text' => $value->name,
            ];
        }
        return response()->json($data);
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
        
            'state'=>'required',
        ]);
        //return $request;
        $data = $request->all();
        $courser = new Courses;
        $courser->id_category = isset($data['id_category']) ? $data['id_category']:"";
        $courser->id_subcategory = isset($data['id_subcategory']) ? $data['id_subcategory']:"";
        $courser->name = isset($data['name']) ? $data['name']:"";
        $courser->id_user = Auth::user()->id;
        $courser->welcome = isset($data['welcome']) ? $data['welcome']:"";
        $courser->methodology = isset($data['methodology']) ? $data['methodology']:"";
        $courser->intention = isset($data['intention']) ? $data['intention']:"";
        $courser->intensityAC = isset($data['intensityAC']) ? $data['intensityAC']:"";
        $courser->competences = isset($data['competences']) ? $data['competences']:"";
        $courser->description = isset($data['description']) ? $data['description']:"";
        $courser->intensityTA = isset($data['intensityTA']) ? $data['intensityTA']:"";
        $courser->achievement = isset($data['achievement']) ? $data['achievement']:"";
        $courser->indicatorA = isset($data['indicatorA']) ? $data['indicatorA']:"";
        $courser->map = isset($data['map']) ? $data['map']:"";
        $courser->methodologyG = isset($data['methodologyG']) ? $data['methodologyG']:"";
        $courser->type = isset($data['type']) ? $data['type']:"";
        $courser->presentation = isset($data['presentation']) ? $data['presentation']:"";
        $courser->descriptionO = isset($data['descriptionO']) ? $data['descriptionO']:"";
        $courser->state = isset($data['state']) ? $data['state']:"";
        // $courser->image = 
        // $courser->video_presentation = 
        $courser->save();
        /* Save Unirs from courses */
        $unidades = $data['units'];
        foreach($unidades as $index => $unidad) { 
            $units = Units::create([
                'id_courser' => $courser->id,
                'name' => $unidad->name,
                'hability' => $unidad->hability,
                'competences_e1' => $unidad->competences_e1,
                'competences_e2' => $unidad->competences_e2,
                'competences_e3' => $unidad->competences_e3,
                'competences_t1' => $unidad->competences_t1,
                'competences_t2' => $unidad->competences_t2,
                'competences_t3' => $unidad->competences_t3,
                'result1' => $unidad->result1,
                'result2' => $unidad->result2,
                'result3' => $unidad->result3,
                'result4' => $unidad->result4,
                'comper11' => $unidad->comper11,
                'comper12' => $unidad->comper12,
                'comper13' => $unidad->comper13,
                'comper21' => $unidad->comper21,
                'comper22' => $unidad->comper22,
                'comper23' => $unidad->comper23,
                'comper31' => $unidad->comper31,
                'comper32' => $unidad->comper32,
                'comper33' => $unidad->comper33,
                'comper41' => $unidad->comper41,
                'comper42' => $unidad->comper42,
                'comper43' => $unidad->comper43,
                'question' => $unidad->question,
                'content' => $unidad->content,
                'master' => $unidad->master,
                // 'video' => $unidad->video,
                'nameM' => $unidad->nameM,
                'nameV' => $unidad->nameV,
                'bibliography' => $unidad->bibliography,
                'doing' => $unidad->doing,
                'challenge' => $unidad->challenge,
                'projecting' => $unidad->projecting,
                'ready' => $unidad->ready,
            ]);
        }
        /* Create Tems from units */
        $topics = $data['topics'];
        foreach($topics as $index => $topic) { 
            $unit = Units::where('name',$topic->unit_name)->first(); 
            $topyc = Topic::create([
                'name' => $topic->name,
                'content' => $topic->content,
                'id_unit' => $unit->id
            ]);
        }
        return response()->json([true]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(String $id)
    {
        $course = Courses::findOrFail($id);
        return $course;
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function payCourses(Request $request)
    {
        $data = $request->all();

        $suscription = new Suscription;
        $suscription->courser_id = $data['courser_id'];
        $suscription->user_id = Auth::user()->id;
        $suscription->save();
        
        if($suscription->save()){
            return response()->json([true]);
        }else{
            return response()->json([false]);
        }
        
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
        Courses::find($id)->update($request->all());
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
        $course = Courses::findOrFail($id);
        $course->delete();
    }
}
