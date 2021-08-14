<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bimestre extends Model
{
    protected $table = "bimestres";
    protected $guarded = ['id'];
    protected $fillable = ['name','status'];
}
