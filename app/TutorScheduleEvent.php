<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TutorScheduleEvent extends Model
{
    //
    protected $table = 'tutor_schedule_event';

    protected $fillable = [
        'name', 'id_classroom', 'id_schedulestudent','id_area', 'date_to', 'date_from', 'id_user', 'url','state','deleted'
    ];
}
