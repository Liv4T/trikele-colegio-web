<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ConfigurationParameter extends Model
{
    protected $table =  'configuration_parameters';
    protected $fillable = ['code', 'content', 'deleted'];
}
