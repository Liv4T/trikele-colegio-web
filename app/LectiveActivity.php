<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\user;
class LectiveActivity extends Model
{
    protected $table = 'lective_activity';

    protected $fillable = [
        'id_lective_class','id_lective_indicator','activity_type','name','description',
        'delivery_date','feedback_date','state','deleted','updated_user'
    ];
}