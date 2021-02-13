<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
class LectiveWeeklyPlan extends Model
{
    protected $table = 'lective_weekly_plan';

    protected $fillable = [
        'id_lective_planification', 'order', 'name','content','observation','state','deleted','updated_user'
    ];
}
