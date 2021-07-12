<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WeeklyPlanUser extends Model
{
    //
    protected $table = 'weekly_plan_user';
    protected $fillable = ['user_id','weekly_plan_id', 'total_credits', 'initial_date', 'expire_date', 'state', 'deleted', 'updated_user'];
}
