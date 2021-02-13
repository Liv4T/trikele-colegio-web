<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ActivityQuestionInteraction extends Model
{
    //
    protected $table = "activity_question_interaction";
    protected $fillable = ["id_activity_question", "id_student", "response", "score", "state","deleted","updated_user"];
}
