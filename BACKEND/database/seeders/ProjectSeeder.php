<?php

namespace Database\Seeders;

use App\Models\Projects; // Import model Projects kamu
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       Projects::create([
            'category' => 'Thesis',
            'title' => 'UlasKatering',
            'year' => '2025',
            'description' => 'A web platform to help users find and review UMKM catering services with a Human Centered Design approach. Built from research to deployment with full-stack technologies.',
            'role' => 'Research · UI/UX Design · Full-Stack Development · Product Thinking',
            'tech' => ['Vue.js', 'CodeIgniter 4', 'PostgreSQL', 'Docker', 'Figma'], // Otomatis jadi JSON di Neon
            'image' => '/project_images/ulaskatering.png', // Sementara kosongkan dulu atau isi URL gambar jika ada
            'link_url' => 'https://app.notion.com/p/yokohermanto/UlasKatering-343a399a25718010be75eda14a3b599c?source=copy_link'
        ]);

        Projects::create([
            'title' => 'GoCater',
            'category' => 'Binus Entrepreneurship Program',
            'year' => '2024-2025',
            'description' => 'A digital platform connecting customers with local catering businesses by simplifying the search and ordering experience while supporting SMEs in expanding their online presence.',
            'role' => 'Research · UI/UX Design · Product Development · Product Thinking',
            'tech' => ['Java', 'Android Studio', 'Firebase', 'Figma'],
            'image' => '/project_images/GoCater.png',
            'link_url' => 'https://app.notion.com/p/yokohermanto/GoCater-350a399a257180bda9b3e6ed31012c26?source=copy_link', // 🚀 Sudah terisi seed data
        ]);

        Projects::create([
            'title' => 'WorkFitAI',
            'category' => 'Project Based Learning',
            'year' => '-',
            'description' => 'Designed a mobile application that helps users achieve their fitness goals through AI-powered personalized workout recommendations and an intuitive user experience.',
            'role' => 'UI/UX Design',
            'tech' => ['Figma'],
            'image' => '/project_images/WorkFitAI.png',
            'link_url' => 'https://app.notion.com/p/yokohermanto/WorkFitAI-33aa399a257180f284a6c8b9fd534c46?source=copy_link', // 🚀 Sudah terisi seed data
        ]);
    }
}
