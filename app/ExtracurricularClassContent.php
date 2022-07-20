<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ExtracurricularClassContent extends Model
{
    //

    protected $table =  'extracurricular_class_content';
    protected $fillable = ['id', 'url', 'id_class'];
}
