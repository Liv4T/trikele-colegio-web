<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ExtracurricularTeacher extends Model
{
    //
    protected $table =  'extracurricular_teacher';
    protected $fillable = ['id', 'id_user', 'id_category'];
}
