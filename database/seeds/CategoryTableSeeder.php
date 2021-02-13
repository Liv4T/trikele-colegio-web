<?php

use Illuminate\Database\Seeder;
use App\Category;
class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->delete();
        $DataCategories = ['Category 1','Category 2'];
        foreach ($DataCategories as $key => $value) {
            $Categories = new category();
            $Categories->name_category = $value;
            $Categories->save();
    }
    }
}
