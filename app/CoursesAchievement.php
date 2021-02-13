<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CoursesAchievement extends Model
{
    //
    protected $table = "achievement_planification";
    protected $fillable = ["id_planification", "achievement", "percentage"];
}
