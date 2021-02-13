<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ScoreActivity extends Model
{
    //
    protected $table = 'score_activity';

    protected $fillable = [
        'id_indicator', 'id_user', 'score',

    ];
}
