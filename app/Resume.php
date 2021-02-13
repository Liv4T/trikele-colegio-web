<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    protected $fillable = ['jobTitle','jobTitle1','jobTitle2','id_user', 'description', 'language', 'institutionB', 'institutionT', 'institutionP', 'institutionE', 'institutionM', 'institutionD', 'institutionO',  'dateB', 'dateT', 'dateP', 'dateE', 'dateM', 'dateD', 'dateO', 'countryB', 'countryT', 'countryP', 'countryE', 'countryM', 'countryD', 'countryO', 'company', 'company1', 'company2', 'time', 'time1', 'time2', 'other'];
}
