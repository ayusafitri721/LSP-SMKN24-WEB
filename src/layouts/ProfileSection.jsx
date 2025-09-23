import { useEffect, useState } from 'react';
import { getMyProfile, updateMyProfile } from '../api/api';

function ProfileSection() {
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [ktpImage, setKtpImage] = useState(null);
  const [bukuTabunganImage, setBukuTabunganImage] = useState(null);
  const [sertifikatImage, setSertifikatImage] = useState(null);

  // Profile form state aligned with backend fields
  const [form, setForm] = useState({
    nama_lengkap: '',
    tempat_lahir: '',
    tanggal_lahir: '',
    alamat: '',
    no_telepon: '',
    no_ktp: '',
    jenis_kelamin: '',
    kode_pos: '',
    kualifikasi_pendidikan: '',
    email: '', // display only
    jurusan: '', // display only
  });

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await getMyProfile();
        const data = res?.data?.data || {};
        const user = data.user || {};
        const asesi = data.assesi || {};
        setForm((prev) => ({
          ...prev,
          nama_lengkap: asesi.nama_lengkap || '',
          tempat_lahir: asesi.tempat_lahir || '',
          tanggal_lahir: asesi.tanggal_lahir || '',
          alamat: asesi.alamat || '',
          no_telepon: asesi.no_telepon || '',
          no_ktp: asesi.no_ktp || '',
          jenis_kelamin: asesi.jenis_kelamin || '',
          kode_pos: asesi.kode_pos || '',
          kualifikasi_pendidikan: asesi.kualifikasi_pendidikan || '',
          email: user.email || '',
          jurusan: asesi.jurusan?.nama || '',
        }));
      } catch (e) {
        console.error('Failed to load profile', e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    padding: '20px',
    marginBottom: '20px'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '15px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    color: '#333'
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      // Only send fields accepted by backend updateSelf
      const payload = {
        nama_lengkap: form.nama_lengkap,
        tempat_lahir: form.tempat_lahir,
        tanggal_lahir: form.tanggal_lahir,
        alamat: form.alamat,
        no_telepon: form.no_telepon,
        no_ktp: form.no_ktp,
        jenis_kelamin: form.jenis_kelamin,
        kode_pos: form.kode_pos,
        kualifikasi_pendidikan: form.kualifikasi_pendidikan,
      };
      await updateMyProfile(payload);
      alert('Data profil berhasil disimpan!');
    } catch (e) {
      console.error('Gagal menyimpan profil', e);
      alert('Gagal menyimpan profil. Coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  // Function to handle image upload
  const handleImageUpload = (event, setImageFunction) => {
    const file = event.target.files[0];
    if (file) {
      // Check file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('Ukuran file terlalu besar. Maksimal 2MB.');
        return;
      }
      
      // Check file type
      if (!file.type.match('image.*')) {
        alert('Hanya file gambar yang diperbolehkan.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setImageFunction(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to create upload area
  const createUploadArea = (title, description, imageState, setImageFunction, accept = "image/*") => (
    <div style={{
      flex: 1,
      backgroundColor: '#fff',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
    }}>
      <label style={{ fontWeight: '600', marginBottom: '10px', display: 'block' }}>{title}</label>
      
      <input
        type="file"
        accept={accept}
        onChange={(e) => handleImageUpload(e, setImageFunction)}
        style={{ display: 'none' }}
        id={`upload-${title.toLowerCase().replace(/\s+/g, '-')}`}
      />
      
      <label
        htmlFor={`upload-${title.toLowerCase().replace(/\s+/g, '-')}`}
        style={{
          border: '2px dashed #e0e0e0',
          borderRadius: '12px',
          padding: imageState ? '20px' : '45px',
          textAlign: 'center',
          cursor: 'pointer',
          display: 'block',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#ff6b35';
          e.currentTarget.style.backgroundColor = '#fff5f2';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#e0e0e0';
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        {imageState ? (
          <div>
            <img 
              src={imageState} 
              alt={title}
              style={{
                maxWidth: '100%',
                maxHeight: '150px',
                borderRadius: '8px',
                marginBottom: '10px'
              }}
            />
            <p style={{ color: '#666', fontSize: '14px', margin: '5px 0' }}>Klik untuk ganti gambar</p>
          </div>
        ) : (
          <div>
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="#ccc"
              style={{ marginBottom: '10px' }}
            >
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM13.96 12.29L11.21 15.83L9.25 13.47L6.5 17H17.5L13.96 12.29Z"/>
            </svg>
            <p style={{ color: '#666', fontSize: '14px' }}>{description}</p>
            <p style={{ color: '#999', fontSize: '12px', marginTop: '5px' }}>Format: JPG, PNG, Maksimal 2MB</p>
          </div>
        )}
      </label>
    </div>
  );

  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', padding: '30px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '600' }}>PROFIL ANDA</h1>
        <p style={{ color: '#666' }}>{loading ? 'Memuat data...' : 'Lengkapi informasi profil anda'}</p>
      </div>

      {/* Foto Profil */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>Foto Profil</h2>
        
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(e, setProfileImage)}
          style={{ display: 'none' }}
          id="upload-profile"
        />
        
        <label
          htmlFor="upload-profile"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            border: '2px dashed #e0e0e0',
            borderRadius: '12px',
            padding: '20px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#ff6b35';
            e.currentTarget.style.backgroundColor = '#fff5f2';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e0e0e0';
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          {/* Profile Image Preview */}
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {profileImage ? (
              <img 
                src={profileImage} 
                alt="Profile" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%'
                }}
              />
            ) : (
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="#ccc"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            )}
            
            {/* Camera Icon Overlay */}
            <div style={{
              position: 'absolute',
              bottom: '5px',
              right: '5px',
              backgroundColor: '#ff6b35',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="white"
              >
                <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-2c.828 0 1.58.335 2.121.879l.879.879H18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3l.879-.879A3 3 0 0 1 12 5z"/>
              </svg>
            </div>
          </div>

          {/* Text Upload */}
          <div>
            <p style={{ fontWeight: '500', marginBottom: '5px' }}>
              {profileImage ? 'Klik untuk ganti foto profil' : 'Upload Foto Profil'}
            </p>
            <p style={{ fontSize: '14px', color: '#666' }}>Format PNG, JPG, Maksimal 2MB</p>
          </div>
        </label>
      </div>

      {/* Informasi Pribadi */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>Informasi Pribadi</h2>

        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>Nama Lengkap</label>
          <input type="text" style={inputStyle} value={form.nama_lengkap} onChange={handleChange('nama_lengkap')} />
        </div>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Tempat Lahir</label>
            <input type="text" style={inputStyle} value={form.tempat_lahir} onChange={handleChange('tempat_lahir')} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Tanggal Lahir</label>
            <input type="date" style={inputStyle} value={form.tanggal_lahir?.slice(0,10) || ''} onChange={handleChange('tanggal_lahir')} />
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>Alamat</label>
          <textarea style={{ ...inputStyle, minHeight: '100px' }} value={form.alamat} onChange={handleChange('alamat')} />
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Nomor HP</label>
            <input type="tel" style={inputStyle} value={form.no_telepon} onChange={handleChange('no_telepon')} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Email</label>
            <input type="email" style={inputStyle} value={form.email} disabled />
          </div>
        </div>
      </div>

      {/* Card Informasi Dokumen */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>Informasi Dokumen</h2>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Nomor KTP</label>
            <input type="text" style={inputStyle} value={form.no_ktp} onChange={handleChange('no_ktp')} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>NPWP</label>
            <input type="text" style={inputStyle} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Nomor Sertifikat Kompetensi</label>
            <input type="text" style={inputStyle} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Nomor Rekening</label>
            <input type="text" style={inputStyle} />
          </div>
        </div>
      </div>

      {/* Upload Dokumen dalam satu baris */}
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {createUploadArea('KTP', 'Upload KTP', ktpImage, setKtpImage)}
        {createUploadArea('Buku Tabungan', 'Upload Buku Tabungan', bukuTabunganImage, setBukuTabunganImage)}
        {createUploadArea('Sertifikat Kompetensi', 'Upload Sertifikat Kompetensi', sertifikatImage, setSertifikatImage)}
      </div>

      {/* Tombol Simpan */}
      <button 
        style={{
          backgroundColor: '#ff6b35',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          marginTop: '30px',
          width: '100%',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e05a2b'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff6b35'}
        disabled={loading}
        onClick={handleSave}
      >
        {loading ? 'Menyimpan...' : 'Simpan Perubahan'}
      </button>
    </div>
  );
}

export default ProfileSection;