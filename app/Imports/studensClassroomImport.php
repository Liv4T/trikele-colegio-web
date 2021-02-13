<?php

namespace App\Imports;

use App\ClassroomStudent;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class studensClassroomImport implements ToModel, WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        return new ClassroomStudent([
            'id_user' => $row['student'],
            'id_classroom'  => $row['classroom'],

        ]);
    }
}
