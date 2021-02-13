<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Weekly extends Model
{
    //
    protected $table = "weekly_plan";
    protected $fillable = ["driving_question", "class_development", "observation", "week", "id_teacher", "id_area", "id_classroom"];
}
