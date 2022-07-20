<?php

namespace App\Imports;

use App\ClassroomTeacher;
use App\Area;
use App\Classroom;
use App\User;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class teachersClassroomImport implements ToModel, WithHeadingRow
{
    private $area;
    private $classroom;
    private $user;
    use Importable;
    

    public function __construct(){
        $this->area = Area::pluck('id','name');
        $this->classroom = Classroom::pluck('id','name');
        $this->user = User::pluck('id','user_name');
    }
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        if($row['user_name'] && $row['area'] && $row['classroom']){
            return new ClassroomTeacher([            
                'id_user' => $this->user[$row['user_name']],
                'id_area'  => $this->area[$row['area']],
                'id_classroom'  => $this->classroom[$row['classroom']],
    
            ]);
        }
    }
}
