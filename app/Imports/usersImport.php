<?php

namespace App\Imports;

use App\User;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Facades\Hash;

class usersImport implements ToModel, WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        return new User([
            'name' => $row['name'],
            'last_name' => $row['last_name'],
            'password' => Hash::make($row['password']),
            'user_name' => $row['user_name'],
            'email' => $row['email'],
            'type_user' => $row['type_user'],
            'address' => $row['address'],
            'picture' => $row['picture'],
            'phone' => $row['phone'],
            'id_number' => $row['id_number'],

        ]);
    }
}
