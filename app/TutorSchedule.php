<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TutorSchedule extends Model
{
    //
    protected $table = 'tutor_schedule';

    protected $fillable = [
        'days', 'date_from', 'date_to','teacher_id','duration_minutes','individual_rate','grupal_rate','state','deleted'
    ];
}
