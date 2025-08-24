import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { DashboardSidebar } from '../layouts/Dashboard';
import Dashboard from '../layouts/Dashboard'; // Default import
import ManajemenData from '../layouts/ManajemenData';
import ListAsesmen from '../layouts/ListAsesmen';
import AsesmenDiikuti from '../AsesmenDiikuti/AsesmenDiikuti';
import Approvement from '../Approvment/APL-01/Approvement';

// FIXED: Import dari path yang benar
import Asesor from '../Asesor/Asesor';
import AddAsesor from '../Asesor/AddAsesor';
import EditAsesor from '../Asesor/EditAsesor';
import Asesi from '../Asesi/Asesi';
import AddAsesi from '../Asesi/AddAsesi';
import EditAsesi from '../Asesi/EditAsesi';

import Asesmen from '../Asesmen/asesmen';
import AddAsesmen from '../Asesmen/addasesmen';
import ImportAsesmen from '../Asesmen/importasesmen';
import BarcodeAsesmen from '../Asesmen/barcodeasesmen';
import EditAsesmen from '../Asesmen/editasesmen';
import Jurusan from '../Jurusan/Jurusan';
import AddJurusan from '../Jurusan/AddJurusan';
import EditJurusan from '../Jurusan/EditJurusan';
import Kompetensi from '../Skema/Kompetensi';
import AddSkema from '../Skema/AddSkema';
import EditSkema from '../Skema/EditSkema';
import AddListAsesmen from '../layouts/AddListAsesmen';
import EditListAsesmen from '../layouts/EditListAsesmen';
import LihatListAsesmen from '../layouts/LihatListAsesmen';
import LihatApprovement from '../Approvment/APL-01/LihatApprovement';
import ProfileSection from '../layouts/ProfileSection';

