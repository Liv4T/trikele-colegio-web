<?php

namespace App\Http\Controllers;

use App\Customer;
use App\CustomerInvoice;
use App\CustomerVoucher;
use App\CustomerVoucherRedemption;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use App\User;

class CustomerVoucherController extends Controller
{
    public function validateVoucher(Request $request)
    {
        $auth=Auth::user();

        $customer=null;
        if(isset($auth))
        {
            $customer=Customer::where('user_id',$auth->id)->first();
        }

        $data=$request->all();

        if(!isset($data)||!isset($data['voucher'])) return response('Cupón no es válido',400);

        $current_date=date('Y-m-d H:i:s');

        $voucher=CustomerVoucher::where('deleted',0)->where('state',1)->where('code',$data['voucher'])->whereDate('start_date','<=',$current_date)->whereDate('expire_date','>=',$current_date)->first();

        if(!isset($voucher)) return response('Cupón no es válido',400);

        //validate maximum redemptions
        $redemptions=CustomerVoucherRedemption::where('customer_voucher_id',$voucher->id)->where('deleted',0)->get();

        if($voucher->redemption_limit>0 && count($redemptions)>=$voucher->redemption_limit)  return response('Cupón ya no se puede redimir',400);

        $is_redemption_bycustomer=false;
        foreach ($redemptions as $key => $redemption) {
            $invoice=CustomerInvoice::find($redemption->customer_invoice_id);
            if(isset($invoice) && !$is_redemption_bycustomer)
            {
                $is_redemption_bycustomer=!$invoice->deleted && (isset($customer)?$invoice->customer_id==$customer->id:false) && $invoice->state==2;
            }
        }

        if($is_redemption_bycustomer) return response('Cupón ya no se puede redimir',400);

        return $voucher;
    }
}
