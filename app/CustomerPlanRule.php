<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerPlanRule extends Model
{
    //
    protected $table = 'customer_plan_rule';
    protected $fillable = ['customer_plan_id','feature', 'value', 'deleted', 'updated_user'];
}
