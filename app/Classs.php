<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Classs extends Model
{
    protected $table =  'class';
    protected $fillable = ['description', 'name', 'name_document', 'document', 'document1', 'document2', 'url', 'url1', 'url2', 'video', 'video1', 'video2', 'id_weekly_plan', 'hourly_intensity','activity_quantity','content_quantity','state','updated_user','deleted','work','transversals'];
}
