<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ActivityRelationship extends Model
{
    //
    protected $table = 'activity_relationship';
    protected $fillable = ['id_activity', 'content','state','deleted','updated_user'];
}