const DashboardRoutes = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [editData, setEditData] = useState(null);

  // Sample data - idealnya ini dari API atau Context
  const [asesorData, setAsesorData] = useState([
    { id: 1, no: 1, nama: 'Arul Maulita Singo, M.kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { id: 2, no: 2, nama: 'Arul Maulita Singo, M.kom', pekerjaan: 'Guru', sertifikat: 'Tidak Tersertifikasi', tanggal: '22/8/2024' },
    { id: 3, no: 3, nama: 'Arul Maulita Singo, M.kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { id: 4, no: 4, nama: 'Arul Maulita Singo, M.kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
  ]);

  const [asesiData, setAsesiData] = useState([
    { id: 1, no: 1, nama: 'Erwin Abristor Mega', pekerjaan: 'Siswa', jurusan: 'Rekayasa Perangkat Lunak', kelas: '12' },
    { id: 2, no: 2, nama: 'Erwin Abristor Mega', pekerjaan: 'Siswa', jurusan: 'Rekayasa Perangkat Lunak', kelas: '11' },
    { id: 3, no: 3, nama: 'Erwin Abristor Mega', pekerjaan: 'Siswa', jurusan: 'Rekayasa Perangkat Lunak', kelas: '10' },
    { id: 4, no: 4, nama: 'Erwin Abristor Mega', pekerjaan: 'Siswa', jurusan: 'Perhotelan', kelas: '11' },
    { id: 5, no: 5, nama: 'Erwin Abristor Mega', pekerjaan: 'Siswa', jurusan: 'Busana', kelas: '11' },
    { id: 6, no: 6, nama: 'Erwin Abristor Mega', pekerjaan: 'Siswa', jurusan: 'Usaha Layanan Pariwisata', kelas: '11' },
    { id: 7, no: 7, nama: 'Erwin Abristor Mega', pekerjaan: 'Siswa', jurusan: 'Kuliner', kelas: '11' }
  ]);

  const [jurusanData, setJurusanData] = useState([
    { id: 1, kompetensiKeahlian: 'Rekayasa Perangkat Lunak', jumlahSiswa: '45' },
    { id: 2, kompetensiKeahlian: 'Teknik Komputer dan Jaringan', jumlahSiswa: '38' },
    { id: 3, kompetensiKeahlian: 'Multimedia', jumlahSiswa: '42' },
    { id: 4, kompetensiKeahlian: 'Perhotalan', jumlahSiswa: '35' },
    { id: 5, kompetensiKeahlian: 'Busana', jumlahSiswa: '28' },
    { id: 6, kompetensiKeahlian: 'Usaha Layanan Pariwisata', jumlahSiswa: '30' },
    { id: 7, kompetensiKeahlian: 'Kuliner', jumlahSiswa: '32' },
  ]);

  const [assessmentData, setAssessmentData] = useState([
    { id: 1, namaJadwal: 'Sertifikasi Web Developer - Batch 1', tuk: 'TUK LSP Digital', pembiayaan: 'Dibayar Penuh', tanggalUjian: '2025-09-15', lokasiUjian: 'Jakarta Pusat', asesor: 'Asesor A', jumlahPeserta: 20 },
    { id: 2, namaJadwal: 'Sertifikasi Mobile App Developer', tuk: 'TUK LSP Mobile', pembiayaan: 'Belum Dibayar', tanggalUjian: '2025-09-22', lokasiUjian: 'Bandung', asesor: 'Asesor B', jumlahPeserta: 15 },
    { id: 3, namaJadwal: 'Sertifikasi Data Analyst', tuk: 'TUK LSP Data', pembiayaan: 'Dibayar Penuh', tanggalUjian: '2025-09-30', lokasiUjian: 'Surabaya', asesor: 'Asesor C', jumlahPeserta: 25 },
  ]);

  const [skemaData, setSkemaData] = useState([
    { id: 1, kodeSkema: 'SKM-001', namaSkema: 'Web Developer', bidangKeahlian: 'Teknologi Informasi', deskripsi: 'Sertifikasi untuk kemampuan pengembangan web', tanggalBerlaku: '2025-12-31', status: 'Aktif' },
    { id: 2, kodeSkema: 'SKM-002', namaSkema: 'Mobile App Developer', bidangKeahlian: 'Teknologi Informasi', deskripsi: 'Sertifikasi untuk kemampuan pengembangan aplikasi mobile', tanggalBerlaku: '2025-12-31', status: 'Aktif' },
    { id: 3, kodeSkema: 'SKM-003', namaSkema: 'Data Analyst', bidangKeahlian: 'Data Science', deskripsi: 'Sertifikasi untuk kemampuan analisis data', tanggalBerlaku: '2025-12-31', status: 'Nonaktif' }
  ]);

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleNavigate = (page, data = null) => {
    if (data) {
      setEditData(data);
    } else {
      setEditData(null);
    }
    
    // FIXED: Map page names to correct routes
    const pageMap = {
      'Asesi': '/dashboard/asesi',
      'Asesor': '/dashboard/asesor', 
      'Asesmen': '/dashboard/asesmen',
      'Jurusan': '/dashboard/jurusan',
      'Kompetensi': '/dashboard/kompetensi',
      'addasesi': '/dashboard/asesi/add',
      'editasesi': '/dashboard/asesi/edit',
      'addasesor': '/dashboard/asesor/add',
      'editasesor': '/dashboard/asesor/edit',
      'addasesmen': '/dashboard/asesmen/add',
      'editasesmen': '/dashboard/asesmen/edit',
      'addjurusan': '/dashboard/jurusan/add',
      'editjurusan': '/dashboard/jurusan/edit',
      'addskema': '/dashboard/kompetensi/add-skema',
      'editskema': '/dashboard/kompetensi/edit-skema'
    };
    
    const route = pageMap[page] || `/dashboard/${page}`;
    navigate(route);
  };

  const handleSidebarMenuClick = (menuName) => {
    if (menuName === 'Logout') {
      if (window.confirm('Apakah Anda yakin ingin logout?')) {
        alert('Logout berhasil!');
        navigate('/');
      }
      return;
    }
    
    setActiveMenu(menuName);
    const pageMap = {
      Dashboard: '/dashboard/',
      ManajemenData: '/dashboard/manajemen-data',
      ListAsesmen: '/dashboard/list-asesmen',
      AsesmenDiikuti: '/dashboard/asesmen-diikuti',
      Approvement: '/dashboard/approvement',
      Profile: '/dashboard/profile',
    };
    
    if (pageMap[menuName] !== undefined) {
      navigate(pageMap[menuName]);
    }
  };

  // Handler functions untuk CRUD operations
  const handleAddAsesor = (newData) => {
    const newId = Math.max(...asesorData.map(a => a.id), 0) + 1;
    const newNo = Math.max(...asesorData.map(a => a.no), 0) + 1;
    setAsesorData([...asesorData, { ...newData, id: newId, no: newNo }]);
    navigate('/dashboard/asesor');
  };

  const handleEditAsesor = (updatedData) => {
    setAsesorData(asesorData.map(asesor => asesor.id === updatedData.id ? updatedData : asesor));
    navigate('/dashboard/asesor');
  };

  const handleAddAsesi = (newData) => {
    const newId = Math.max(...asesiData.map(a => a.id), 0) + 1;
    const newNo = Math.max(...asesiData.map(a => a.no), 0) + 1;
    setAsesiData([...asesiData, { ...newData, id: newId, no: newNo }]);
    navigate('/dashboard/asesi');
  };

  const handleEditAsesi = (updatedData) => {
    setAsesiData(asesiData.map(asesi => asesi.id === updatedData.id ? updatedData : asesi));
    navigate('/dashboard/asesi');
  };

  const handleAddJurusan = (newItem) => {
    const newId = Math.max(...jurusanData.map(j => j.id), 0) + 1;
    setJurusanData([...jurusanData, { ...newItem, id: newId }]);
    navigate('/dashboard/jurusan');
  };

  const handleEditJurusan = (updatedItem) => {
    setJurusanData(prevData => prevData.map(item => item.id === updatedItem.id ? updatedItem : item));
    navigate('/dashboard/jurusan');
  };

  const handleAddAssessment = (newItem) => {
    const newId = Math.max(...assessmentData.map(a => a.id), 0) + 1;
    setAssessmentData([...assessmentData, { ...newItem, id: newId }]);
    navigate('/dashboard/list-asesmen');
  };

  const handleEditAssessment = (updatedItem) => {
    setAssessmentData(prevData => prevData.map(item => item.id === updatedItem.id ? updatedItem : item));
    navigate('/dashboard/list-asesmen');
  };

  const handleAddSkema = (newData) => {
    const newId = Math.max(...skemaData.map(s => s.id), 0) + 1;
    setSkemaData([...skemaData, { ...newData, id: newId }]);
    navigate('/dashboard/kompetensi');
  };

  const handleEditSkema = (updatedData) => {
    setSkemaData(skemaData.map(skema => skema.id === updatedData.id ? updatedData : skema));
    navigate('/dashboard/kompetensi');
  };

  // Layout wrapper
  const DashboardLayout = ({ children }) => (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', 
      backgroundColor: '#f5f5f5' 
    }}>
      <DashboardSidebar activeMenu={activeMenu} onMenuClick={handleSidebarMenuClick} />
      <div style={{ flex: 1, backgroundColor: '#fafafa', padding: '20px' }}>
        {children}
      </div>
    </div>
  );

  return (
    <Routes>
      {/* Main Dashboard */}
      <Route path="/" element={
        <DashboardLayout>
          <Dashboard onBack={handleBackToHome} onNavigate={handleNavigate} />
        </DashboardLayout>
      } />

      {/* Management Data */}
      <Route path="/manajemen-data" element={
        <DashboardLayout>
          <div style={{ padding: '20px' }}>
            <h1 style={{ marginBottom: '20px' }}>Manajemen Data</h1>
            <ManajemenData 
              onNavigate={handleNavigate} 
              onBack={handleBackToHome}
              asesorData={asesorData}
              asesiData={asesiData}
              jurusanData={jurusanData}
              skemaData={skemaData}
            />
          </div>
        </DashboardLayout>
      } />

      {/* FIXED: Asesor Routes */}
      <Route path="/asesor" element={
        <DashboardLayout>
          <Asesor 
            onBack={handleBackToHome} 
            onNavigate={handleNavigate} 
            asesorData={asesorData} 
            setAsesorData={setAsesorData} 
          />
        </DashboardLayout>
      } />
      <Route path="/asesor/add" element={
        <DashboardLayout>
          <AddAsesor 
            onSave={handleAddAsesor} 
            onCancel={() => navigate('/dashboard/asesor')} 
          />
        </DashboardLayout>
      } />
      <Route path="/asesor/edit" element={
        <DashboardLayout>
          <EditAsesor 
            data={editData} 
            onSave={handleEditAsesor} 
            onCancel={() => navigate('/dashboard/asesor')} 
          />
        </DashboardLayout>
      } />

      {/* FIXED: Asesi Routes */}
      <Route path="/asesi" element={
        <DashboardLayout>
          <Asesi 
            onBack={handleBackToHome} 
            onNavigate={handleNavigate} 
            asesiData={asesiData} 
            setAsesiData={setAsesiData} 
          />
        </DashboardLayout>
      } />
      <Route path="/asesi/add" element={
        <DashboardLayout>
          <AddAsesi 
            onSave={handleAddAsesi} 
            onCancel={() => navigate('/dashboard/asesi')} 
          />
        </DashboardLayout>
      } />
      <Route path="/asesi/edit" element={
        <DashboardLayout>
          <EditAsesi 
            data={editData} 
            onSave={handleEditAsesi} 
            onCancel={() => navigate('/dashboard/asesi')} 
          />
        </DashboardLayout>
      } />

      {/* Asesmen Routes */}
      <Route path="/asesmen" element={
        <DashboardLayout>
          <Asesmen onBack={handleBackToHome} onNavigate={handleNavigate} />
        </DashboardLayout>
      } />

      {/* Jurusan Routes */}
      <Route path="/jurusan" element={
        <DashboardLayout>
          <Jurusan 
            onBack={handleBackToHome} 
            onNavigate={handleNavigate} 
            jurusanData={jurusanData} 
            setJurusanData={setJurusanData} 
          />
        </DashboardLayout>
      } />

      {/* Kompetensi Routes */}
      <Route path="/kompetensi" element={
        <DashboardLayout>
          <Kompetensi 
            onBack={handleBackToHome} 
            onNavigate={handleNavigate} 
            skemaData={skemaData} 
            setSkemaData={setSkemaData} 
          />
        </DashboardLayout>
      } />

      {/* List Asesmen Routes */}
      <Route path="/list-asesmen" element={
        <DashboardLayout>
          <ListAsesmen 
            onBack={handleBackToHome} 
            onNavigate={handleNavigate} 
            assessmentData={assessmentData} 
            setAssessmentData={setAssessmentData} 
          />
        </DashboardLayout>
      } />

      {/* Asesmen Diikuti Routes */}
      <Route path="/asesmen-diikuti" element={
        <DashboardLayout>
          <AsesmenDiikuti onBack={handleBackToHome} />
        </DashboardLayout>
      } />

      {/* Approvement Routes */}
      <Route path="/approvement" element={
        <DashboardLayout>
          <Approvement 
            onBack={handleBackToHome} 
            onNavigate={handleNavigate} 
          />
        </DashboardLayout>
      } />

      {/* Profile Route */}
      <Route path="/profile" element={
        <DashboardLayout>
          <ProfileSection />
        </DashboardLayout>
      } />

      {/* Fallback route untuk debugging */}
      <Route path="/*" element={
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Route tidak ditemukan</h2>
          <p>Path yang diminta tidak tersedia</p>
          <button onClick={() => navigate('/dashboard/')}>Kembali ke Dashboard</button>
        </div>
      } />
    </Routes>
  );
};

export default DashboardRoutes;