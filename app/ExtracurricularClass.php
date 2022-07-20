<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ExtracurricularClass extends Model
{
    //

    protected $table =  'extracurricular_class';
    protected $fillable = ['id', 'description', 'name', 'id_category'];
}
