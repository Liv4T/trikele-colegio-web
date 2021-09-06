<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Messaging extends Model
{
    //
    protected $table = 'messaging';

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'id_emisor', 'subject', 'message',
    ];

}
