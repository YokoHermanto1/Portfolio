<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Projects;
use Illuminate\Http\JsonResponse;

class ProjectController extends Controller
{
    public function index(): JsonResponse
    {
        // Mengambil semua data dari database Neon
        $projects = Projects::orderBy ('id','asc') -> get();

        // Mengembalikan data dalam bentuk JSON
        return response()->json($projects);
    }
}
