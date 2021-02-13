<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RepositoryStudents extends Model
{
    //
    protected $table = 'repository_students';

    protected $fillable = [
        'id_student', 'id_repository', 'name', 'status', 'file',

    ];
}
