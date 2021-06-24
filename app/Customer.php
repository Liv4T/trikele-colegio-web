<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    //
    protected $table = 'customer';
    protected $fillable = ['user_id','type', 'state', 'deleted', 'updated_user'];
}
