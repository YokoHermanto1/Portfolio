<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Projects extends Model
{
    // Mengizinkan semua kolom diisi secara massal saat input data
    protected $guarded = [];

    // Cast kolom 'tech' dari JSON di DB menjadi Array di PHP secara otomatis
    protected $casts = [
        'tech' => 'array',
    ];
}
