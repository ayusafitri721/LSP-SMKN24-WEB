
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { DashboardSidebar } from '../layouts/Dashboard';
import Dashboard from '../layouts/Dashboard';
import ManajemenData from '../layouts/ManajemenData';
import ListAsesmen from '../layouts/ListAsesmen';
import AsesmenDiikuti from '../AsesmenDiikuti/AsesmenDiikuti';
import Approvement from '../Approvment/APL-01/Approvement';
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

const DashboardRoutes = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [editData, setEditData] = useState(null);

  
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
    navigate(`/dashboard/${page}`);
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
      Dashboard: '',
      ManajemenData: 'manajemen-data',
      ListAsesmen: 'list-asesmen',
      AsesmenDiikuti: 'asesmen-diikuti',
      Approvement: 'approvement',
      Profile: 'profile',
    };
    
    if (pageMap[menuName] !== undefined) {
      navigate(`/dashboard/${pageMap[menuName]}`);
    }
  };

  
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

  const handleImportAsesmen = (newData) => {
    alert('Data berhasil ditambahkan!');
    navigate('/dashboard/asesmen');
  };

  const handleBarcodeAsesmen = (newData) => {
    alert('Barcode berhasil dibuat!');
    navigate('/dashboard/asesmen');
  };

  const handleEditAsesmen = (updatedData) => {
    alert('Data berhasil diperbarui!');
    navigate('/dashboard/asesmen');
  };

  
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
          <ManajemenData onNavigate={handleNavigate} onBack={handleBackToHome} />
        </DashboardLayout>
      } />

      {/* Asesor Routes */}
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
        <AddAsesor 
          onSave={handleAddAsesor} 
          onCancel={() => navigate('/dashboard/asesor')} 
        />
      } />
      <Route path="/asesor/edit/:id" element={
        <EditAsesor 
          data={editData} 
          onSave={handleEditAsesor} 
          onCancel={() => navigate('/dashboard/asesor')} 
        />
      } />

      {/* Asesi Routes */}
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
        <AddAsesi 
          onSave={handleAddAsesi} 
          onCancel={() => navigate('/dashboard/asesi')} 
        />
      } />
      <Route path="/asesi/edit/:id" element={
        <EditAsesi 
          data={editData} 
          onSave={handleEditAsesi} 
          onCancel={() => navigate('/dashboard/asesi')} 
        />
      } />

      {/* Asesmen Routes */}
      <Route path="/asesmen" element={
        <DashboardLayout>
          <Asesmen onBack={handleBackToHome} onNavigate={handleNavigate} />
        </DashboardLayout>
      } />
      <Route path="/asesmen/add" element={
        <AddAsesmen 
          onSubmit={handleImportAsesmen} 
          onBack={() => navigate('/dashboard/asesmen')} 
        />
      } />
      <Route path="/asesmen/import" element={
        <ImportAsesmen 
          onSubmit={handleImportAsesmen} 
          onBack={() => navigate('/dashboard/asesmen')} 
        />
      } />
      <Route path="/asesmen/barcode" element={
        <BarcodeAsesmen 
          onSubmit={handleBarcodeAsesmen} 
          onBack={() => navigate('/dashboard/asesmen')} 
        />
      } />
      <Route path="/asesmen/edit/:id" element={
        <EditAsesmen 
          data={editData} 
          onSave={handleEditAsesmen} 
          onCancel={() => navigate('/dashboard/asesmen')} 
        />
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

      <Route path="/jurusan/add" element={
        <AddJurusan 
          onBack={() => navigate('/dashboard/jurusan')} 
          onSave={handleAddJurusan} 
        />
      } />

      <Route path="/jurusan/edit/:id" element={
        <EditJurusan 
          onBack={() => navigate('/dashboard/jurusan')} 
          onSave={handleEditJurusan} 
          initialData={editData} 
        />
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

      <Route path="/kompetensi/add-skema" element={
        <AddSkema 
          onSave={handleAddSkema} 
          onCancel={() => navigate('/dashboard/kompetensi')} 
        />
      } />
      <Route path="/kompetensi/edit-skema/:id" element={
        <EditSkema 
          data={editData} 
          onSave={handleEditSkema} 
          onCancel={() => navigate('/dashboard/kompetensi')} 
        />
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
      <Route path="/list-asesmen/add" element={
        <AddListAsesmen 
          onBack={() => navigate('/dashboard/list-asesmen')} 
          onSave={handleAddAssessment} 
          assessmentData={assessmentData} 
        />
      } />
      <Route path="/list-asesmen/edit/:id" element={
        <EditListAsesmen 
          onBack={() => navigate('/dashboard/list-asesmen')} 
          onSave={handleEditAssessment} 
          item={editData} 
        />
      } />
      <Route path="/list-asesmen/lihat/:id" element={
        <LihatListAsesmen 
          onBack={() => navigate('/dashboard/list-asesmen')} 
          data={editData} 
        />
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
      <Route path="/approvement/lihat/:id" element={
        <LihatApprovement 
          onBack={() => navigate('/dashboard/approvement')} 
          data={editData} 
        />
      } />

      {/* Profile Route */}
      <Route path="/profile" element={
        <DashboardLayout>
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Profile Page</h2>
            <p>Profile content akan ditampilkan di sini</p>
          </div>
        </DashboardLayout>
      } />
    </Routes>
  );
};

export default DashboardRoutes;