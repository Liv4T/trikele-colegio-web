<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ActivityCompleteSentence extends Model
{
    //
    protected $table = 'activity_complete_sentence';
    protected $fillable = ['id_activity', 'content','state','deleted','updated_user'];
}
