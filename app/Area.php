<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    //
    protected $table = 'area';

    protected $fillable = [
        'name', 'id_grade', 'id_institution',
    ];
}
