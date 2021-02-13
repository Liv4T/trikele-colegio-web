<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
class LectiveStudent extends Model
{
    protected $table = 'lective_classroom_student';

    protected $fillable = [
        'id_lective_planification', 'id_student', 'state','deleted','updated_user'
    ];
}
