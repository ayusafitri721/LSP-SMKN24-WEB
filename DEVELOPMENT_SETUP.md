# Development Setup Guide

## Problem Solved
This setup resolves the issue where APL-02 and AK-01 forms show the error:
```
Tidak menemukan assesment aktif untuk dikaitkan (assesment_asesi_id/skema_id). 
Silakan pilih jadwal terlebih dahulu di dashboard atau muat ulang halaman.
```

## Solution Implemented

### 1. Development Fallback Data
The forms now include development fallback data that automatically loads when no real assessments are available:

- **APL-02.jsx**: Shows "🧪 DEVELOPMENT MODE" banner when using test data
- **AK-01.jsx**: Shows "🧪 DEVELOPMENT MODE" banner when using test data

### 2. Test Data Seeder
A seeder has been created to populate the database with minimal test data.

## How to Use

### Option 1: Use Development Fallback (Immediate)
The forms will automatically use test data when no real assessments exist. Just refresh the page and you should see:
- Pre-filled test data
- Working form submission

### Option 2: Run Database Seeder for Existing Asesi (Recommended)
**For existing asesi `asesi.rpl1@student.smkn24.ac.id`:**
```bash
php artisan db:seed --class=ExistingAsesiAssessmentSeeder
```

**Or run all seeders:**
```bash
php artisan db:seed
```

### Option 3: Run Generic Test Seeder
**For creating completely new test data:**
```bash
php artisan db:seed --class=TestAssessmentSeeder
```

### What the Seeder Creates:
- Test schema (skema)
- Test unit kompetensi
- Test elements and KUKs
- Test assessor user
- Test asesi user
- Test TUK (Tempat Uji Kompetensi)
- Test assessment with active status
- Test bukti dokumen

## Database Tables Affected:
- `skemas`
- `unit_kompetensis`
- `elemens`
- `kuks`
- `users`
- `tuks`
- `assesments`
- `assesment_asesis`
- `bukti_dokumens`

## Notes:
- The seeder assumes standard Laravel table structures
- Adjust table names in the seeder if your database schema differs
- Test credentials: 
  - Asesor: test.asesor@example.com / password
  - Asesi: test.asesi@example.com / password

## Reverting Changes:
If you want to remove the development fallback later, search for "DEVELOPMENT FALLBACK" comments in:
- `src/DashboardAsesi/APL-02/APL-02.jsx`
- `src/DashboardAsesi/AK-01/AK-01.jsx`
