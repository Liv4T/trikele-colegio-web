<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class course_unit extends Model
{
    protected $fillable =['unit','name','type','id_course','presentation','hability','competences_e1','competences_e2',
    'competences_e3','competences_t1','competences_t2','competences_t3','result1',
    'result2','result3','result4','comper11','comper12','comper13','comper21','comper22',
    'comper23','comper31','comper32','comper33','comper41','comper42','comper43',
    'question','ready','content','master','video','bibliography','doing','challenge','projecting','topic','nameM','nameV'];
    
}
