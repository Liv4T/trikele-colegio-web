<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RepositoryComments extends Model
{
    //
    protected $table = 'repository_comments';

    protected $fillable = [
        'id_student', 'id_repository', 'comment', 'file', 'audio',

    ];
}
