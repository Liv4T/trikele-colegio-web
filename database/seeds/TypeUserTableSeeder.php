<?php

use Illuminate\Database\Seeder;
use App\TypeUser;

class TypeUserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(TypeUser::class,35)->create();
    }
}
