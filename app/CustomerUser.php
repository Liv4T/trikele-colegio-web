<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerUser extends Model
{
    //
    protected $table = 'customer_user';
    protected $fillable = ['customer_id','user_id', 'deleted', 'updated_user'];
}
