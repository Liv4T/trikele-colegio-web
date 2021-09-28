<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VerifyRegistration extends Model
{
    protected $table = "verify_registrations";

    protected $guarded = ['id'];

    protected $fillable = [
        'id_student',
        'status',
        'deleted',
    ];
}
