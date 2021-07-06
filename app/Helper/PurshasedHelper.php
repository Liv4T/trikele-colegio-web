<?php

use App\Classroom;
use App\CustomerCredits;
use App\CustomerCreditsMovement;
use App\CustomerInvoiceItemArea;
use App\CustomerInvoiceItemTutorial;
use App\CustomerInvoiceItemWeekly;
use App\CustomerPlanRule;
use App\TutorScheduleReservation;
use App\TutorScheduleStudent;
use App\Weekly;
use App\WeeklyPlanUser;

class PurshasedHelper
{
    public static function setStudentToPlan($user_id,$plan,$invoice_items)
    {
        $current_date=date('Y-m-d H:i:s');

        //set student to plan
        $plan_rule_duration=CustomerPlanRule::where('feature','DURATION_DAYS')->where('customer_plan_id',$plan->id)->where('deleted',0)->first();

        $plan_area_exclude=CustomerPlanRule::where('feature','EXCLUDE_AREAS')->where('customer_plan_id',$plan->id)->where('deleted',0)->first();



        $exclude_areas=[];
        if(isset($plan_area_exclude))
        {
            $exclude_areas=json_decode($plan_area_exclude->value,true);
        }


        $plan_only_grade=CustomerPlanRule::where('feature','ONLY_GRADE')->where('customer_plan_id',$plan->id)->where('deleted',0)->first();

        $only_grades=[];
        if(isset($plan_only_grade))
        {
            $only_grades=json_decode($plan_only_grade->value,true);
        }


        $plan_area_only=CustomerPlanRule::where('feature','ONLY_AREAS')->where('customer_plan_id',$plan->id)->where('deleted',0)->first();

        $only_areas=[];
        if(isset($plan_area_only))
        {
            $only_areas=json_decode($plan_area_only->value,true);
        }

        if(!isset($plan_rule_duration))  return response()->json(['message'=>'Duración no definida.'],403);

        $expire_date=date('Y-m-d H:i',strtotime('+'.$plan_rule_duration->value.' day'));


        foreach ($invoice_items as $k_invoice_item => $invoice_item) {

           $credits_item=CustomerCredits::where('customer_invoice_item_id',$invoice_item->id)->first();

           if(!isset($credits_item))  return response()->json(['message'=>'Registro de creditos no realizado.'],403);


            if(count($only_grades)>0){
                //PLAN BY GRADE RULE
                $weekly_modules =[];
                foreach ($only_grades as  $gradeId) {

                    $classroom=Classroom::where('id_grade', $gradeId)->first();

                    if(!isset($classroom))  return response()->json(['message'=>'Classroom no válido.'],403);

                    $_weekly_modules =Weekly::where('id_classroom',$classroom->id)->where('deleted',0)->get();

                    foreach ($_weekly_modules as $item) {
                       array_push($weekly_modules,$item);
                    }

                }


            }else{
                //PLAN BY GRADE
                $classroom=Classroom::where('name',$plan->grade)->first();

                if(!isset($classroom))  return response()->json(['message'=>'Classroom no válido.'],403);

                $itemWeekly=CustomerInvoiceItemWeekly::where('customer_invoice_item_id',$invoice_item->id)->where('deleted',0)->first();

                 if(isset($itemWeekly))
                 {
                     //PLAN BY INVOICE ITEM WEEKLY
                     $weekly_modules =Weekly::where('id', $itemWeekly->weekly_id)->get();
                 }
                 else
                 {
                     $itemArea=CustomerInvoiceItemArea::where('customer_invoice_item_id',$invoice_item->id)->where('deleted',0)->first();

                     if(isset($itemArea))
                     {
                          //PLAN BY INVOICE ITEM AREA
                         array_push($only_areas,$itemArea->area_id);

                         $weekly_modules =Weekly::when(count($only_areas)>0,function($query)use($only_areas){return $query->whereIn('id_area', $only_areas);})->where('id_classroom',$classroom->id)->where('deleted',0)->get();
                     }
                     else{

                        //PLAN BY DEFAULT
                         $weekly_modules =Weekly::when(count($exclude_areas)>0,function($query)use($exclude_areas){return $query->whereNotIn('id_area', $exclude_areas);})->when(count($only_areas)>0,function($query)use($only_areas){return $query->whereIn('id_area', $only_areas);})->where('id_classroom',$classroom->id)->where('deleted',0)->get();
                     }



                 }

            }




           foreach ($weekly_modules as $i_module => $weekly_module) {



               $weekly_plan_user=WeeklyPlanUser::create([
                   'user_id'=>$user_id,
                   'weekly_plan_id'=>$weekly_module->id,
                   'total_credits'=>0,
                   'initial_date'=>$current_date,
                   'expire_date'=>$expire_date,
                   'state'=>1,
                   'deleted'=>0,
                   'updated_user'=>$user_id
               ]);


               CustomerCreditsMovement::create([
                   'weekly_plan_user_id'=>$weekly_plan_user->id,
                   'customer_credits_id'=>$credits_item->id,
                   'credits_quantity'=>0,
                   'initial_date'=>$current_date,
                   'expire_date'=>$expire_date,
                   'state'=>1,
                   'deleted'=>0,
                   'updated_user'=>$user_id
               ]);


           }

           if(count($weekly_modules)>0)
           {
               CustomerCredits::where('customer_invoice_item_id',$invoice_item->id)->update([
                   'state'=>2
               ]);
           }

       }

       //end set student to plan
    }

    public static function setStudentToTutoria($user_id,$plan,$invoice_items){


        foreach ($invoice_items as  $invoice_item) {

            $customerInvoiceItemTutorial=CustomerInvoiceItemTutorial::where('customerinvoiceitem_id',$invoice_item->id)->first();

            $tutorScheduleReservation=TutorScheduleReservation::find($customerInvoiceItemTutorial->tutorschedulereservation_id);

            if($plan->type!='TUTORIA_INVITACION')
            {
                $tutorScheduleReservation->state=1;

                $tutorScheduleReservation->save();

                for ($i=0; $i < $tutorScheduleReservation->number_students; $i++) {

                    $serial = uniqid();

                    if($i==0){
                        TutorScheduleStudent::create([
                            'serial'=>$serial,
                            'student_id'=>$user_id,
                            'customerinvoiceitem_id'=>$invoice_item->id,
                            'tutorschedulereservation_id'=>$tutorScheduleReservation->id,
                            'state'=>1,
                            'deleted'=>0
                        ]);
                    }
                    else{
                        TutorScheduleStudent::create([
                            'serial'=>$serial,
                            'student_id'=>null,
                            'customerinvoiceitem_id'=>$invoice_item->id,
                            'tutorschedulereservation_id'=>$tutorScheduleReservation->id,
                            'state'=>0,
                            'deleted'=>0
                        ]);
                    }
                }
            }
            else{//TUTORIA INVITACION
                $serial = uniqid();
                TutorScheduleStudent::create([
                    'serial'=>$serial,
                    'student_id'=>$user_id,
                    'customerinvoiceitem_id'=>$invoice_item->id,
                    'tutorschedulereservation_id'=>$tutorScheduleReservation->id,
                    'state'=>1,
                    'deleted'=>0
                ]);

            }





        }
    }
}
