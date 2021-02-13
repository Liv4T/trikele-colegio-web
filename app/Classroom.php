<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Classroom extends Model
{
    //
    protected $table = 'classroom';

    protected $fillable = [
        'name', 'id_grade', 'id_institution',
    ];
}
