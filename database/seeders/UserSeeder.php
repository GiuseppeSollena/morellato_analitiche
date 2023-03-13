<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'backoffice',
            'email' => 'backoffice@backoffice.it',
            'password' => '$2y$10$XykPfQxpbr6qOi0Cv9jfK.Z7xOgs2sNOrwAkYCMRY0ehBuk79duK2',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'role_id' => 1,
        ]);
    }
}
