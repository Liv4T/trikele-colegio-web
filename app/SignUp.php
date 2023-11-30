<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SignUp extends Model
{
    //
    protected $table = 'sign_up';

    protected $fillable = [
        'name', 'email','phone','message'
    ];
}
