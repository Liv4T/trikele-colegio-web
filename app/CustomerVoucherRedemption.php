<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerVoucherRedemption extends Model
{
    //
    protected $table = 'customer_voucher_redemption';
    protected $fillable = ['customer_voucher_id','customer_invoice_id', 'deleted', 'updated_user'];
}
