<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClassContent extends Model
{
    protected $table =  'class_content';
    protected $fillable = ['id_class', 'order', 'content_type', 'content', 'description', 'observation', 'is_required', 'state', 'deleted', 'updated_user'];
}
