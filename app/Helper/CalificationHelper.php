<?php

use App\CoursesAchievement;
use App\Indicator;
use App\Period;
use App\Weekly;
use Illuminate\Support\Facades\DB;

class CalificationHelper{
    public static function getCalificationGuide($student_id)
    {
        $period_year=date('Y');

        $areas=DB::table('classroom_student as cs')
            ->join('annual_planification as ap', 'ap.id_classroom', '=', 'cs.id_classroom')
            ->join('area', 'ap.id_area', '=', 'area.id')
            ->join('users as teacher','teacher.id','=','ap.id_teacher')
            ->where('cs.id_user','=', $student_id)
            ->select('area.id as area_id','area.name as area_name','cs.id_classroom as classroom_id','ap.id as plannification_id','teacher.name as teacher_name','teacher.last_name as teacher_lastname')
            ->groupBy('area.id','area.name','cs.id_classroom','ap.id','teacher.name','teacher.last_name')
            ->get();

        $periods=Period::where('year',$period_year)->get();


        for ($a=0; $a < count($areas) ; $a++) {

            //get global calification
            $areas[$a]->periods=array();
            foreach ($periods as $period) {
                
                $weeklys=Weekly::where('id_classroom',$areas[$a]->classroom_id)->where('id_area',$areas[$a]->area_id)->where('week','>=',$period->week_from)->where('week','<=',$period->week_to)->get();                                

                $cal_total=0;
                foreach ($weeklys as $w) {
                    $calification= DB::select('call obtener_calificacion_modulo(?,?)',[$w->id, $student_id])[0]->calificacion;
                    if($calification>-1)
                    {
                        $cal_total+=$calification;
                    }
                }

                //set average calification
                $areas[$a]->periods[$period->name]=count($weeklys)>0?round($cal_total/count($weeklys),1):0;

            }

            //get achievements
            $areas[$a]->achievements=CoursesAchievement::where('id_planification',$areas[$a]->plannification_id)->get();

            for ($i=0; $i < count($areas[$a]->achievements); $i++) {

                //set percent on zero
               if($areas[$a]->achievements[$i]->percentage==0)
               {
                $areas[$a]->achievements[$i]->percentage=round(100/count($areas[$a]->achievements),0);
               }

               //get indicators
               $areas[$a]->achievements[$i]->indicators=Indicator::where('id_achievement',$areas[$a]->achievements[$i]->id)->get();

               for ($j=0; $j < count($areas[$a]->achievements[$i]->indicators); $j++) {
                   //set percent on zero
                    if($areas[$a]->achievements[$i]->indicators[$j]->activity_rate==0)
                    {
                        $areas[$a]->achievements[$i]->indicators[$j]->activity_rate=round(100/count($areas[$a]->achievements[$i]->indicators),0);
                    }
               }
            }
        }
        return $areas;
    }
}
