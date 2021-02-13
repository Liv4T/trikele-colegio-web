<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClassContentInteraction extends Model
{
    protected $table =  'class_content_interaction';
    protected $fillable = ['id_class_content', 'id_student', 'deleted', 'updated_user'];
}
