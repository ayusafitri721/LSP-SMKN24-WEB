<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Seeder for existing asesi: asesi.rpl1@student.smkn24.ac.id
        $this->call(ExistingAsesiAssessmentSeeder::class);
        
        // Uncomment the line below to run the generic test assessment seeder
        // $this->call(TestAssessmentSeeder::class);
    }
}
