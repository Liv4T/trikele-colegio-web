<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerInvoiceItemArea extends Model
{
    //
    protected $table = 'customer_invoice_item_area';
    protected $fillable = ['customer_invoice_item_id','area_id', 'state', 'deleted', 'updated_user'];
}
