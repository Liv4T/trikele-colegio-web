<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FilesWorkshop extends Model
{
    protected $table = 'files_workshops';
    protected $guarded = ['id'];
    protected $fillable = [
        'id_activity',
        'id_workshop',
        'name',
        'url',
    ];
}
