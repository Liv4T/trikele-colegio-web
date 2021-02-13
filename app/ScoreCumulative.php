<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ScoreCumulative extends Model
{
    //
    protected $table = 'score_cumulative';

    protected $fillable = [
        'id_area', 'id_user', 'score',

    ];
}
