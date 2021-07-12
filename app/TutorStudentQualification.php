<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class tutorStudentQualification extends Model
{
    //
    protected $table = 'tutor_student_qualification';

    protected $fillable = [
        'tutorschedulereservation_id', 'student_id','score', 'teacher_id', 'question_one_rad', 'question_one_why', 'question_two_rad', 'question_two_why', 'question_three_rad', 'question_three_why'
    ];
}
