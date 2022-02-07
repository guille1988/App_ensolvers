<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        $tasks =Task::all();
        return response()->json($tasks);
    }

    public function store(Request $request)
    {
        $task = Task::create(['name'=> $request->post()]);
        return response()->json([
            'task' => $task
        ]);
    }

    public function update(Request $request, Task $task)
    {
        $task->fill($request->post())->save();
        return response()->json([
            'task' => $task
        ]);
    }
}
