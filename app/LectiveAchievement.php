<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
class LectiveAchievement extends Model
{
    protected $table = 'lective_achievement';

    protected $fillable = [
        'id_lective_planification', 'content', 'rate','observation','state','deleted','updated_user'
    ];
}
