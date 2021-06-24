<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerInvoiceItem extends Model
{
    //
    protected $table = 'customer_invoice_item';
    protected $fillable = ['customer_invoice_id','customer_plan_id', 'customer_order_item_id', 'customer_plan_name', 'quantity', 'discount_value','unit_value', 'tax_percent', 'currency_code', 'tax_value', 'total_value', 'deleted', 'updated_user'];
}
