<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
class LectiveIndicator extends Model
{
    protected $table = 'lective_indicator';

    protected $fillable = [
        'id_lective_achievement','type_activity','rate','state','deleted','updated_user'
    ];
}