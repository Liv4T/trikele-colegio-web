<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ActivityInteraction extends Model
{
    //
    protected $table = "activity_interaction";
    protected $fillable = ["id_activity", "id_student", "latest_access_date", "is_qualified", "score","qualified_date","state",'deleted','updated_user'];
}
