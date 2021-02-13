<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Messaging extends Model
{
    //
    protected $table = 'messaging';

    protected $fillable = [
        'id_emisor', 'subject', 'message',
    ];

}
