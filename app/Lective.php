<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
class Lective extends Model
{
    protected $table = 'lective_collection';

    protected $fillable = [
        'name', 'content', 'id_institution','state','deleted'.'update_user'
    ];
}
