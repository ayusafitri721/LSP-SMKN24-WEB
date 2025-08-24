import React, { useState } from 'react';

function EditListAsesmen({ onBack, onSave, item }) {
  const [currentItem, setCurrentItem] = useState({ ...item });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e, field) => {
    let value = e.target.value;
    if (field === 'jumlahPeserta') {
      value = parseInt(value) || 0;
    }
    setCurrentItem({ ...currentItem, [field]: value });
  };

  const handleSubmit = () => {
    // Simpan data ke state sementara
    window.tempUpdateAsesmenData = currentItem;
    
    // Tampilkan notifikasi
    setShowSuccess(true);
  };

  // Blue Checkmark Icon Component
  const CheckmarkIcon = () => (
    <div style={{
      width: '80px',
      height: '80px',
      backgroundColor: '#4A90E2',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto',
      animation: showSuccess ? 'scaleIn 0.3s ease-out' : 'none'
    }}>
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" 
          fill="white"
          style={{
            transform: showSuccess ? 'scale(1)' : 'scale(0)',
            transition: 'transform 0.2s ease-out 0.1s'
          }}
        />
      </svg>
    </div>
  );

  const CalendarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: 'Arial, sans-serif',
      padding: '40px',
      boxSizing: 'border-box',
      overflow: 'auto',
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Success Notification */}
      {showSuccess && (
        <>
          {/* Overlay */}
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 10000,
              animation: 'fadeIn 0.3s ease-out'
            }}
          />
          
          {/* Modal Notification */}
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '50px 40px 40px 40px',
            borderRadius: '16px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            textAlign: 'center',
            zIndex: 10001,
            width: '320px',
            maxWidth: '90vw',
            animation: 'slideUp 0.4s ease-out'
          }}>
            {/* Blue Checkmark Icon */}
            <div style={{ marginBottom: '30px' }}>
              <CheckmarkIcon />
            </div>
            
            {/* Text */}
            <div style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '8px',
              lineHeight: '1.3'
            }}>
              Data Anda
            </div>
            <div style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '40px',
              lineHeight: '1.3'
            }}>
              Diperbarui!
            </div>
            
            {/* Thicker line separator */}
            <div style={{
              width: '100%',
              height: '2px',
              backgroundColor: '#e9ecef',
              marginBottom: '30px'
            }}></div>
            
            {/* Button without border */}
            <button
              onClick={() => {
                // Tutup notifikasi
                setShowSuccess(false);
                
                // Panggil onSave dan reset form
                if (window.tempUpdateAsesmenData) {
                  onSave && onSave(window.tempUpdateAsesmenData);
                  window.tempUpdateAsesmenData = null;
                }
              }}
              style={{
                backgroundColor: '#f8f9fa',
                color: '#333',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                minWidth: '100px'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#e9ecef';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#f8f9fa';
              }}
            >
              Okay!
            </button>
          </div>
        </>
      )}

      <h2 style={{
        fontSize: '28px',
        fontWeight: '700',
        color: '#2c3e50',
        marginBottom: '30px',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '1px',
      }}>
        Edit Data Asesmen
      </h2>
      
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '40px',
        width: '100%',
        flex: 1,
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '40px',
          flex: 1,
          alignContent: 'start',
          marginBottom: '30px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div>
              <label style={{ 
                fontSize: '16px', 
                color: '#34495e', 
                marginBottom: '8px', 
                display: 'block',
                fontWeight: '600'
              }}>
                Nama Jadwal
              </label>
              <input
                type="text"
                value={currentItem.namaJadwal}
                onChange={(e) => handleChange(e, 'namaJadwal')}
                style={{
                  padding: '15px',
                  border: '2.5px solid #d6d8db',
                  borderRadius: '8px',
                  fontSize: '16px',
                  width: '100%',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => e.target.style.borderColor = '#fd7e14'}
                onBlur={(e) => e.target.style.borderColor = '#d6d8db'}
              />
            </div>
            
            <div>
              <label style={{ 
                fontSize: '16px', 
                color: '#34495e', 
                marginBottom: '8px', 
                display: 'block',
                fontWeight: '600'
              }}>
                TUK
              </label>
              <input
                type="text"
                value={currentItem.tuk}
                onChange={(e) => handleChange(e, 'tuk')}
                style={{
                  padding: '15px',
                  border: '2.5px solid #d6d8db',
                  borderRadius: '8px',
                  fontSize: '16px',
                  width: '100%',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => e.target.style.borderColor = '#fd7e14'}
                onBlur={(e) => e.target.style.borderColor = '#d6d8db'}
              />
            </div>
            
            <div>
              <label style={{ 
                fontSize: '16px', 
                color: '#34495e', 
                marginBottom: '8px', 
                display: 'block',
                fontWeight: '600'
              }}>
                Tanggal Ujian
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="date"
                  value={currentItem.tanggalUjian}
                  onChange={(e) => handleChange(e, 'tanggalUjian')}
                  style={{
                    padding: '15px',
                    border: '2.5px solid #d6d8db',
                    borderRadius: '8px',
                    fontSize: '16px',
                    width: '100%',
                    transition: 'border-color 0.3s ease',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#fd7e14'}
                  onBlur={(e) => e.target.style.borderColor = '#d6d8db'}
                />
              </div>
            </div>
            
            <div style={{ flex: 1 }}>
              <label style={{ 
                fontSize: '16px', 
                color: '#34495e', 
                marginBottom: '8px', 
                display: 'block',
                fontWeight: '600'
              }}>
                Lokasi Ujian
              </label>
              <textarea
                value={currentItem.lokasiUjian}
                onChange={(e) => handleChange(e, 'lokasiUjian')}
                style={{
                  padding: '15px',
                  border: '2.5px solid #d6d8db',
                  borderRadius: '8px',
                  fontSize: '16px',
                  width: '100%',
                  minHeight: '120px',
                  resize: 'vertical',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => e.target.style.borderColor = '#fd7e14'}
                onBlur={(e) => e.target.style.borderColor = '#d6d8db'}
                placeholder="Masukkan lokasi ujian..."
              />
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div>
              <label style={{ 
                fontSize: '16px', 
                color: '#34495e', 
                marginBottom: '12px', 
                display: 'block',
                fontWeight: '600'
              }}>
                Pembiayaan
              </label>
              <div style={{ 
                display: 'flex', 
                gap: '30px',
                padding: '10px 0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input
                    type="radio"
                    id="dibayarPenuh"
                    name="pembiayaan"
                    value="Dibayar Penuh"
                    checked={currentItem.pembiayaan === 'Dibayar Penuh'}
                    onChange={(e) => handleChange(e, 'pembiayaan')}
                    style={{ width: '18px', height: '18px' }}
                  />
                  <label htmlFor="dibayarPenuh" style={{ 
                    fontSize: '16px', 
                    color: '#34495e',
                    fontWeight: '500'
                  }}>
                    Dibayar Penuh
                  </label>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input
                    type="radio"
                    id="belumDibayar"
                    name="pembiayaan"
                    value="Belum Dibayar"
                    checked={currentItem.pembiayaan === 'Belum Dibayar'}
                    onChange={(e) => handleChange(e, 'pembiayaan')}
                    style={{ width: '18px', height: '18px' }}
                  />
                  <label htmlFor="belumDibayar" style={{ 
                    fontSize: '16px', 
                    color: '#34495e',
                    fontWeight: '500'
                  }}>
                    Belum Dibayar
                  </label>
                </div>
              </div>
            </div>
            
            <div>
              <label style={{ 
                fontSize: '16px', 
                color: '#34495e', 
                marginBottom: '8px', 
                display: 'block',
                fontWeight: '600'
              }}>
                Asesor
              </label>
              <input
                type="text"
                value={currentItem.asesor}
                onChange={(e) => handleChange(e, 'asesor')}
                style={{
                  padding: '15px',
                  border: '2.5px solid #d6d8db',
                  borderRadius: '8px',
                  fontSize: '16px',
                  width: '100%',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => e.target.style.borderColor = '#fd7e14'}
                onBlur={(e) => e.target.style.borderColor = '#d6d8db'}
                placeholder="Nama asesor..."
              />
            </div>
            
            <div>
              <label style={{ 
                fontSize: '16px', 
                color: '#34495e', 
                marginBottom: '8px', 
                display: 'block',
                fontWeight: '600'
              }}>
                Jumlah Peserta
              </label>
              <input
                type="number"
                value={currentItem.jumlahPeserta}
                onChange={(e) => handleChange(e, 'jumlahPeserta')}
                min="0"
                style={{
                  padding: '15px',
                  border: '2.5px solid #d6d8db',
                  borderRadius: '8px',
                  fontSize: '16px',
                  width: '100%',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => e.target.style.borderColor = '#fd7e14'}
                onBlur={(e) => e.target.style.borderColor = '#d6d8db'}
                placeholder="0"
              />
            </div>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '20px',
          paddingTop: '20px',
          borderTop: '2px solid #e9ecef'
        }}>
          <button
            onClick={onBack}
            style={{
              padding: '15px 30px',
              backgroundColor: '#6c757d',
              color: '#ffffff',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(108, 117, 125, 0.3)',
              fontSize: '16px',
              fontWeight: '600',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#5a6268';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(108, 117, 125, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#6c757d';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(108, 117, 125, 0.3)';
            }}
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            style={{
              padding: '15px 30px',
              backgroundColor: '#fd7e14',
              color: '#ffffff',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(253, 126, 20, 0.3)',
              fontSize: '16px',
              fontWeight: '600',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#e96a00';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(253, 126, 20, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#fd7e14';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(253, 126, 20, 0.3)';
            }}
          >
            Simpan Data
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translate(-50%, -40%);
          }
          to { 
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
        
        @keyframes scaleIn {
          from { 
            transform: scale(0);
          }
          to { 
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default EditListAsesmen;