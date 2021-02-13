<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ActivityCompleteSentenceInteraction extends Model
{
    //
    protected $table = 'activity_complete_sentence_interaction';
    protected $fillable = ['id_activity_complete_sentence', 'id_student', 'response', 'score', 'state','deleted','updated_user'];
}
