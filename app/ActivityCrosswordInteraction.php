<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ActivityCrosswordInteraction extends Model
{
    //
    protected $table = 'activity_crossword_interaction';
    protected $fillable = ['id_activity_crossword', 'id_student', 'response', 'score', 'state','deleted','updated_user'];
}
