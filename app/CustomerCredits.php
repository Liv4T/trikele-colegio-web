<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerCredits extends Model
{
    //
    protected $table = 'customer_credits';
    protected $fillable = ['customer_invoice_item_id','customer_id', 'credits_quantity', 'credits_available', 'expire_date', 'state', 'deleted', 'updated_user'];
}
