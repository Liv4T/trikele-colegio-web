<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trivia extends Model
{
    //
    protected $table = "trivia";
    protected $fillable = ["answer_1", "answer_2", "answer_3", "correct_answer", "question", "id_activity"];
}
