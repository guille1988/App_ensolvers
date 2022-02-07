<?php

namespace Database\Seeders;

use App\Models\Folder;
use App\Models\Task;
use App\Models\User;
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
        User::factory(20)->create();
        Folder::factory(20)->create();
        Task::factory(20)->create();
    }
}
