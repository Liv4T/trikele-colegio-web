<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerVoucher extends Model
{
    //
    protected $table = 'customer_voucher';
    protected $fillable = ['code','discount_percent', 'discount_value', 'redemption_limit', 'start_date', 'expire_date', 'state', 'deleted', 'updated_user'];
}
