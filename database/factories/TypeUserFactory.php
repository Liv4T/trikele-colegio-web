<?php

use Faker\Generator as Faker;

$factory->define(App\TypeUser::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
    ];
});
