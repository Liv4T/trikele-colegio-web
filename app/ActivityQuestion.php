<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ActivityQuestion extends Model
{
    //
    protected $table = "activity_question";
    protected $fillable = ["id_activity", "question", "type_question", "content", "correct_answer","justify","state",'deleted','updated_user'];
}
