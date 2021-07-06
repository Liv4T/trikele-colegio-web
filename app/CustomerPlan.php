<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerPlan extends Model
{
    //
    protected $table = 'customer_plan';
    protected $fillable = ['name','type', 'grade', 'credits_quantity', 'presentation_url', 'state', 'deleted', 'updated_user'];
}
