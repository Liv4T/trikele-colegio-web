<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\Importable;

class Book extends Model
{

    use Importable;

    protected $table = "books";
    protected $fillable = ['name', 'author', 'year'];
}
