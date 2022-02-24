<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Dogs::class, function (Faker\Generator $faker) {
    

    return [
        'image' => $faker->image,
        'breed' => $faker->breed,
        'size' => $faker->size,
        'haircolor' => $faker->haircolor,
        'remember_token' => str_random(10),
    ];
});
