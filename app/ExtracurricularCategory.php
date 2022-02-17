<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ExtracurricularCategory extends Model
{
    //
    protected $table =  'extracurricular_category';
    protected $fillable = ['id', 'name', 'id_extra'];
}
