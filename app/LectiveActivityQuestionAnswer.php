<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\user;
class LectiveActivityQuestionAnswer extends Model
{
    protected $table = 'lective_activity_question_answer';

    protected $fillable = [
        'id_lective_activity_question','id_student','response','is_correct','state','deleted','updated_user'
    ];
}