<?php

namespace Database\Factories;

use App\Models\Task;
use App\Models\User;
use App\Models\Folder;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->sentence(),
            'user_id' => User::factory(),
            'folder_id' => Folder::factory(),
        ];
    }
}
