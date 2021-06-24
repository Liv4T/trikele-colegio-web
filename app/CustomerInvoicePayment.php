<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerInvoicePayment extends Model
{
    //
    protected $table = 'customer_invoice_payment';
    protected $fillable = ['customer_invoice_id','payment_date', 'reference_code', 'reference_payment_gatewey', 'response_code', 'response_description', 'transaction_code',
     'payment_method', 'payment_type_method', 'buyer_email', 'processing_date', 'currency_code', 'cus_code', 'pse_bank', 'operation_value', 'operation_tax', 'operation_aditional_value', 
     'admin_value', 'state', 'deleted', 'updated_user'];
}
