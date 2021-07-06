<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerVoucherPlan extends Model
{
    //
    protected $table = 'customer_voucher_plan';
    protected $fillable = ['customer_voucher_id','customer_plan_id', 'updated_user'];
}
