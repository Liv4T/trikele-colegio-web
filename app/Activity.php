<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    //
    protected $table = 'activity';
    protected $fillable = ['id_class', 'id_achievement', 'id_indicator','activity_type', 'name', 'description', 'delivery_max_date','feedback_date', 'rules','is_required','state','deleted','updated_user'];
}
