<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Courses extends Model
{
    //
    protected $table = "annual_planification";
    protected $fillable = ["id_teacher", "id_area", "id_classroom"];
}
