<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerInvoice extends Model
{
    //
    protected $table = 'customer_invoice';
    protected $fillable = ['prefix_code','consecutive', 'customer_id', 'sale_date',  'channel_sale', 'customer_voucher_id','customer_voucher_value','total','state', 'deleted', 'updated_user'];
}
