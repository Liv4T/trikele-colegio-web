<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerPlanPrice extends Model
{
    //
    protected $table = 'customer_plan_price';
    protected $fillable = ['customer_plan_id','currency_code', 'value', 'discount_value', 'taxt_percent', 'initial_date', 'expire_data','state', 'deleted', 'updated_user'];
}
