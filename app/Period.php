<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Period extends Model
{
    //
    protected $table = 'period';

    protected $fillable = [
        'name', 'id_institution', 'date_from', 'date_to',
    ];
}
