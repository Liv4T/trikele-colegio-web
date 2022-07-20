<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AssignNote extends Model
{
    protected $guarded = ['id'];
    protected $fillable = [
        'id',
        'id_bimestre',
        'id_student',
        'id_teacher',
        'id_area',
        'class',
        'student_name',
        'note',
        'asignNote',
    ];
}
