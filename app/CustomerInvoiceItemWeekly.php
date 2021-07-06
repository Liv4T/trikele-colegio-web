<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerInvoiceItemWeekly extends Model
{
    //
    protected $table = 'customer_invoice_item_weekly';
    protected $fillable = ['customer_invoice_item_id','weekly_id', 'state', 'deleted', 'updated_user'];
}
