<?php

use Illuminate\Database\Seeder;
use App\Subcategory;
class SubcategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Subcategories')->delete();
        $subcategory1 = [
            'Subcategory 1 - Category 1',
            'Subcategory 2 - Category 1',
            'Subcategory 3 - Category 1',
            'Subcategory 4 - Category 1',
            'Subcategory 5 - Category 1',
        ];
        $subcategory2 = [
            'Subcategory 1 - Category 2',
            'Subcategory 2 - Category 2',
            'Subcategory 3 - Category 2',
            'Subcategory 4 - Category 2',
            'Subcategory 5 - Category 2',
        ];
        foreach ($subcategory1 as $key => $value) {
            $Subcategory = new subcategory();
            $Subcategory->name_subcategory = $value;
            $Subcategory->id_category = 1;
            $Subcategory->save();
        }
        foreach ($subcategory2 as $key => $value) {
            $Subcategory = new subcategory();
            $Subcategory->name_subcategory = $value;
            $Subcategory->id_category = 2;
            $Subcategory->save();
        }
    }
}
