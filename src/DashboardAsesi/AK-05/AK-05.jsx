/* eslint-disable no-irregular-whitespace */
// src/DashboardAsesi/AK-05/AK-05.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';

const AK05 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    skemaSertifikasi: '',
    tuk: '',
    namaAsesor: '',
    namaAsesi: '',
    tanggal: '',
    judulUnit: '',
    kodeUnit: '',
    namaAsesi1: '',
    rekomendasi1: null,
    keterangan1: '',
    namaAsesi2: '',
    rekomendasi2: null,
    keterangan2: '',
    namaAsesi3: '',
    rekomendasi3: null,
    keterangan3: '',
    aspekNegatif: '',
    pencatatanPenolakan: '',
    saranPerbaikan: '',
    namaAsesorAkhir: '',
    noRegAsesor: '',
    catatanAkhir: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!isFormSubmitted) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function(...args) {
      const newPath = args[2];
      if (!isFormSubmitted && !newPath.includes('/dashboard-asesi/fr-ak-05')) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        return;
      }
      originalPushState.apply(window.history, args);
    };

    window.history.replaceState = function(...args) {
      const newPath = args[2];
      if (!isFormSubmitted && !newPath.includes('/dashboard-asesi/fr-ak-05')) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        return;
      }
      originalReplaceState.apply(window.history, args);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, [isFormSubmitted]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (row, value) => {
    setFormData(prev => ({
      ...prev,
      [`rekomendasi${row}`]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form FR.AK.05 submitted:', formData);
    localStorage.setItem('ak05FormData', JSON.stringify(formData));
    setIsFormSubmitted(true);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => {
      navigate('/dashboard-asesi/ia-09');
    }, 300);
  };

  const handleApprove = () => {
    console.log("Asesi approved the form.");
  };

  return (
    <div className="page-container">
      <style>
        {`
          /* Base Styles */
          .page-container {
            background-color: #f5f5f5;
            font-family: 'Arial', sans-serif;
            padding: 15px;
          }

          .nav-container {
            background-color: white;
            padding: 5px 15px;
            border-radius: 15px 15px 40px 15px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            margin: 15px 15px 0 15px;
            overflow-x: auto;
            max-width: 50%;
            white-space: nowrap;
          }

          .nav-scrollbar::-webkit-scrollbar {
            height: 5px;
          }

          .nav-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }

          .nav-scrollbar::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 5px;
          }

          .nav-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #555;
          }

          .image-banner {
            background-image: linear-gradient(rgba(255, 140, 0, 0.7), rgba(255, 140, 0, 0.7)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80');
            background-size: cover;
            background-position: center;
            height: 160px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            margin-top: 20px;
          }

          .logo-text {
            color: white;
            font-size: 48px;
            font-weight: bold;
            margin: 0;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            letter-spacing: 2px;
          }

          .form-container {
            background-color: white;
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            margin-top: 20px;
          }

          .header-section {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #ddd;
          }

          .logo-container {
            flex-shrink: 0;
          }

          .logo-img {
            width: 80px;
            height: 80px;
            border-radius: 8px;
            object-fit: contain;
            background-color: #f8f9fa;
            padding: 4px;
          }

          .header-content {
            flex: 1;
          }

          .title, .subtitle {
            font-size: 16px;
            font-weight: bold;
            margin: 0 0 5px 0;
            color: #333;
            text-align: center;
          }

          .note-text {
            font-size: 12px;
            margin-top: 10px;
          }

          .form-group {
            margin-top: 20px;
          }

          .form-textarea {
            width: 100%;
            min-height: 100px;
            padding: 10px;
            box-sizing: border-box;
            border-radius: 5px;
            border: 1px solid #ccc;
          }

          .form-input {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            border-radius: 5px;
            border: 1px solid #ccc;
            outline: none;
          }

          .table-responsive {
            overflow-x: auto;
            margin-bottom: 20px;
            border-radius: 8px;
            border: 1px solid #ccc;
            padding: 20px;
          }

          .ak-05-table, .ak-05-table-2 {
            width: 100%;
            border-collapse: collapse;
          }

          .ak-05-table td, .ak-05-table th {
            border: 1px solid #ddd;
            padding: 8px;
            vertical-align: top;
          }

          .ak-05-table-2 {
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 20px;
          }

          .table-header-2 {
            border: 1px solid #ccc;
            padding: 8px;
            background-color: #f2f2f2;
            text-align: center;
          }

          .table-cell-2 {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: center;
          }

          .grid-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 20px;
          }

          .grid-item {
            display: flex;
            flex-direction: column;
          }

          .label-top-margin {
            margin-top: 10px;
          }

          .label-top-margin-20 {
            margin-top: 20px;
          }

          .submit-button-container {
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
          }

          .submit-button, .approve-button {
            background-color: #1a73e8;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            display: block;
            width: 100%;
          }

          .approve-button {
            background-color: #ccc;
            color: #666;
            cursor: not-allowed;
            opacity: 0.6;
          }

          /* Modal styles */
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }

          .modal-container {
            background-color: white;
            border-radius: 20px;
            padding: 40px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            min-width: 320px;
            max-width: 400px;
          }

          .icon-container {
            margin-bottom: 20px;
          }

          .success-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            position: relative;
            gap: 15px;
          }

          .list-lines {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .line {
            width: 60px;
            height: 12px;
            background-color: #FF8C00;
            border-radius: 6px;
          }

          .line-medium {
            width: 80px;
            height: 12px;
            background-color: #FF8C00;
            border-radius: 6px;
          }

          .line-long {
            width: 100px;
            height: 12px;
            background-color: #FF8C00;
            border-radius: 6px;
          }

          .check-circle {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: #FF8C00;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 6px;
          }

          .check-mark {
            color: white;
            font-size: 24px;
            font-weight: bold;
          }

          .modal-title {
            font-size: 20px;
            font-weight: bold;
            color: #333;
            margin-bottom: 8px;
            line-height: 1.3;
          }

          .modal-subtitle {
            font-size: 20px;
            font-weight: bold;
            color: #333;
            margin-bottom: 30px;
            line-height: 1.3;
          }

          .divider {
            height: 2px;
            background-color: #ddd;
            margin: 25px 0;
            border-radius: 1px;
          }

          .okay-button {
            background-color: transparent;
            border: none;
            font-size: 18px;
            font-weight: bold;
            color: #666;
            cursor: pointer;
            padding: 10px 20px;
          }

          .warning-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #ff6b6b;
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            z-index: 1001;
            font-size: 14px;
            font-weight: bold;
            animation: slideIn 0.3s ease-out;
          }

          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          /* --- Media Queries for Responsiveness --- */
          @media (max-width: 768px) {
            .nav-container {
              max-width: 100%;
              margin: 10px;
              border-radius: 15px;
            }
          
            .image-banner {
              height: 120px;
              margin-top: 15px;
            }
          
            .logo-text {
              font-size: 32px;
              letter-spacing: 1px;
            }
          
            .form-container {
              padding: 15px;
            }
          
            .header-section {
              flex-direction: column;
              align-items: center;
              gap: 10px;
              text-align: center;
            }
          
            .logo-img {
              width: 60px;
              height: 60px;
            }
          
            .ak-05-table,
            .ak-05-table-2 {
              display: block;
              width: 100%;
            }
            
            .ak-05-table thead, .ak-05-table-2 thead {
              display: none;
            }
            
            .ak-05-table tr, .ak-05-table-2 tr {
              display: block;
              margin-bottom: 15px;
              border: 1px solid #ddd;
              border-radius: 8px;
              padding: 10px;
            }
            
            .ak-05-table td, .ak-05-table-2 td {
              display: block;
              border: none;
              border-bottom: 1px solid #eee;
              padding: 8px;
              text-align: left;
              white-space: normal;
            }
            
            .ak-05-table td:last-child, .ak-05-table-2 td:last-child {
              border-bottom: none;
            }
            
            .ak-05-table td:before, .ak-05-table-2 td:before {
              content: attr(data-label);
              font-weight: bold;
              display: block;
              margin-bottom: 5px;
            }
          
            .grid-container {
              grid-template-columns: 1fr;
              gap: 15px;
            }
          }
          
          @media (max-width: 480px) {
            .form-container {
              padding: 10px;
            }
          
            .modal-container {
              min-width: 90%;
              padding: 20px;
            }
          
            .success-icon {
              flex-direction: column;
              gap: 10px;
            }
          
            .list-lines {
              flex-direction: row;
              justify-content: center;
              gap: 4px;
            }
          
            .line, .line-medium, .line-long {
              height: 8px;
            }
          }
        `}
      </style>

      {showWarning && (
        <div className="warning-notification">
          Silakan isi dan kirim formulir FR.AK.05 terlebih dahulu!
        </div>
      )}

      <div className="nav-container nav-scrollbar">
        <NavAsesi activeTab="FR.AK.05" />
      </div>

      <div className="image-banner">
        <h1 className="logo-text">
          MyLSP
        </h1>
      </div>

      <div className="form-container">
        <div className="header-section">
          <div className="logo-container">
            <img
              src="/src/img/image 12.png"
              alt="LSP Logo"
              className="logo-img"
            />
          </div>
          <div className="header-content">
            <div className="title">FR.AK.05</div>
            <div className="subtitle">LAPORAN ASESMEN</div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="table-responsive">
            <table className="ak-05-table">
              <tbody>
                <tr>
                  <td className="table-top-cell" rowSpan="2" data-label="Skema Sertifikasi (KKNI/OKUPASI/KLASTER)">Skema Sertifikasi (KKNI/OKUPASI/KLASTER)</td>
                  <td className="table-top-cell" rowSpan="2"></td>
                  <td className="table-cell" data-label="Judul Unit">Judul Unit</td>
                  <td className="table-cell">:</td>
                  <td className="table-cell">
                    <input type="text" className="form-input" value={formData.judulUnit} onChange={(e) => handleInputChange('judulUnit', e.target.value)} />
                  </td>
                </tr>
                <tr>
                  <td className="table-cell" data-label="Kode Unit">Kode Unit</td>
                  <td className="table-cell">:</td>
                  <td className="table-cell">
                    <input type="text" className="form-input" value={formData.kodeUnit} onChange={(e) => handleInputChange('kodeUnit', e.target.value)} />
                  </td>
                </tr>
                <tr>
                  <td className="table-cell" data-label="TUK">TUK</td>
                  <td className="table-cell">:</td>
                  <td className="table-cell" colSpan="4">
                    <input type="text" className="form-input" value={formData.tuk} onChange={(e) => handleInputChange('tuk', e.target.value)} />
                  </td>
                </tr>
                <tr>
                  <td className="table-cell" data-label="Nama Asesor">Nama Asesor</td>
                  <td className="table-cell">:</td>
                  <td className="table-cell" colSpan="4">
                    <input type="text" className="form-input" value={formData.namaAsesor} onChange={(e) => handleInputChange('namaAsesor', e.target.value)} />
                  </td>
                </tr>
                <tr>
                  <td className="table-cell" data-label="Nama Asesi">Nama Asesi</td>
                  <td className="table-cell">:</td>
                  <td className="table-cell" colSpan="4">
                    <input type="text" className="form-input" value={formData.namaAsesi} onChange={(e) => handleInputChange('namaAsesi', e.target.value)} />
                  </td>
                </tr>
                <tr>
                  <td className="table-cell" data-label="Tanggal">Tanggal</td>
                  <td className="table-cell">:</td>
                  <td className="table-cell" colSpan="4">
                    <input type="date" className="form-input" value={formData.tanggal} onChange={(e) => handleInputChange('tanggal', e.target.value)} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-section">
            <table className="ak-05-table-2">
              <thead>
                <tr>
                  <th className="table-header-2">No</th>
                  <th className="table-header-2">Nama Asesi</th>
                  <th className="table-header-2">Rekomendasi</th>
                  <th className="table-header-2">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((row) => (
                  <tr key={row}>
                    <td className="table-cell-2" data-label="No">{row}.</td>
                    <td className="table-cell-2" data-label="Nama Asesi">
                      <input type="text" className="form-input" value={formData[`namaAsesi${row}`]} onChange={(e) => handleInputChange(`namaAsesi${row}`, e.target.value)} />
                    </td>
                    <td className="table-cell-2" data-label="Rekomendasi">
                      <label>K <input type="checkbox" checked={formData[`rekomendasi${row}`] === 'K'} onChange={() => handleCheckboxChange(row, 'K')} /></label>

                      <label>BK <input type="checkbox" checked={formData[`rekomendasi${row}`] === 'BK'} onChange={() => handleCheckboxChange(row, 'BK')} /></label>
                    </td>
                    <td className="table-cell-2" data-label="Keterangan">
                      <input type="text" className="form-input" value={formData[`keterangan${row}`]} onChange={(e) => handleInputChange(`keterangan${row}`, e.target.value)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="note-text">
            **tuliskan Kode dan Judul Unit Kompetensi yang dinyatakan BK bila mengses satu skema
          </p>

          <div className="form-group">
            <p>1. Aspek Negatif dan Positif dalam Asesmen</p>
            <textarea
              className="form-textarea"
              value={formData.aspekNegatif}
              onChange={(e) => handleInputChange('aspekNegatif', e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <p>2. Pencatatan Penolakan Hasil Asesmen</p>
            <textarea
              className="form-textarea"
              value={formData.pencatatanPenolakan}
              onChange={(e) => handleInputChange('pencatatanPenolakan', e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <p>3. Saran perbaikan: (Asesor/PersonilTerkait)</p>
            <textarea
              className="form-textarea"
              value={formData.saranPerbaikan}
              onChange={(e) => handleInputChange('saranPerbaikan', e.target.value)}
            ></textarea>
          </div>

          <div className="grid-container">
            <div className="grid-item">
              <p>Nama Asesor</p>
              <input
                type="text"
                className="form-input"
                value={formData.namaAsesorAkhir}
                onChange={(e) => handleInputChange('namaAsesorAkhir', e.target.value)}
              />
              <p className="label-top-margin">No.Reg</p>
              <input
                type="text"
                className="form-input"
                value={formData.noRegAsesor}
                onChange={(e) => handleInputChange('noRegAsesor', e.target.value)}
              />
              <p className="label-top-margin-20">Persetujuan Asesi</p>
              <button
                type="button"
                className="approve-button"
                onClick={handleApprove}
              >
                Approve
              </button>
            </div>
            <div className="grid-item">
              <p>Catatan</p>
              <textarea
                className="form-textarea"
                value={formData.catatanAkhir}
                onChange={(e) => handleInputChange('catatanAkhir', e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="submit-button-container">
            <button type="submit" className="submit-button">
              Kirim
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="icon-container">
              <div className="success-icon">
                <div className="list-lines">
                  <div className="line"></div>
                  <div className="line-medium"></div>
                  <div className="line-long"></div>
                </div>
                <div className="check-circle">
                  <div className="check-mark">✓</div>
                </div>
              </div>
            </div>
            <div className="modal-title">Jawaban Anda</div>
            <div className="modal-subtitle">Berhasil Direkam!</div>
            <div className="divider"></div>
            <button className="okay-button" onClick={handleCloseModal}>
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AK05;