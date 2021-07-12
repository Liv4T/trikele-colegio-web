<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TutorScheduleResource extends Model
{
    //
    protected $table = 'tutor_schedule_resource';

    protected $fillable = [
        'serial', 'tutorschedulereservation_id','type','description','content','deleted'
    ];
}
