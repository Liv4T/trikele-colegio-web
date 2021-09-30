<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReportsParents extends Model
{
    protected $table = 'reports_parents';
    protected $guarded = ['id'];
    protected $fillable = [
        'dataStudent',
        'id_area',
        'id_classroom',
        'id_parent',
        'id_teacher'
    ];
}
