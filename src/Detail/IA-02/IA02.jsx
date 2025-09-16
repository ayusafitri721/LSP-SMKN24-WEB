import React from "react";

function FRIA02() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-600">
      {/* Header */}
      <div className="bg-orange-500 text-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
              <span className="text-orange-500 font-bold text-sm">LSP</span>
            </div>
            <h1 className="text-3xl font-bold">MyLSP</h1>
          </div>
          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-orange-400 px-6">
        <div className="flex gap-1 text-white text-sm">
          {["FR.AFL.01", "FR.AFL.02", "FR.APL.01", "FR.APL.02", "FR.AFL.03", "FR.IA.01.TPD", "FR.IA.02", "FR.IA.BBA.PPP"].map((tab, i) => (
            <div 
              key={i} 
              className={`px-4 py-2 ${tab === "FR.IA.02" ? "bg-white text-orange-500 rounded-t-lg font-medium" : "hover:bg-orange-300 cursor-pointer"}`}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Form Header */}
          <div className="text-center mb-8">
            <HeaderForm title="FR.IA.02.TPD" subtitle="TUGAS PRAKTIK DEMONSTRASI" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - 2/3 width */}
            <div className="lg:col-span-2 space-y-6">
              <SkemaSertifikasi
                judulUnit="Junior Custom Mode"
                kodeUnit="SKM.TBS.OJCM/LSP.SMKN24/2023"
                TUK="Sewaktu/Tempat Kerja/Mandiri"
              />

              <Petunjuk />
              
              <Skenario />
            </div>

            {/* Right Column - 1/3 width */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="font-bold text-lg mb-4 text-gray-800">Skenario Tugas Praktik Demonstrasi:</h3>
                <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                  Anda adalah seorang praktikan yang ingin menyelesaikan skenario yang telah 
                  diberikan. Ikuti setiap langkah dengan cermat agar dapat menyelesaikan tugas dengan baik.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">Perlengkapan Demonstrasi</h4>
                    <div className="flex flex-col gap-1 text-sm text-gray-700">
                      <span>• APD</span>
                      <span>• Peralatan menjahit</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800">Durasi Waktu</span>
                      <span className="text-xl font-bold text-blue-600">30 Menit</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <KirimButton onClick={() => alert("Jawaban dikirim")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderForm({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <p className="text-lg text-gray-600 mt-1">{subtitle}</p>
    </div>
  );
}

function SkemaSertifikasi({ judulUnit, kodeUnit, TUK }) {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
      <table className="w-full text-sm">
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-2 pr-4 font-semibold w-32">Judul Unit</td>
            <td className="py-2">:</td>
            <td className="py-2 pl-4">{judulUnit}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 pr-4 font-semibold">Kode Unit</td>
            <td className="py-2">:</td>
            <td className="py-2 pl-4">{kodeUnit}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-semibold">TUK</td>
            <td className="py-2">:</td>
            <td className="py-2 pl-4">{TUK}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Petunjuk() {
  const list = [
    "1. Baca dan pelajari setiap instruksi kerja di bawah ini dengan cermat sebelum melaksanakan praktek.",
    "2. Klarifikasi kepada asesor kompentensi apabila ada hal-hal yang belum jelas.",
    "3. Laksanakan pekerjaan sesuai dengan urutan proses yang sudah di tetapkan.",
    "4. Seluruh proses kerja mengacu kepada SOP/WI yang dipersyaratkan.",
  ];
  
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-sm">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 rounded-t-lg">
        <h2 className="font-bold text-lg text-gray-800">A. Petunjuk</h2>
      </div>
      <div className="p-4 bg-orange-50">
        <div className="space-y-2">
          {list.map((item, i) => (
            <p key={i} className="text-sm leading-relaxed text-gray-700">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Skenario() {
  const unitData = [
    ["GAR.CM01.001.01", "Memberikan Layanan Secara Prima kepada Pelanggan"],
    ["GAR.CM01.002.01", "Melakukan Pekerjaan dalam Lingkungan Sosial yang Beragam"],
    ["GAR.CM01.003.01", "Mengikuti Prosedur Kesehatan, Keselamatan dan Keamanan dalam Bekerja"],
    ["GAR.CM01.004.01", "Memelihara Alat Jahit"],
  ];

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-sm">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 rounded-t-lg">
        <h2 className="font-bold text-lg text-gray-800">B. Skenario Tugas Praktik Demonstrasi</h2>
      </div>
      <div className="p-4">
        <p className="italic font-medium mb-4 text-gray-700">Kelompok Pekerjaan 1</p>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          {unitData.map(([kode, judul], i) => (
            <div key={i}>
              <div className="flex gap-2 mb-3">
                <span className="font-medium text-gray-800 min-w-4">{i + 1}.</span>
                <div className="flex-1">
                  <p className="font-bold text-sm text-gray-800">Kode Unit: <span className="font-normal">{kode}</span></p>
                  <p className="font-bold text-sm mt-1 text-gray-800">Judul Unit:</p>
                  <p className="text-sm text-gray-700 mt-1">{judul}</p>
                </div>
              </div>
              {i < unitData.length - 1 && (
                <hr className="my-3 border-gray-200" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="font-bold mb-3 text-gray-800">Skenario Tugas Praktik Demonstrasi</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Anda adalah seorang Operator jahit dan diminta untuk melayani yang ingin
            membuat bius sesuai dengan sample yang ada.
          </p>
        </div>
      </div>
    </div>
  );
}

function Conditions({ equipments, duration }) {
  return (
    <div className="mt-4 mb-8">
      <h2 className="text-lg font-bold">Perlengkapan dan Peralatan:</h2>
      <ul className="mt-2 list-disc list-inside">
        {equipments.map((eq, i) => (
          <li key={i} className="text-base">
            {eq}
          </li>
        ))}
      </ul>

      <div className="flex gap-2 mt-4">
        <p className="font-bold">Durasi Waktu:</p>
        <p>{duration} Menit</p>
      </div>
    </div>
  );
}

function KirimButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold shadow-sm transition-colors"
    >
      Kirim
    </button>
  );
}

export default FRIA02;