<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClassSubject extends Model
{
    //
    protected $table = 'class_subject';

    protected $fillable = [
        'id_weekly', 'id_class', 'subject', 'achievement', 'keywords',
    ];
}
