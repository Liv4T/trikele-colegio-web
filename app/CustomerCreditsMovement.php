<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerCreditsMovement extends Model
{
    //
    protected $table = 'customer_credits_movement';
    protected $fillable = ['weekly_plan_user_id','customer_credits_id', 'credits_quantity', 'initial_date', 'expire_date', 'state', 'deleted', 'updated_user'];
}
