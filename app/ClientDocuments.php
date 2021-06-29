<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClientDocuments extends Model
{
    protected $table =  'client_documents';

    protected $fillable = ['id_user', 'idcard_parent', 'idcard_son,', 'form', 'last_certificate', 'eps', 'medical_certificate', 'labor_parent', 'labor_son', 'paz_salvo', 'video'];
}
