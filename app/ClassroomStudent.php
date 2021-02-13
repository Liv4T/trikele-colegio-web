<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClassroomStudent extends Model
{
    //
    protected $table = 'classroom_student';

    protected $fillable = [
        'id_classroom', 'id_user',
    ];
}
