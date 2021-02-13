<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReceptorMessage extends Model
{
    //
    protected $table = 'user_message';

    protected $fillable = [
        'id_message', 'id_user', 'status'
    ];
}
