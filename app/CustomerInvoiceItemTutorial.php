<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerInvoiceItemTutorial extends Model
{
    //
    protected $table = 'customer_invoice_item_tutorial';
    protected $fillable = ['customerinvoiceitem_id','tutorschedulereservation_id', 'state', 'deleted'];
}
