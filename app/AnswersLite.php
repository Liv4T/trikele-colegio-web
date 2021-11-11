<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AnswersLite extends Model
{
    protected $connection = 'sqlite';

    protected $table = 'answer_questions';
    
    protected $guarded = ['id'];

    protected $fillable = [
        'id_student',
        'id_activity_question',
        'answer'
    ];

}
