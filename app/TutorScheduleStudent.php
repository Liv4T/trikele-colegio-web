<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TutorScheduleStudent extends Model
{
    //
    protected $table = 'tutor_schedule_student';

    protected $fillable = [
        'serial','tutorschedulereservation_id', 'student_id','customerinvoiceitem_id','state','deleted'
    ];
}
