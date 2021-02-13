<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
class LectiveQuarterlyPlan extends Model
{
    protected $table = 'lective_quarterly_plan';

    protected $fillable = [
        'id_lective_planification', 'order', 'name','content','observation','state','deleted','updated_user'
    ];
}
