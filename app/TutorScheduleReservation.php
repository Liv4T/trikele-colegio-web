<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TutorScheduleReservation extends Model
{
    //
    protected $table = 'tutor_schedule_reservation';

    protected $fillable = [
        'serial', 'tutorschedulearea_id','customer_id','time_index','date_from','date_to','type_schedule','observations','number_students','meet','state','deleted'
    ];
}
