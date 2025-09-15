import React from "react";

function FRIA02() {
  return (
    <div className="w-full h-full px-4 overflow-y-auto">
      <HeaderForm title="FR.IA.02.TPD" subtitle="TUGAS PRAKTIK DEMONSTRASI" />

      <SkemaSertifikasi
        judulUnit="Junior Custom Mode"
        kodeUnit="SKM.TBS.OJCM/LSP.SMKN24/2023"
        TUK="Sewaktu/Tempat Kerja/Mandiri"
      />

      <Petunjuk />
      <Skenario />
      <Conditions equipments={["APD", "Peralatan Menjahit"]} duration={30} />
      <KirimButton onClick={() => alert("Jawaban dikirim")} />
    </div>
  );
}

function HeaderForm({ title, subtitle }) {
  return (
    <div className="mb-4">
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="text-sm">{subtitle}</p>
    </div>
  );
}

function SkemaSertifikasi({ judulUnit, kodeUnit, TUK }) {
  return (
    <div className="mb-4 p-4 rounded-xl border border-gray-300 bg-white shadow">
      <p className="font-bold">Judul Unit: {judulUnit}</p>
      <p>Kode Unit: {kodeUnit}</p>
      <p>TUK: {TUK}</p>
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
    <div className="w-full mb-4">
      <h2 className="font-bold">A. Petunjuk</h2>
      <div className="mt-2 rounded-xl bg-orange-300/30">
        {list.map((item, i) => (
          <p key={i} className="px-4 py-2 text-sm">
            {item}
          </p>
        ))}
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
    <div className="mt-4">
      <h2 className="text-lg font-bold">B. Skenario Tugas Praktik Demonstrasi</h2>

      <p className="mt-2 ml-4 italic font-bold">Kelompok Pekerjaan 1</p>

      <div className="mt-2 rounded-lg border border-gray-300 bg-white shadow p-4">
        {unitData.map(([kode, judul], i) => (
          <div key={i}>
            <div className="flex gap-2 mb-2">
              <span>{i + 1}.</span>
              <div>
                <p className="font-bold">Kode Unit: {kode}</p>
                <p className="font-bold text-sm">Judul Unit:</p>
                <p className="text-sm">{judul}</p>
              </div>
            </div>
            {i < unitData.length - 1 && (
              <hr className="my-2 border-gray-300/50" />
            )}
          </div>
        ))}
      </div>

      <h2 className="mt-4 text-lg font-bold">
        Skenario Tugas Praktik Demonstrasi
      </h2>
      <p className="text-sm">
        Anda adalah seorang Operator jahit dan diminta untuk melayani yang ingin
        membuat bius sesuai dengan sample yang ada.
      </p>
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
    <div className="w-full flex justify-end">
      <button
        onClick={onClick}
        className="px-4 py-2 bg-indigo-500 text-white rounded-lg font-bold"
      >
        Kirim Jawaban
      </button>
    </div>
  );
}

export default FRIA02;
