<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ExistingAsesiAssessmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * 
     * This seeder creates assessment data for existing asesi: asesi.rpl1@student.smkn24.ac.id
     */
    public function run()
    {
        $now = Carbon::now();
        
        // Find existing asesi
        $existingAsesi = DB::table('users')->where('email', 'asesi.rpl1@student.smkn24.ac.id')->first();
        
        if (!$existingAsesi) {
            $this->command->error('Asesi with email asesi.rpl1@student.smkn24.ac.id not found!');
            return;
        }

        $this->command->info("Found existing asesi: {$existingAsesi->name} (ID: {$existingAsesi->id})");

        // Check if asesi already has active assessments
        $existingAssessments = DB::table('assesment_asesis')
            ->where('asesi_id', $existingAsesi->id)
            ->get();

        if ($existingAssessments->count() > 0) {
            $this->command->info("Asesi already has {$existingAssessments->count()} assessment(s). Updating existing assessments...");
            
            // Update existing assessments to 'mengerjakan' status
            foreach ($existingAssessments as $assessment) {
                DB::table('assesment_asesis')
                    ->where('id', $assessment->id)
                    ->update([
                        'status' => 'mengerjakan',
                        'updated_at' => $now
                    ]);
                
                $this->command->info("Updated assessment_asesi ID {$assessment->id} to 'mengerjakan' status");
            }
            
            // Get the first assessment for further processing
            $firstAssessment = $existingAssessments->first();
            $assessmentDetail = DB::table('assesments')->where('id', $firstAssessment->assesment_id)->first();
            
            if ($assessmentDetail) {
                $this->command->info("Using existing assessment: {$assessmentDetail->nama_skema} (ID: {$assessmentDetail->id})");
                
                // Create bukti dokumen if not exists
                $existingBukti = DB::table('bukti_dokumens')->where('asesi_id', $existingAsesi->id)->first();
                if (!$existingBukti) {
                    DB::table('bukti_dokumens')->insert([
                        'asesi_id' => $existingAsesi->id,
                        'description' => 'Dokumen Portofolio RPL',
                        'file_path' => '/uploads/bukti/portofolio_rpl.pdf',
                        'created_at' => $now,
                        'updated_at' => $now,
                    ]);
                    $this->command->info("Created bukti dokumen for asesi");
                }
                
                $this->command->info("Setup completed for existing asesi!");
                return;
            }
        }

        // If no existing assessments, create new ones
        $this->command->info("No existing assessments found. Creating new assessment setup...");

        // Create or find test schema
        $schema = DB::table('skemas')->where('kode_skema', 'RPL.001')->first();
        if (!$schema) {
            $schemaId = DB::table('skemas')->insertGetId([
                'nama_skema' => 'Rekayasa Perangkat Lunak',
                'kode_skema' => 'RPL.001',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
            $this->command->info("Created new schema: RPL.001 (ID: {$schemaId})");
        } else {
            $schemaId = $schema->id;
            $this->command->info("Using existing schema: {$schema->nama_skema} (ID: {$schemaId})");
        }

        // Create or find test unit
        $unit = DB::table('unit_kompetensis')->where('kode_unit', 'TIK.PR02.001.01')->first();
        if (!$unit) {
            $unitId = DB::table('unit_kompetensis')->insertGetId([
                'skema_id' => $schemaId,
                'judul_unit' => 'Menganalisis Kebutuhan Perangkat Lunak',
                'kode_unit' => 'TIK.PR02.001.01',
                'unit_ke' => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
            $this->command->info("Created new unit: TIK.PR02.001.01 (ID: {$unitId})");

            // Create elements for the new unit
            $element1Id = DB::table('elemens')->insertGetId([
                'unit_kompetensi_id' => $unitId,
                'nama_elemen' => 'Mengidentifikasi kebutuhan sistem',
                'elemen_index' => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            $element2Id = DB::table('elemens')->insertGetId([
                'unit_kompetensi_id' => $unitId,
                'nama_elemen' => 'Menganalisis kebutuhan fungsional',
                'elemen_index' => 2,
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            // Create KUKs
            DB::table('kuks')->insert([
                [
                    'elemen_id' => $element1Id,
                    'deskripsi_kuk' => 'Kebutuhan sistem diidentifikasi sesuai dengan spesifikasi',
                    'urutan' => 1,
                    'created_at' => $now,
                    'updated_at' => $now,
                ],
                [
                    'elemen_id' => $element1Id,
                    'deskripsi_kuk' => 'Dokumentasi kebutuhan dibuat dengan lengkap',
                    'urutan' => 2,
                    'created_at' => $now,
                    'updated_at' => $now,
                ],
                [
                    'elemen_id' => $element2Id,
                    'deskripsi_kuk' => 'Kebutuhan fungsional dianalisis dengan tepat',
                    'urutan' => 1,
                    'created_at' => $now,
                    'updated_at' => $now,
                ],
                [
                    'elemen_id' => $element2Id,
                    'deskripsi_kuk' => 'Use case diagram dibuat sesuai kebutuhan',
                    'urutan' => 2,
                    'created_at' => $now,
                    'updated_at' => $now,
                ],
            ]);
        } else {
            $unitId = $unit->id;
            $this->command->info("Using existing unit: {$unit->judul_unit} (ID: {$unitId})");
        }

        // Find or create assessor
        $assessor = DB::table('users')->where('email', 'asesor.rpl@smkn24.ac.id')->first();
        if (!$assessor) {
            $assessorId = DB::table('users')->insertGetId([
                'name' => 'Prof. Dr. Ir. Bambang Sutrisno, M.T.',
                'email' => 'asesor.rpl@smkn24.ac.id',
                'password' => bcrypt('password'),
                'role' => 'asesor',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
            $this->command->info("Created new assessor: Prof. Dr. Ir. Bambang Sutrisno, M.T. (ID: {$assessorId})");
        } else {
            $assessorId = $assessor->id;
            $this->command->info("Using existing assessor: {$assessor->name} (ID: {$assessorId})");
        }

        // Find or create TUK
        $tuk = DB::table('tuks')->where('nama', 'LIKE', '%SMK Negeri 24 Jakarta%')->first();
        if (!$tuk) {
            $tukId = DB::table('tuks')->insertGetId([
                'nama' => 'SMK Negeri 24 Jakarta - Lab Komputer 1',
                'alamat' => 'Jl. Raya Bogor KM 17, Cijantung, Jakarta Timur',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
            $this->command->info("Created new TUK: SMK Negeri 24 Jakarta - Lab Komputer 1 (ID: {$tukId})");
        } else {
            $tukId = $tuk->id;
            $this->command->info("Using existing TUK: {$tuk->nama} (ID: {$tukId})");
        }

        // Create new assessment
        $assessmentId = DB::table('assesments')->insertGetId([
            'skema_id' => $schemaId,
            'assesor_id' => $assessorId,
            'tuk_id' => $tukId,
            'nama_skema' => 'Rekayasa Perangkat Lunak',
            'tanggal_mulai' => $now->format('Y-m-d'),
            'tanggal_selesai' => $now->addDays(30)->format('Y-m-d'),
            'waktu_mulai' => '08:00:00',
            'status' => 'active',
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        // Create assessment_asesi relationship
        DB::table('assesment_asesis')->insert([
            'assesment_id' => $assessmentId,
            'asesi_id' => $existingAsesi->id,
            'status' => 'mengerjakan',
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        // Create bukti dokumen
        DB::table('bukti_dokumens')->insert([
            [
                'asesi_id' => $existingAsesi->id,
                'description' => 'Dokumen Portofolio RPL',
                'file_path' => '/uploads/bukti/portofolio_rpl.pdf',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'asesi_id' => $existingAsesi->id,
                'description' => 'Sertifikat Pelatihan Programming',
                'file_path' => '/uploads/bukti/sertifikat_programming.pdf',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'asesi_id' => $existingAsesi->id,
                'description' => 'Project Web Application',
                'file_path' => '/uploads/bukti/project_web.pdf',
                'created_at' => $now,
                'updated_at' => $now,
            ]
        ]);

        $this->command->info('Assessment setup completed successfully!');
        $this->command->info("Asesi: {$existingAsesi->name} ({$existingAsesi->email})");
        $this->command->info("Schema ID: {$schemaId}");
        $this->command->info("Assessment ID: {$assessmentId}");
        $this->command->info("Status: mengerjakan");
    }
}
