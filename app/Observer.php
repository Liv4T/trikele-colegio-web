<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Observer extends Model
{
    protected $table = "observers";

    protected $guarded = ['id'];

    protected $fillable = [
        'id_instructor',
        'id_student',
        'id_father',
        'id_mother',
        'father_profession',
        'mother_profession',
        'age_student',
        'observation',
    ];
}
