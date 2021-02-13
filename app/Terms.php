<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Terms extends Model
{
    //
    protected $table = 'user_terms';

    protected $fillable = [
        'id_user', 'status',

    ];
}
