<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ActivityRelationshipInteraction extends Model
{
    //
    protected $table = 'activity_relationship_interaction';
    protected $fillable = ['id_activity_relationship', 'id_student', 'response', 'score', 'state','deleted','updated_user'];
}
