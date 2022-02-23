<?php

namespace App\Imports;

use App\ClassroomStudent;
use App\Classroom;
use App\User;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class studensClassroomImport implements ToModel, WithHeadingRow
{
    private $user;
    private $classroom;
    use Importable;

    public function __construct(){
        $this->user = User::pluck('id','user_name');
        $this->classroom = Classroom::pluck('id','name');
    }
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        return new ClassroomStudent([
            'id_user' => $this->user[$row['user_name']],
            'id_classroom'  => $this->classroom[$row['classroom']],

        ]);
    }
}
