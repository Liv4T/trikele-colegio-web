<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
class LectiveClass extends Model
{
    protected $table = 'lective_class';

    protected $fillable = [
        'id_lective_weekly_plan', 'name','description','hourly_intensity','state','deleted','updated_user'
    ];
}
