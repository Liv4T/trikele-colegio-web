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
        'activity_type',
        'delivery_max_date',
        'description',
        'feedback_date',
        'id_activity',
        'id_achievement',
        'id_indicator',
        'interaction',
        'is_required',
        'module',
        'name',
        'rules',
        'state',
        'updated_user',
    ];

}
