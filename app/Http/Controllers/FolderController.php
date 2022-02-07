<?php

namespace App\Http\Controllers;

use App\Models\Folder;
use Illuminate\Http\Request;


class FolderController extends Controller
{
    public function index()
    {
        $folders = Folder::all();
        return response()->json($folders);

    }

    public function store(Request $request)
    {
        $folder = Folder::create(['name'=> $request->post()]);
        return response()->json([
            'folder' => $folder
        ]);
    }

    public function show(Folder $folder)
    {
        $folderFound = Folder::find($folder->id);

        return response()->json($folderFound);
    }

    public function destroy(Folder $folder)
    {
        $folder->delete();
        return response()->json([
            'mensaje' => "Carpeta eliminada"
        ]);
    }
}
