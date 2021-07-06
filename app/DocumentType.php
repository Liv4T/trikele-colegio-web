<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DocumentType extends Model
{
    //
    protected $table = "document_type";
    protected $fillable = ["shortname", "name", "state", "deleted", "updated_user"];
}
