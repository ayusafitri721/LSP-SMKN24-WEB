import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { DashboardSidebar } from "../layouts/Dashboard";
import Dashboard from "../layouts/Dashboard"; // Default import
import ManajemenData from "../layouts/ManajemenData";
import ListAsesmen from "../ListAsesmen/ListAsesmen";
import Asesor from "../Asesor/Asesor";
import AddAsesor from "../Asesor/AddAsesor";
import EditAsesor from "../Asesor/EditAsesor";
import Asesi from "../Asesi/Asesi";
import AddAsesi from "../Asesi/AddAsesi";
import EditAsesi from "../Asesi/EditAsesi";
import Asesmen from "../Asesmen/asesmen";
import AddAsesmen from "../Asesmen/addasesmen";
import ImportAsesmen from "../Asesmen/importasesmen";
import BarcodeAsesmen from "../Asesmen/barcodeasesmen";
import EditAsesmen from "../Asesmen/editasesmen";
import Jurusan from "../Jurusan/Jurusan";
import AddJurusan from "../Jurusan/AddJurusan";
import EditJurusan from "../Jurusan/EditJurusan";
import FRIA02 from "../Detail/IA-02/IA02";
import AddSkema from "../Skema/AddSkema";
import EditSkema from "../Skema/EditSkema";
import AddListAsesmen from "../layouts/AddListAsesmen";
import EditListAsesmen from "../layouts/EditListAsesmen";
import LihatListAsesmen from "../ListAsesmen/LihatListAsesmen";
import ProfileSection from "../layouts/ProfileSection"; // Import ProfileSection
import Approvement from "../DetailAsesi/APL-01/Approvement";
import LihatApprovement from "../DetailAsesi/APL-01/LihatApprovement";
import DetailJurusanApl01 from "../DetailAsesi/APL-01/DetailJurusanApl01";
import ApprovementApl02 from "../DetailAsesi/APL-02/ApprovementApl02";
import LihatApprovement02 from "../DetailAsesi/APL-02/LihatApprovement02";
import DetailJurusan from "../DetailAsesi/APL-02/DetailJurusan";
import ApprovementAK01 from "../Detail/AK-01/ApprovementAk01";
import LihatApprovementAK01 from "../Detail/AK-01/LihatApprovementAk01";
import DetailJurusanAK01 from "../Detail/AK-01/DetailJurusanAk01";
import AsesmenDiikuti from "../AsesmenDiikuti/AsesmenDiikuti";
import Skema from "../Skema/Skema";
import ListMuk from "../ListMuk/ListMuk";
import BandingkanAsesmen from "../ListMuk/AK-04/BandingkanAsesmen"; // Import BandingkanAsesmen
import UmpanBalik from "../ListMuk/AK-03/UmpanBalik";
import AK05Form from "../ListMuk/AK-05/LaporanAsesment";
import CeklisObservasiAktivitas from "../ListMuk/IA-01/CeklisObservasiAktivitas";
// FIXED: Mengubah path import untuk LembarJawabanPG
import LembarJawabanPG from "../ListMuk/IA-05C/LembarJawabanPG"; // CHANGED: Path diperbaiki
import PertanyaanMendukungObservasi from "../ListMuk/IA-03/PertanyaanMendukungObservasi";

