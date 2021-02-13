<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Indicator extends Model
{
    //
    protected $table = 'indicator';

    protected $fillable = [
        'id_annual', 'id_achievement', 'type_activity', 'activity_rate',

    ];
}
