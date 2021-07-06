<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerInvoiceResolution extends Model
{
    //
    protected $table = 'customer_invoice_resolution';
    protected $fillable = ['resolution_code','prefix_code', 'current_consecutive', 'initial_consecutive', 'end_consecutive', 'initial_date', 'expire_date','state', 'deleted', 'updated_user'];
}
