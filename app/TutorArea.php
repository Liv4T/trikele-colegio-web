<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TutorArea extends Model
{
    //
    protected $table = 'tutor_area';

    protected $fillable = [
        'id_teacher', 'id_area', 'area_type','state', 'deleted',
    ];
}
