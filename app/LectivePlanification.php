<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
class LectivePlanification extends Model
{
    protected $table = 'lective_planification';

    protected $fillable = [
        'id_lective', 'id_teacher', 'period_consecutive','start_date','end_date','state','deleted','updated_user'
    ];
}
