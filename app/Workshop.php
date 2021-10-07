<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Workshop extends Model
{
    protected $table = 'workshops';
    protected $guarded = ['id'];
    protected $fillable = ['id_class','id_activity','id_bimestre','id_area','id_classroom','status'];
}
