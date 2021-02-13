<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(TaskTableSeeder::class);
        $this->call(CategoryTableSeeder::class);
        $this->call(SubcategoryTableSeeder::class);
        $this->call(UserTableSeeder::class);
        $this->call(TypeUserTableSeeder::class);
        $this->call(ResumeTableSeeder::class);
        $this->call(ClassTableSeeder::class);
    }
}
