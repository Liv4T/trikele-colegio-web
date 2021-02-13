<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ScoreAnual extends Model
{
    //
    protected $table = 'score_annual';

    protected $fillable = [
        'id_score', 'id_annual', 'id_user', 'score',

    ];
}
