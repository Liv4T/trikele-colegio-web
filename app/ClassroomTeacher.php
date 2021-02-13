<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClassroomTeacher extends Model
{
    //
    protected $table = 'classroom_teacher';

    protected $fillable = [
        'id_classroom', 'id_user', 'id_area',
    ];
}
