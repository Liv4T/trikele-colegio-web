<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Extracurricular extends Model
{
    //
    protected $table =  'extracurricular';
    protected $fillable = ['id', 'name'];
}
