<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TutorScheduleArea extends Model
{
    //
    protected $table = 'tutor_schedule_area';

    protected $fillable = [
        'id_tutorarea', 'id_tutorschedule','deleted'
    ];
}
