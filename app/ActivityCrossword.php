<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ActivityCrossword extends Model
{
    //
    protected $table = 'activity_crossword';
    protected $fillable = ['id_activity', 'content','state','deleted','updated_user'];
}
