<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        DB::table('dogs')->insert([
            'image' => str_random(10) , 
            'breed'=> str_random(10), 
            'size'=> str_random(10),
            'haircolor'=> str_random(10),
        ]);

        DB::table('dogs')->insert([
            'image' => '' , 
            'breed'=> str_random(10), 
            'size'=> str_random(10),
            'haircolor'=> str_random(10),
        ]);
    }
}
