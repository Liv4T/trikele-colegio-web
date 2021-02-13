<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Repository extends Model
{
    //
    protected $table = 'repository';

    protected $fillable = [
        'id_area', 'id_classroom', 'id_teacher', 'name', 'description', 'date', 'file',

    ];
}
