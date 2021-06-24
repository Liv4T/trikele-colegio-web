<?php

namespace App\Http\Controllers;

use App\Classroom;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use App\Customer;
use App\CustomerCredits;
use App\CustomerCreditsMovement;
use App\CustomerInvoice;
use App\CustomerInvoiceItem;
use App\CustomerPlan;
use App\CustomerPlanRule;
use App\CustomerUser;
use App\DocumentType;
use App\User;
use App\Weekly;
use App\WeeklyPlanUser;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Throwable;

class CustomerController extends Controller
{
    public function all()
    {
        return User::where('deleted',0)->get();
    }
    public function findByEmail(string $email)
    {
        return User::where('email',$email)->where('deleted',0)->get();
    }
    public function allActive()
    {
        return User::where('deleted',0)->where('state',1)->get();
    }
    public function get(int $id)
    {
        return User::find($id);
    }

    public function addCustomer(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'last_name' => 'required',
            'password' => 'required',
            'email' => 'required',
            'type_user' => 'required',
            'phone' => 'required',
            'id_number' => 'required',
            'document_type' => 'required',
            'user_name' => 'required'
        ]);

        // User::create($request->all());
        $data = $request->all();
        $url = url()->current();
        $url = explode("/", $url);
        $url = $url[0] . "//" . $url[2];


         //validate username
         $userExist=User::where('user_name',$data['user_name'])->where('deleted',0)->first();

         if(isset($userExist))
         {
             return response()->json([
                 'message'=>'Usuario ya se encuentra registrado.'
             ],403);
         }

        //validate cellphone
        $userExist=User::where('phone',$data['phone'])->where('deleted',0)->first();

        if(isset($userExist))
        {
            return response()->json([
                'message'=>'Número de celular ya existe'
            ],403);
        }


        //validate email
        $userExist=User::where('email',$data['email'])->where('deleted',0)->first();

        if(isset($userExist))
        {
            return response()->json([
                'message'=>'Correo electrónico ya existe'
            ],403);
        }

         //validate identification
         $userExist=User::where('id_number',$data['id_number'])->where('document_type',$data['document_type'])->where('deleted',0)->first();

         if(isset($userExist))
         {
             return response()->json([
                 'message'=>'Identificación ya existe'
             ],403);
         }


        $user = new User;
        $user->name = isset($data['name']) ? $data['name'] : "";
        $user->last_name = isset($data['last_name']) ? $data['last_name'] : "";
        $user->document_type = isset($data['document_type']) ? $data['document_type'] :1;
        $user->email = isset($data['email']) ? $data['email'] : "";
        $user->user_name = isset($data['user_name']) ? $data['user_name'] : "";
        $user->phone = isset($data['phone']) ? $data['phone'] : "";
        $user->id_number = isset($data['id_number']) ? $data['id_number'] : "";
        $user->password = isset($data['Cpassword']) ? Hash::make($data['Cpassword']) : Hash::make($data['password']);
        $user->address = isset($data['address']) ? $data['address'] : "";
        $user->type_user = 3;
        $user->picture = isset($data['user_name']) ? $url . "/uploads/images/" . $data['user_name'] . ".png" : "";
        $user->state=1;
        $user->deleted=0;
        $user->save();


        //creamos un cliente
        $client=Customer::where('user_id',$user->id)->where('deleted',0)->first();
        if(!isset($client))
        {
            Customer::create([
                'user_id'=>$user->id,
                'type'=>1,
                'state'=>1,
                'deleted'=>0,
                'updated_user'=>$user->id
            ]);
        }


        /* Send email register
        if (isset($data['email'])) {
            try {
                Mail::send('emails.register', $data, function ($msj) use ($data) {
                    $msj->to($data['email'])->subject('Falta sólo un paso más');
                });
            } catch (Throwable $th) {
                //throw $th;
            }

        } */


    }

    public function setStudentToPlan(Request $request)
    {
        $auth = Auth::user();

        $customer= Customer::where('user_id', $auth->id)->where('deleted', 0)->first();

        if(!isset($customer))
        {
            return response()->json([
                'message'=>'Cliente no esta registrado.'
            ],403);
        }

        $this->validate($request, [
            'student_id' => 'required',
            'invoice_item_id' => 'required'
        ]);

        $data=$request->all();

        $current_date=date('Y-m-d H:i:s');


        $invoice_item=CustomerInvoiceItem::find($data['invoice_item_id']);

        if(!isset($invoice_item))  return response()->json(['message'=>'Factura no válida.'],403);

        $plan=CustomerPlan::find($invoice_item->customer_plan_id);

        if(!isset($plan))  return response()->json(['message'=>'Plan no válido.'],403);

        $plan_rule_duration=CustomerPlanRule::where('feature','DURATION_DAYS')->where('customer_plan_id',$plan->id)->where('deleted',0)->first();

        $plan_area_exclude=CustomerPlanRule::where('feature','EXCLUDE_AREAS')->where('customer_plan_id',$plan->id)->where('deleted',0)->first();

        $exclude_areas=[];
        if(isset($plan_area_exclude))
        {
            $exclude_areas=json_decode($plan_area_exclude->value,true);
        }


        $plan_area_only=CustomerPlanRule::where('feature','ONLY_AREAS')->where('customer_plan_id',$plan->id)->where('deleted',0)->first();

        $only_areas=[];
        if(isset($plan_area_only))
        {
            $only_areas=json_decode($plan_area_only->value,true);
        }




        if(!isset($plan_rule_duration))  return response()->json(['message'=>'Duración no definida.'],403);

        $expire_date=date('Y-m-d H:i',strtotime('+'.$plan_rule_duration->value.' day'));

        $credits_item=CustomerCredits::where('customer_invoice_item_id',$invoice_item->id)->first();

        if(!isset($credits_item))  return response()->json(['message'=>'Registro de creditos no realizado.'],403);

       if($plan->credits_quantity==0) //asign to simple plan
       {
            $classroom=Classroom::where('name',$plan->grade)->first();

            if(!isset($classroom))  return response()->json(['message'=>'Classroom no válido.'],403);


            $weekly_modules =Weekly::when(count($exclude_areas)>0,function($query)use($exclude_areas){return $query->whereNotIn('id_area', $exclude_areas);})->when(count($only_areas)>0,function($query)use($only_areas){return $query->whereIn('id_area', $only_areas);})->where('id_classroom',$classroom->id)->where('deleted',0)->get();
            Log::info($only_areas);
            foreach ($weekly_modules as $i_module => $weekly_module) {



                $weekly_plan_user=WeeklyPlanUser::create([
                    'user_id'=>$data['student_id'],
                    'weekly_plan_id'=>$weekly_module->id,
                    'total_credits'=>0,
                    'initial_date'=>$current_date,
                    'expire_date'=>$expire_date,
                    'state'=>1,
                    'deleted'=>0,
                    'updated_user'=>$auth->id
                ]);


                CustomerCreditsMovement::create([
                    'weekly_plan_user_id'=>$weekly_plan_user->id,
                    'customer_credits_id'=>$credits_item->id,
                    'credits_quantity'=>0,
                    'initial_date'=>$current_date,
                    'expire_date'=>$expire_date,
                    'state'=>1,
                    'deleted'=>0,
                    'updated_user'=>$auth->id
                ]);


            }

            if(count($weekly_modules)>0)
            {
                CustomerCredits::where('customer_invoice_item_id',$invoice_item->id)->update([
                    'state'=>2
                ]);
            }


       }

    }

    public function setCreditsRedemption(Request $request)
    {
        $auth = Auth::user();

        $customer= Customer::where('user_id', $auth->id)->where('deleted', 0)->first();

        if(!isset($customer))
        {
            return response()->json([
                'message'=>'Cliente no esta registrado.'
            ],403);
        }

        $this->validate($request, [
            'student_id' => 'required',
            'weekly_plan_id' => 'required'
        ]);

        $data=$request->all();

        $current_date=date('Y-m-d H:i:s');
        $expire_date=date('Y-m-d H:i',strtotime('+ 1 year'));

        $weekly_plan=Weekly::find($data['weekly_plan_id']);

        if(!isset($weekly_plan))
        {
            return response()->json([
                'message'=>'Plan no es válido.'
            ],403);
        }




        $total_credits=0;





        $credits= CustomerCredits::where('customer_id',$customer->id)->where('state', 1)->where('deleted', 0)->where('credits_available','>',0)->orderBy('id')->get();


        foreach($credits as $index=>$credit)
        {
            //totalizamos creditos
            $total_credits+=$credit->credits_available;
        }



        if($total_credits<$weekly_plan->credits_quantity|| $weekly_plan->credits_quantity==0)
        {

            return response()->json([
                'message'=>'Saldo de créditos insuficiente para realizar esta acción.'
            ],403);
        }





        try {

            DB::beginTransaction();


            //register user and plan
            $weekly_plan_user=WeeklyPlanUser::create([
                'user_id'=>$data['student_id'],
                'weekly_plan_id'=>$data['weekly_plan_id'],
                'total_credits'=>$weekly_plan->credits_quantity,
                'initial_date'=>$current_date,
                'expire_date'=>$expire_date,
                'state'=>1,
                'deleted'=>0,
                'updated_user'=>$auth->id
            ]);

            $available=0;
            $required_credits=$weekly_plan->credits_quantity;
            foreach($credits as $index=>$credit)
            {
                if($required_credits>0)
                {
                    $available=$credit->credits_available-$required_credits;
                    if($available==0)
                    {
                        CustomerCredits::where('id',$credit->id)->update([
                            'credits_available'=>0,
                            'updated_user'=>$auth->id,
                            'state'=>2
                        ]);
                        $required_credits=0;

                        CustomerCreditsMovement::create([
                            'weekly_plan_user_id'=>$weekly_plan_user->id,
                            'customer_credits_id'=>$credit->id,
                            'credits_quantity'=>$required_credits,
                            'initial_date'=>$current_date,
                            'expire_date'=>$expire_date,
                            'state'=>1,
                            'deleted'=>0,
                            'updated_user'=>$auth->id
                        ]);
                    }
                    else if($available>0)
                    {
                        CustomerCredits::where('id',$credit->id)->update([
                            'credits_available'=>$available,
                            'updated_user'=>$auth->id
                        ]);
                        $required_credits=0;

                        CustomerCreditsMovement::create([
                            'weekly_plan_user_id'=>$weekly_plan_user->id,
                            'customer_credits_id'=>$credit->id,
                            'credits_quantity'=>$required_credits,
                            'initial_date'=>$current_date,
                            'expire_date'=>$expire_date,
                            'state'=>1,
                            'deleted'=>0,
                            'updated_user'=>$auth->id
                        ]);
                    }
                    else{
                        CustomerCredits::where('id',$credit->id)->update([
                            'credits_available'=>0,
                            'updated_user'=>$auth->id,
                            'state'=>2
                        ]);
                        $required_credits=($available*-1);

                        CustomerCreditsMovement::create([
                            'weekly_plan_user_id'=>$weekly_plan_user->id,
                            'customer_credits_id'=>$credit->id,
                            'credits_quantity'=>$credit->credits_available,
                            'initial_date'=>$current_date,
                            'expire_date'=>$expire_date,
                            'state'=>1,
                            'deleted'=>0,
                            'updated_user'=>$auth->id
                        ]);
                    }

                }

            }




            DB::commit();


        } catch (Throwable $e) {
            print_r($e->getMessage());
            DB::rollback();

            return response(json_encode($e->getMessage()),400);
        }


    }

    public function getStudents()
    {
        $auth = Auth::user();


        $students = [];

        $client= Customer::where('user_id', $auth->id)->where('deleted', 0)->first();



        if(!isset($client))
        {
            return $students;
        }

        $client_users= CustomerUser::where('customer_id', $client->id)->where('deleted', 0)->get();



        foreach($client_users as $index => $c_user){

            $student= User::find($c_user->user_id);

            if(!isset($student))
            {
                return $students;
            }

            $doc_type= DocumentType::where('id', $student->document_type)->where('deleted', 0)->first();

            if(!isset($doc_type))
            {
                $doc_type=new DocumentType();
            }

            array_push($students,[
                'user_id'=>$student->id,
                'user_name'=>$student->user_name,
                'creation_date'=>$student->created_at,
                'identification'=>$student->id_number,
                'type'=>$client->type,
                'document_type_id'=>$doc_type->id,
                'document_type_shortname'=>$doc_type->shortname,
                'document_type_name'=>$doc_type->name,
                'name'=>$student->name,
                'last_name'=>$student->last_name,
                'picture'=>$student->picture,
                'email'=>$student->email,
                'phone'=>$student->phone,
                'state'=>$student->state
            ]);

        }
        return $students;
    }

    public function addStudent(Request $request)
    {
        $auth = Auth::user();



        $this->validate($request, [
            'name' => 'required',
            'last_name' => 'required',
            'password' => 'required',
            'email' => 'required',
            'identification' => 'required',
            'document_type_id' => 'required',
            'user_name' => 'required'
        ]);

        $customer= Customer::where('user_id', $auth->id)->where('deleted', 0)->first();

        if(!isset($customer))
        {
            return response()->json([
                'message'=>'Cliente no esta registrado.'
            ],403);
        }

        $data=$request->all();

        //validate username
        $userExist=User::where('user_name',$data['user_name'])->where('deleted',0)->first();

        if(isset($userExist))
        {
            return response()->json([
                'message'=>'Usuario ya se encuentra registrado.'
            ],403);
        }

        //validate cellphone
        $userExist=User::where('phone',$data['phone'])->where('deleted',0)->first();

        if(isset($userExist))
        {
            return response()->json([
                'message'=>'Número de celular ya existe'
            ],403);
        }


        //validate email
        $userExist=User::where('email',$data['email'])->where('deleted',0)->first();

        if(isset($userExist))
        {
            return response()->json([
                'message'=>'Correo electrónico ya existe'
            ],403);
        }



         //validate identification
         $userExist=User::where('id_number',$data['identification'])->where('document_type',$data['document_type_id'])->where('deleted',0)->first();

         if(isset($userExist))
         {
             return response()->json([
                 'message'=>'Identificación ya existe'
             ],403);
         }

         $url = url()->current();
         $url = explode("/", $url);
         $url = $url[0] . "//" . $url[2];


         $user = new User;
         $user->name = isset($data['name']) ? $data['name'] : "";
         $user->last_name = isset($data['last_name']) ? $data['last_name'] : "";
         $user->document_type = isset($data['document_type_id']) ? $data['document_type_id'] :1;
         $user->email = isset($data['email']) ? $data['email'] : "";
         $user->user_name = isset($data['user_name']) ? $data['user_name'] : "";
         $user->phone = isset($data['phone']) ? $data['phone'] : "";
         $user->id_number = isset($data['identification']) ? $data['identification'] : "";
         $user->password = isset($data['Cpassword']) ? Hash::make($data['Cpassword']) : Hash::make($data['password']);
         $user->address = isset($data['address']) ? $data['address'] : "";
         $user->type_user = 3;//student
         $user->picture = isset($data['user_name']) ? $url . "/uploads/images/" . $data['user_name'] . ".png" : "";
         $user->state = 1;
         $user->deleted = 0;
         $user->save();




         CustomerUser::create([
             'customer_id'=>$customer->id,
             'user_id'=>$user->id,
             'deleted'=>0,
             'updated_user'=>1
         ]);





    }

    public function updateStudent(Request $request,int $id)
    {
        $auth = Auth::user();

        $customer= Customer::where('user_id', $auth->id)->where('deleted', 0)->first();

        if(!isset($customer))
        {
            return response()->json([
                'message'=>'Cliente no esta registrado.'
            ],403);
        }

        $data=$request->all();

        $user=User::find($id);

        if(!isset($user))
        {
            return response()->json([
                'message'=>'Estudiante no esta registrado.'
            ],403);
        }

        $user->name = isset($data['name']) ? $data['name'] : "";
        $user->last_name = isset($data['last_name']) ? $data['last_name'] : "";
        $user->document_type = isset($data['document_type_id']) ? $data['document_type_id'] :1;
        $user->user_name = isset($data['user_name']) ? $data['user_name'] : "";
        $user->phone = isset($data['phone']) ? $data['phone'] : "";
        $user->id_number = isset($data['identification']) ? $data['identification'] : "";
        $user->save();


    }


    public function deleteStudent(int $id)
    {
        $auth = Auth::user();

        $customer= Customer::where('user_id', $auth->id)->where('deleted', 0)->first();

        if(!isset($customer))
        {
            return response()->json([
                'message'=>'Cliente no esta registrado.'
            ],403);
        }

        $user=User::find($id);
        $user->deleted=1;
        $user->save();

        CustomerUser::where('user_id',$id)->where('customer_id',$customer->id)->where('deleted',0)->update([
            'deleted'=>1
        ]);

    }


    public function getAvailableCredits()
    {
        $auth = Auth::user();

        $credits_available = [];
        $total_credits=0;
        $expire_date=null;


        $client= Customer::where('user_id', $auth->id)->where('deleted', 0)->first();

        if(!isset($client))
        {

            $credits_available=[
                'available_credits'=>$total_credits,
                'expire_credits_date'=>$expire_date
            ];

            return $credits_available;
        }

        $credits= CustomerCredits::where('customer_id',$client->id)->where('state', 1)->where('deleted', 0)->where('credits_available','>',0)->get();


        foreach($credits as $index=>$credit)
        {
            //totalizamos creditos
            $total_credits+=$credit->credits_available;


            if(!(isset($expire_date) && $expire_date<$credit->expire_date))
            {
                $expire_date=$expire_date<$credit->expire_date;
            }
        }

        $credits_available=[
            'available_credits'=>$total_credits,
            'expire_credits_date'=>$expire_date
        ];

        return $credits_available;
    }

