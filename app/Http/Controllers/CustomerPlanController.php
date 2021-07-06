<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use App\CustomerPlan;
use App\CustomerPlanPrice;
use App\User;
use PhpParser\Node\Expr\Cast\Double;

class CustomerPlanController extends Controller
{
    public function all()
    {
        return CustomerPlan::where('deleted',0)->get();
    }
    public function allByType( string $type)
    {
        $ret=[];
        $plans= CustomerPlan::where('type', $type)->where('state',1)->where('deleted',0)->get();

        $current_date=date('Y-m-d');

        foreach($plans as $index=>$plan){


            $price = CustomerPlanPrice::where('customer_plan_id', $plan->id)->where('state',1)->where('deleted',0)->
            whereDate('initial_date','<=',$current_date)->where(function ($query) use ($current_date) {
                $query->where(function ($q) use ($current_date) {
                    $q->whereNotNull('expire_date')->whereDate('expire_date','>=',$current_date);
                })->orWhereNull('expire_date');
            })->first();


            if(!is_null($price))
            {
                array_push($ret,[
                    'customer_plan_id'=>$price->customer_plan_id,
                    'grade'=>$plan->grade,
                    'name'=>$plan->name,
                    'credits_quantity'=>$plan->credits_quantity,
                    'presentation_url'=>$plan->presentation_url,
                    'price'=>$price->value,
                    'discount'=>$price->discount_value,
                    'tax_percent'=>$price->tax_percent,
                    'total_tax'=>(($price->value-$price->discount_value)*$price->tax_percent)/($price->tax_percent+100),
                    'total_price'=>$price->value-$price->discount_value,
                    'before_price'=>$price->value,
                    'id'=>$plan->id
                ]);
            }



        }

        return $ret;
    }
    public function getByTypeAndGrade( string $type,int $grade)
    {
        $ret=[];
        $plan= CustomerPlan::where('type', $type)->where('grade',$grade)->where('state',1)->where('deleted',0)->first();

        if(!isset($plan)) return $ret;

        $current_date=date('Y-m-d');


        $price = CustomerPlanPrice::where('customer_plan_id', $plan->id)->where('state',1)->where('deleted',0)->
        whereDate('initial_date','<=',$current_date)->where(function ($query) use ($current_date) {
            $query->where(function ($q) use ($current_date) {
                $q->whereNotNull('expire_date')->whereDate('expire_date','>=',$current_date);
            })->orWhereNull('expire_date');
        })->first();


        if(!is_null($price))
        {
            $ret=[
                'customer_plan_id'=>$price->customer_plan_id,
                'grade'=>$plan->grade,
                'name'=>$plan->name,
                'credits_quantity'=>$plan->credits_quantity,
                'presentation_url'=>$plan->presentation_url,
                'price'=>$price->value,
                'discount'=>$price->discount_value,
                'tax_percent'=>$price->tax_percent,
                'total_price'=>$price->value-$price->discount_value,
                'total_tax'=>(($price->value-$price->discount_value)*$price->tax_percent)/($price->tax_percent+100),
                'before_price'=>$price->value
            ];
        }





        return $ret;
    }





    public function allActive()
    {
        return CustomerPlan::where('deleted',0)->where('state',1)->get();
    }
    public function get(int $id)
    {
        return CustomerPlan::find($id);
    }
    /*
    public function update(Request $request,int $id)
    {
        $auth = Auth::user();
        $data=$request->all();
        if(!isset($data)) return response('Datos inválidos',400);
        if($id<=0) return response('ID inválida',400);

        CustomerPlan::where('id',$id)->get([
            'customer_plan_id'=>$data['customer_plan_id'],
            'grade'=>$data['grade'],
            'credist_quatity'=>$data['credits_quantity'],
            'presentatio_url'=>$data['presentatio_url'],
            'cellphone'=>$data['cellphone'],
            'type'=>$data['type'],
            'state'=>$data['state'],
            'updated_user'=>$auth->id,
        ]);

    }
    /*
    public function insert(Request $request)
    {
        $auth = Auth::user();
        $data=$request->all();
        if(!isset($data)) return response('Datos inválidos',400);

        Customer::create([
            'document_type_id'=>$data['document_type_id'],
            'identification'=>$data['identification'],
            'name'=>$data['name'],
            'email'=>$data['email'],
            'cellphone'=>$data['cellphone'],
            'type'=>$data['type'],
            'state'=>1,
            'deleted'=>0,
            'updated_user'=>$auth->id,
        ]);

    }*/
    public function delete(int $id)
    {
        $auth = Auth::user();

        if($id<=0) return response('ID inválida',400);

        user::where('id',$id)->update([
            'deleted'=>1,
            'updated_user'=>$auth->id,
        ]);

    }
}
