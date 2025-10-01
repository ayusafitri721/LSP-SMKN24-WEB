<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TestAssessmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * 
     * This seeder creates minimal test data for development/testing purposes
     * when no real assessment data is available.
     */
    public function run()
    {
        $now = Carbon::now();
        
        // Create test schema
        $schemaId = DB::table('skemas')->insertGetId([
            'nama_skema' => 'Test Skema Sertifikasi',
            'kode_skema' => 'TST.001',
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        // Create test unit
        $unitId = DB::table('unit_kompetensis')->insertGetId([
            'skema_id' => $schemaId,
            'judul_unit' => 'Test Unit Kompetensi 1',
            'kode_unit' => 'TIK.PR02.001.01',
            'unit_ke' => 1,
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        // Create test elements
        $element1Id = DB::table('elemens')->insertGetId([
            'unit_kompetensi_id' => $unitId,
            'nama_elemen' => 'Test Elemen 1',
            'elemen_index' => 1,
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        $element2Id = DB::table('elemens')->insertGetId([
            'unit_kompetensi_id' => $unitId,
            'nama_elemen' => 'Test Elemen 2',
            'elemen_index' => 2,
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        // Create test KUKs
        DB::table('kuks')->insert([
            [
                'elemen_id' => $element1Id,
                'deskripsi_kuk' => 'Test KUK 1.1',
                'urutan' => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'elemen_id' => $element1Id,
                'deskripsi_kuk' => 'Test KUK 1.2',
                'urutan' => 2,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'elemen_id' => $element2Id,
                'deskripsi_kuk' => 'Test KUK 2.1',
                'urutan' => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'elemen_id' => $element2Id,
                'deskripsi_kuk' => 'Test KUK 2.2',
                'urutan' => 2,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);

        // Create test assessor (assuming users table exists)
        $assessorId = DB::table('users')->insertGetId([
            'name' => 'Test Asesor',
            'email' => 'test.asesor@example.com',
            'password' => bcrypt('password'),
            'role' => 'asesor',
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        // Create test asesi (assuming users table exists)
        $asesiId = DB::table('users')->insertGetId([
            'name' => 'Test Asesi',
            'email' => 'test.asesi@example.com',
            'password' => bcrypt('password'),
            'role' => 'asesi',
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        // Create test TUK
        $tukId = DB::table('tuks')->insertGetId([
            'nama' => 'SMK Negeri 24 Jakarta - Test Lab',
            'alamat' => 'Jl. Test No. 1, Jakarta',
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        // Create test assessment
        $assessmentId = DB::table('assesments')->insertGetId([
            'skema_id' => $schemaId,
            'assesor_id' => $assessorId,
            'tuk_id' => $tukId,
            'nama_skema' => 'Test Skema Sertifikasi',
            'tanggal_mulai' => $now->format('Y-m-d'),
            'tanggal_selesai' => $now->addDays(7)->format('Y-m-d'),
            'waktu_mulai' => '08:00:00',
            'status' => 'active',
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        // Create test assessment_asesi relationship
        DB::table('assesment_asesis')->insert([
            'assesment_id' => $assessmentId,
            'asesi_id' => $asesiId,
            'status' => 'mengerjakan',
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        // Create test bukti dokumen
        DB::table('bukti_dokumens')->insert([
            'asesi_id' => $asesiId,
            'description' => 'Test Bukti Dokumen 1',
            'file_path' => '/test/path/dokumen1.pdf',
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        $this->command->info('Test assessment data seeded successfully!');
        $this->command->info("Schema ID: {$schemaId}");
        $this->command->info("Assessment ID: {$assessmentId}");
        $this->command->info("Asesi ID: {$asesiId}");
        $this->command->info("Asesor ID: {$assessorId}");
    }
}