public function getPlans()
{
    $auth = Auth::user();

    $bought_plans = [];

    $current_date=date('Y-m-d H:i:s');

    $client= Customer::where('user_id', $auth->id)->where('deleted', 0)->first();

    if(!isset($client)) return response('Cliente no es válido',403);

    $invoices= CustomerInvoice::where('customer_id', $client->id)->where('deleted', 0)->get();
    
    foreach($invoices as $index => $invoice){

        $invoice_items= CustomerInvoiceItem::where('customer_invoice_id', $invoice->id)->where('deleted', 0)->get();
        
        foreach($invoice_items as $index_i=> $invoice_item){

            $plan= CustomerPlan::where('id', $invoice_item->customer_plan_id)->where('deleted', 0)->first();

            if(!isset($plan))  return response()->json(['message'=>'Plan no válido.'],403);
            
            $plan_rule_duration=CustomerPlanRule::where('feature','DURATION_DAYS')->where('customer_plan_id',$plan->id)->where('deleted',0)->first();
            
            //if(!isset($plan_rule_duration))  return response()->json(['message'=>'Duración no definida.'],403);
            if(!isset($plan_rule_duration)){
                $duration='';
            }else{
                $duration=$plan_rule_duration->value;
            }
            $credits_available=CustomerCredits::where('customer_invoice_item_id',$invoice_item->id)->where('deleted',0)->first();
            
            $student=null;
            $initial_date=null;
            $expire_date=null;

            if(isset($credits_available) && $credits_available->state==2)
            {
                $customer_credits_movement=CustomerCreditsMovement::where('customer_credits_id',$credits_available->id)->where('deleted',0)->first();
                if(isset($customer_credits_movement))
                {
                    $weekly_plan_user=WeeklyPlanUser::find($customer_credits_movement->weekly_plan_user_id);
                    
                    $student=User::find($weekly_plan_user->user_id);
                    $initial_date=$weekly_plan_user->initial_date;
                    $expire_date=$weekly_plan_user->expire_date;
                }
            }

            if(isset($plan) && isset($plan_rule_duration))
            {
                array_push($bought_plans,[
                    'status'=>$invoice->state,
                    'plan_id'=>$plan->id,
                    'plan_type'=>$plan->type,
                    'plan_name'=>$invoice_item->customer_plan_name,
                    'prefix_code'=>$invoice->prefix_code,
                    'consecutive'=>$invoice->consecutive,
                    'sale_date'=>$invoice->sale_date,
                    'channel_sale'=>$invoice->channel_sale,
                    'grade'=>$plan->grade,
                    'credits_quantity'=>$plan->credits_quantity,
                    'presentation_url'=>$plan->presentation_url,
                    'quantity'=>$invoice_item->quantity,
                    'unit_value'=>$invoice_item->unit_value,
                    'discount_value'=>$invoice_item->discount_value,
                    'tax_percent'=>$invoice_item->tax_percent,
                    'tax_value'=>$invoice_item->tax_value,
                    'currency_code'=>$invoice_item->currency_code,
                    'total_value'=>$invoice_item->total_value,
                    'available'=>(isset($credits_available) && $credits_available->state==1),
                    'invoice_item_id'=>$invoice_item->id,
                    'duration'=>$duration,
                    'student'=>$student??['name'=>''],
                    'initial_date'=>$initial_date,
                    'expire_date'=>$expire_date
                ]);
            }


        }




    }

    return $bought_plans;

}


    public function delete(int $id)
    {
        $auth = Auth::user();

        if($id<=0) return response('ID inválida',400);

        User::where('id',$id)->update([
            'deleted'=>1,
            'updated_user'=>$auth->id,
        ]);

    }
}
