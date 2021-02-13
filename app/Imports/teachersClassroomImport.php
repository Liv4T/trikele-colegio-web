<?php

namespace App\Imports;

use App\ClassroomTeacher;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class teachersClassroomImport implements ToModel, WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        return new ClassroomTeacher([
            'id_user' => $row['teacher'],
            'id_area'  => $row['area'],
            'id_classroom'  => $row['classroom'],

        ]);
    }
}