const DashboardRoutes = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [editData, setEditData] = useState(null);

  const [jurusanData, setJurusanData] = useState([
    {
      id: 1,
      kompetensiKeahlian: "Rekayasa Perangkat Lunak",
      jumlahSiswa: "45",
    },
    {
      id: 2,
      kompetensiKeahlian: "Teknik Komputer dan Jaringan",
      jumlahSiswa: "38",
    },
    { id: 3, kompetensiKeahlian: "Multimedia", jumlahSiswa: "42" },
    { id: 4, kompetensiKeahlian: "Perhotalan", jumlahSiswa: "35" },
    { id: 5, kompetensiKeahlian: "Busana", jumlahSiswa: "28" },
    {
      id: 6,
      kompetensiKeahlian: "Usaha Layanan Pariwisata",
      jumlahSiswa: "30",
    },
    { id: 7, kompetensiKeahlian: "Kuliner", jumlahSiswa: "32" },
  ]);

  const [assessmentData, setAssessmentData] = useState([
    {
      id: 1,
      namaJadwal: "Sertifikasi Web Developer - Batch 1",
      tuk: "TUK LSP Digital",
      pembiayaan: "Dibayar Penuh",
      tanggalUjian: "2025-09-15",
      lokasiUjian: "Jakarta Pusat",
      asesor: "Asesor A",
      jumlahPeserta: 20,
    },
    {
      id: 2,
      namaJadwal: "Sertifikasi Mobile App Developer",
      tuk: "TUK LSP Mobile",
      pembiayaan: "Belum Dibayar",
      tanggalUjian: "2025-09-22",
      lokasiUjian: "Bandung",
      asesor: "Asesor B",
      jumlahPeserta: 15,
    },
    {
      id: 3,
      namaJadwal: "Sertifikasi Data Analyst",
      tuk: "TUK LSP Data",
      pembiayaan: "Dibayar Penuh",
      tanggalUjian: "2025-09-30",
      lokasiUjian: "Surabaya",
      asesor: "Asesor C",
      jumlahPeserta: 25,
    },
  ]);

  const [skemaData, setSkemaData] = useState([
    {
      id: 1,
      kodeSkema: "SKM-001",
      namaSkema: "Web Developer",
      bidangKeahlian: "Teknologi Informasi",
      deskripsi: "Sertifikasi untuk kemampuan pengembangan web",
      tanggalBerlaku: "2025-12-31",
      status: "Aktif",
    },
    {
      id: 2,
      kodeSkema: "SKM-002",
      namaSkema: "Mobile App Developer",
      bidangKeahlian: "Teknologi Informasi",
      deskripsi: "Sertifikasi untuk kemampuan pengembangan aplikasi mobile",
      tanggalBerlaku: "2025-12-31",
      status: "Aktif",
    },
    {
      id: 3,
      kodeSkema: "SKM-003",
      namaSkema: "Data Analyst",
      bidangKeahlian: "Data Science",
      deskripsi: "Sertifikasi untuk kemampuan analisis data",
      tanggalBerlaku: "2025-12-31",
      status: "Nonaktif",
    },
  ]);

  const handleBackToHome = () => {
    navigate("/dashboard");
  };

  const handleNavigate = (page, data = null) => {
    if (data) {
      setEditData(data);
    } else {
      setEditData(null);
    }

    // Map page names to correct routes
    const pageMap = {
      Asesi: "asesi",
      Asesor: "asesor",
      Asesmen: "asesmen",
      Jurusan: "jurusan",
      Kompetensi: "skema",
      ListMuk: "list-muk",
      addasesi: "asesi/add",
      editasesi: "asesi/edit",
      addasesor: "asesor/add",
      editasesor: "asesor/edit",
      addasesmen: "asesmen/add",
      editasesmen: "asesmen/edit",
      addjurusan: "jurusan/add",
      editjurusan: "jurusan/edit",
      addskema: "skema/add-skema",
      editskema: "skema/edit-skema",
      lihatlistasesmen: "list-asesmen/lihat",
      analytics: "list-asesmen/analytics",
      // APL-01
      approvement: "approvement",
      "detail-jurusan-apl01": "approvement/detail",
      lihatapprovement: "approvement/lihat",
      // Add APL-02 routes
      approvementapl02: "approvement/apl-02",
      lihatapprovement02: "approvement/apl-02/lihat",
      "detail-jurusan": "approvement/apl-02/detail",
      // AK - 01
      approvementak01: "approvement/ak-01",
      lihatapprovementak01: "approvement/ak-01/lihat",
      "detail-jurusan-ak01": "approvement/ak-01/detail",
      // List MUK routes
      "listmuk/ak02": "list-muk/ak-02",
      "listmuk/AK-03/UmpanBalik": "list-muk/ak-03/umpanbalik",
      "listmuk/AK-04/BandingkanAsesmen": "list-muk/ak-04/banding-asesmen",
      "listmuk/AK-05/LaporanAsesment": "list-muk/ak-05/laporan-asesment",
      "listmuk/IA-01/CeklisObservasiAktivitas":
        "list-muk/ia-01/ceklis-observasi-aktivitas",
      "listmuk/ia02": "list-muk/ia-02",
      "listmuk/ia05b": "list-muk/ia-05b",
      "listmuk/ia05c": "list-muk/ia-05c",
      // FIX: Tambahkan mapping yang benar untuk FR.IA.05.C
      "listmuk/IA-05C/LembarJawabanPG": "list-muk/ia-05c/lembar-jawaban-pg",
      // NEW: Tambahkan mapping untuk PertanyaanMendukungObservasi
      "listmuk/IA-03/PertanyaanMendukungObservasi": "list-muk/ia-03/pertanyaan-mendukung-observasi",
    };
    const route = pageMap[page] || page;
    navigate(`/dashboard/${route}`);
  };

  const handleSidebarMenuClick = (menuName) => {
    if (menuName === "Logout") {
      if (window.confirm("Apakah Anda yakin ingin logout?")) {
        alert("Logout berhasil!");
        navigate("/");
      }
      return;
    }

    setActiveMenu(menuName);
    const pageMap = {
      Dashboard: "",
      ManajemenData: "manajemen-data",
      ListAsesmen: "list-asesmen",
      AsesmenDiikuti: "asesmen-diikuti",
      Approvement: "approvement/apl-02",
      Profile: "profile",
    };

    if (pageMap[menuName] !== undefined) {
      navigate(`/dashboard/${pageMap[menuName]}`);
    }
  };

  const handleAddAsesor = (newData) => {
    navigate("/dashboard/asesor");
  };

  const handleEditAsesor = (updatedData) => {
    // Handle the edit logic here if needed
    navigate("/dashboard/asesor");
  };

  const handleAddAsesi = (newData) => {
    navigate("/dashboard/asesi");
  };

  const handleEditAsesi = (updatedData) => {
    navigate("/dashboard/asesi");
  };

  const handleAddJurusan = (newItem) => {
    navigate("/dashboard/jurusan");
  };

  const handleEditJurusan = (updatedItem) => {
    setJurusanData((prevData) =>
      prevData.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    navigate("/dashboard/jurusan");
  };

  const handleAddAssessment = (newItem) => {
    const newId = Math.max(...assessmentData.map((a) => a.id), 0) + 1;
    setAssessmentData([...assessmentData, { ...newItem, id: newId }]);
    navigate("/dashboard/list-asesmen");
  };

  const handleEditAssessment = (updatedItem) => {
    setAssessmentData((prevData) =>
      prevData.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    navigate("/dashboard/list-asesmen");
  };

  const handleAddSkema = (newData) => {
    const newId = Math.max(...skemaData.map((s) => s.id), 0) + 1;
    setSkemaData([...skemaData, { ...newData, id: newId }]);
    navigate("/dashboard/skema");
  };

  const handleEditSkema = (updatedData) => {
    setSkemaData(
      skemaData.map((skema) =>
        skema.id === updatedData.id ? updatedData : skema
      )
    );
    navigate("/dashboard/skema");
  };

  const handleImportAsesmen = (newData) => {
    alert("Data berhasil ditambahkan!");
    navigate("/dashboard/asesmen");
  };

  const handleAddAsesmen = (newData) => {
    alert("Data berhasil ditambahkan!");
    navigate("/dashboard/asesmen");
  };

  const handleBarcodeAsesmen = (newData) => {
    alert("Barcode berhasil dibuat!");
    navigate("/dashboard/asesmen");
  };

  const handleEditAsesmen = (updatedData) => {
    alert("Data berhasil diperbarui!");
    navigate("/dashboard/asesmen");
  };

  const DashboardLayout = ({ children }) => (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: "#f5f5f5",
      }}
    >
      <DashboardSidebar
        activeMenu={activeMenu}
        onMenuClick={handleSidebarMenuClick}
      />
      <div style={{ flex: 1, backgroundColor: "#fafafa", padding: "20px" }}>
        {children}
      </div>
    </div>
  );

  return (
    <Routes>
      {/* Main Dashboard */}
      <Route
        path="/"
        element={
          <DashboardLayout>
            <Dashboard onBack={handleBackToHome} onNavigate={handleNavigate} />
          </DashboardLayout>
        }
      />

      {/* Management Data */}
      <Route
        path="/manajemen-data"
        element={
          <DashboardLayout>
            <ManajemenData
              onNavigate={handleNavigate}
              onBack={handleBackToHome}
            />
          </DashboardLayout>
        }
      />

      {/* Asesor Routes */}
      <Route
        path="/asesor"
        element={
          <DashboardLayout>
            <Asesor onBack={handleBackToHome} onNavigate={handleNavigate} />
          </DashboardLayout>
        }
      />
      <Route
        path="/asesor/add"
        element={
          <AddAsesor
            onSave={handleAddAsesor}
            onCancel={() => navigate("/dashboard/asesor")}
          />
        }
      />
      <Route
        path="/asesor/edit"
        element={
          <EditAsesor
            data={editData}
            onSave={handleEditAsesor}
            onCancel={() => navigate("/dashboard/asesor")}
          />
        }
      />


      {/* Asesi Routes */}
      <Route
        path="/asesi"
        element={
          <DashboardLayout>
            <Asesi onBack={handleBackToHome} onNavigate={handleNavigate} />
          </DashboardLayout>
        }
      />
      <Route
        path="/asesi/add"
        element={
          <AddAsesi
            onSave={handleAddAsesi}
            onCancel={() => navigate("/dashboard/asesi")}
          />
        }
      />
      <Route
        path="/asesi/edit"
        element={
          <EditAsesi
            data={editData}
            onSave={handleEditAsesi}
            onCancel={() => navigate("/dashboard/asesi")}
          />
        }
      />

      {/* Asesmen Routes */}
      <Route
        path="/asesmen"
        element={
          <DashboardLayout>
            <Asesmen onBack={handleBackToHome} onNavigate={handleNavigate} />
          </DashboardLayout>
        }
      />
      <Route
        path="/asesmen/add"
        element={
          <AddAsesmen
            onSubmit={handleAddAsesmen}
            onBack={() => navigate("/dashboard/asesmen")}
          />
        }
      />
      <Route
        path="/asesmen/import"
        element={
          <ImportAsesmen
            onSubmit={handleImportAsesmen}
            onBack={() => navigate("/dashboard/asesmen")}
          />
        }
      />
      <Route
        path="/asesmen/barcode"
        element={
          <BarcodeAsesmen
            onSubmit={handleBarcodeAsesmen}
            onBack={() => navigate("/dashboard/asesmen")}
          />
        }
      />
      <Route
        path="/asesmen/edit"
        element={
          <EditAsesmen
            data={editData}
            onSave={handleEditAsesmen}
            onCancel={() => navigate("/dashboard/asesmen")}
          />
        }
      />

      {/* Jurusan Routes */}
      <Route
        path="/jurusan"
        element={
          <DashboardLayout>
            <Jurusan
              onBack={handleBackToHome}
              onNavigate={handleNavigate}
              jurusanData={jurusanData}
              setJurusanData={setJurusanData}
            />
          </DashboardLayout>
        }
      />

      {/* Skema Routes */}
      <Route
        path="/skema"
        element={
          <DashboardLayout>
            <Skema
              onBack={handleBackToHome}
              onNavigate={handleNavigate}
              skemaData={skemaData}
              setSkemaData={setSkemaData}
            />
          </DashboardLayout>
        }
      />

      <Route
        path="/skema/add-skema"
        element={
          <AddSkema
            onSave={handleAddSkema}
            onCancel={() => navigate("/dashboard/skema")}
          />
        }
      />
      <Route
        path="/skema/edit-skema"
        element={
          <EditSkema
            data={editData}
            onSave={handleEditSkema}
            onCancel={() => navigate("/dashboard/skema")}
          />
        }
      />

      {/* List Asesmen Routes */}
      <Route
        path="/list-asesmen"
        element={
          <DashboardLayout>
            <ListAsesmen
              onBack={handleBackToHome}
              onNavigate={handleNavigate}
              assessmentData={assessmentData}
              setAssessmentData={setAssessmentData}
            />
          </DashboardLayout>
        }
      />
      <Route
        path="/list-asesmen/add"
        element={
          <AddListAsesmen
            onBack={() => navigate("/dashboard/list-asesmen")}
            onSave={handleAddAssessment}
            assessmentData={assessmentData}
          />
        }
      />
      <Route
        path="/list-asesmen/edit/:id"
        element={
          <EditListAsesmen
            onBack={() => navigate("/dashboard/list-asesmen")}
            onSave={handleEditAssessment}
            item={editData}
          />
        }
      />
      {/* Fixed route untuk LihatListAsesmen */}
      <Route
        path="/list-asesmen/lihat"
        element={
          <DashboardLayout>
            <LihatListAsesmen
              onBack={() => navigate("/dashboard/list-asesmen")}
              onNavigate={handleNavigate}
              data={editData}
            />
          </DashboardLayout>
        }
      />

      {/* Asesmen Diikuti Routes */}
      <Route
        path="/asesmen-diikuti"
        element={
          <DashboardLayout>
            <AsesmenDiikuti onBack={handleBackToHome} />
          </DashboardLayout>
        }
      />

      {/* Approvement Routes - APL-01 */}
      <Route
        path="/approvement"
        element={
          <DashboardLayout>
            <Approvement
              onBack={handleBackToHome}
              onNavigate={handleNavigate}
            />
          </DashboardLayout>
        }
      />

      <Route
        path="/approvement/lihat"
        element={
          <DashboardLayout>
            <LihatApprovement
              onBack={() => navigate("/dashboard/approvement/detail")}
              onNavigate={handleNavigate}
              data={editData}
            />
          </DashboardLayout>
        }
      />

      {/* Approvement Routes - APL-02 - MAIN ROUTE (yang dipanggil dari sidebar) */}
      <Route
        path="/approvement/apl-02"
        element={
          <DashboardLayout>
            <ApprovementApl02
              onBack={handleBackToHome}
              onNavigate={handleNavigate}
            />
          </DashboardLayout>
        }
      />

      <Route
        path="/approvement/apl-02/detail"
        element={
          <DashboardLayout>
            <DetailJurusan
              onBack={() => navigate("/dashboard/approvement/apl-02")}
              onNavigate={handleNavigate}
              data={editData}
            />
          </DashboardLayout>
        }
      />

      <Route
        path="/approvement/apl-02/lihat"
        element={
          <DashboardLayout>
            <LihatApprovement02
              onBack={() => navigate("/dashboard/approvement/apl-02")}
              onNavigate={handleNavigate}
              data={editData}
            />
          </DashboardLayout>
        }
      />

      {/* Approvement Routes - AK-01 */}
      <Route
        path="/approvement/ak-01"
        element={
          <DashboardLayout>
            <ApprovementAK01
              onBack={() => navigate("/dashboard/approvement")}
              onNavigate={handleNavigate}
            />
          </DashboardLayout>
        }
      />

      <Route
        path="/approvement/ak-01/detail"
        element={
          <DashboardLayout>
            <DetailJurusanAK01
              onBack={() => navigate("/dashboard/approvement/ak-01")}
              onNavigate={handleNavigate}
              data={editData}
            />
          </DashboardLayout>
        }
      />

      <Route
        path="/approvement/ak-01/lihat"
        element={
          <DashboardLayout>
            <LihatApprovementAK01
              onBack={() => navigate("/dashboard/approvement/ak-01")}
              onNavigate={handleNavigate}
              data={editData}
            />
          </DashboardLayout>
        }
      />

      <Route
        path="/approvement/detail"
        element={
          <DashboardLayout>
            <DetailJurusanApl01
              onBack={() => navigate("/dashboard/approvement/apl-01")}
              onNavigate={handleNavigate}
              data={editData}
            />
          </DashboardLayout>
        }
      />

      {/* List MUK Routes */}
      <Route
        path="/list-muk"
        element={
          <DashboardLayout>
            <ListMuk onBack={handleBackToHome} onNavigate={handleNavigate} />
          </DashboardLayout>
        }
      />

      <Route
        path="/list-muk/ak-03/umpanbalik"
        element={
          <DashboardLayout>
            <UmpanBalik
              onBack={() => navigate("/dashboard/list-muk")}
              onNavigate={handleNavigate}
            />
          </DashboardLayout>
        }
      />

      <Route
        path="/list-muk/ak-05/laporan-asesment"
        element={
          <DashboardLayout>
            <AK05Form
              onBack={() => navigate("/dashboard/list-muk")}
              onNavigate={handleNavigate}
            />
          </DashboardLayout>
        }
      />

      <Route
        path="/list-muk/ak-04/banding-asesmen"
        element={
          <DashboardLayout>
            <BandingkanAsesmen
              onBack={() => navigate("/dashboard/list-muk")}
              onNavigate={handleNavigate}
            />
          </DashboardLayout>
        }
      />

      <Route
        path="/list-muk/ia-01/ceklis-observasi-aktivitas"
        element={
          <DashboardLayout>
            <CeklisObservasiAktivitas
              onBack={() => navigate("/dashboard/list-muk")}
              onNavigate={handleNavigate}
            />
          </DashboardLayout>
        }
      />

      {/* FIXED: Route untuk LembarJawabanPG dengan path yang benar */}
      <Route
        path="/list-muk/ia-05c/lembar-jawaban-pg"
        element={
          <DashboardLayout>
            <LembarJawabanPG
              onBack={() => navigate("/dashboard/list-muk")}
              onNavigate={handleNavigate}
            />
          </DashboardLayout>
        }
      />
      
      {/* IA-02 routes (support both variants) */}
      <Route
        path="/list-muk/ia02"
        element={
          <DashboardLayout>
            <FRIA02
              onBack={() => navigate("/dashboard/list-muk")}
              onNavigate={handleNavigate}
            />
          </DashboardLayout>
        }
      />
      <Route
        path="/list-muk/ia-02"
        element={
          <DashboardLayout>
            <FRIA02
              onBack={() => navigate("/dashboard/list-muk")}
              onNavigate={handleNavigate}
            />
          </DashboardLayout>
        }
      />

      {/* Alias for IA-02 detail page to match '/dashboard/detail-ia02' */}
      <Route
        path="/detail-ia02"
        element={
          <DashboardLayout>
            <FRIA02
              onBack={() => navigate("/dashboard/list-muk")}
              onNavigate={handleNavigate}
            />
          </DashboardLayout>
        }
      />

      {/* NEW: Route untuk PertanyaanMendukungObservasi */}
        <Route
          path="/list-muk/ia-03/pertanyaan-mendukung-observasi"
          element={
            <DashboardLayout>
              <PertanyaanMendukungObservasi
                onBack={() => navigate("/dashboard/list-muk")}
                onNavigate={handleNavigate}
              />
            </DashboardLayout>
          }
        />

      {/* Test Route for Debugging */}
      <Route
        path="/test"
        element={
          <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>Test Route Working!</h2>
            <p>If you can see this, routing is working correctly.</p>
            <button onClick={() => navigate("/dashboard/")}>
              Go to Dashboard
            </button>
          </div>
        }
      />

      {/* Profile Route */}
      <Route
        path="/profile"
        element={
          <DashboardLayout>
            <ProfileSection />
          </DashboardLayout>
        }
      />
    </Routes>
  );
};

export default DashboardRoutes;
