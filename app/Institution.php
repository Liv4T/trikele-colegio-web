<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Institution extends Model
{
    //
    protected $table = 'institution';

    protected $fillable = [
        'id_user', 'name', 'state', 'city', 'address', 'streaming', 'year',
    ];
}
