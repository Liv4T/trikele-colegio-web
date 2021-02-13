<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClassInteraction extends Model
{
    protected $table =  'class_interaction';
    protected $fillable = [ 'id_class', 'id_student', 'activity_complete', 'class_content_complete', 'activity_required_complete', 'class_content_required_complete', 'score', 'deleted', 'updated_user'];
}
