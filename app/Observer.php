<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Observer extends Model
{
    protected $table = "observers";
    protected $guarded = ['id'];
    protected $fillable = [
        'name_student',
        'id_student',
        'age',
        'date_birth',
        'size',
        'weight',
        'identification',
        'father_name',
        'office_father',
        'mother_name',
        'office_mother',
        'user_creator',
        'address',
        'phone',
        'repitent',
        'observation'
    ];

    public function user(){
        return $this->hasOne(User::class);
    }
}
