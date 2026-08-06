<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('category');
            $table->string('title');
            $table->string('year');
            $table->text('description');
            $table->string('role');
            $table->json('tech'); // Menyimpan array tech stack (Vue.js, PostgreSQL, dll) dalam bentuk JSON
            $table->string('image')->nullable(); // URL gambar project, boleh dikosongkan dulu
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
