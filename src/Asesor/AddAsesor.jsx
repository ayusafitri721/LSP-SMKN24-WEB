import React, { useState } from 'react';
import { InputField, SelectField } from '../components/FieldComponents';
import { useAsesor } from '../context/AsesorContext';

function AddAsesor({ onBack, onSave, onCancel }) {
  const { addAsesor } = useAsesor();
  const [formData, setFormData] = useState({
    nama_lengkap: '',
    no_registrasi: '',
    jenis_kelamin: '',
    email: '',
    no_telepon: '',
    kompetensi: '',
    username: '',
    password: ''
  });
  const [ktpFile, setKtpFile] = useState(null);
  const [kkFile, setKkFile] = useState(null);
  const [sertifikasiFiles, setSertifikasiFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [showNotif, setShowNotif] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleKtpChange = (e) => {
    const file = e.target.files[0];
    setKtpFile(file);
    if (errors['ktp']) setErrors(prev => ({ ...prev, ktp: '' }));
  };

  const handleKkChange = (e) => {
    const file = e.target.files[0];
    setKkFile(file);
    if (errors['kk']) setErrors(prev => ({ ...prev, kk: '' }));
  };

  const handleSertifikasiChange = (e) => {
    const files = Array.from(e.target.files);
    setSertifikasiFiles(files);
    if (errors['sertifikasi']) setErrors(prev => ({ ...prev, sertifikasi: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const data = new FormData();
        Object.keys(formData).forEach(key => data.append(key, formData[key]));

        if (ktpFile) data.append('attachments[]', ktpFile);
        if (kkFile) data.append('attachments[]', kkFile);
        sertifikasiFiles.forEach(file => data.append('attachments[]', file));

        await addAsesor(data);
        setShowNotif(true);
      } catch (error) {
        console.error("Gagal menambahkan asesor:", error);
      }
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nama_lengkap.trim()) newErrors.nama_lengkap = 'Nama lengkap harus diisi';
    if (!formData.no_registrasi.trim()) newErrors.no_registrasi = 'No registrasi harus diisi';
    if (!formData.jenis_kelamin.trim()) newErrors.jenis_kelamin = 'Jenis kelamin harus dipilih';
    if (!formData.email.trim()) newErrors.email = 'Email harus diisi';
    if (!formData.no_telepon.trim()) newErrors.no_telepon = 'No telepon harus diisi';
    if (!formData.kompetensi.trim()) newErrors.kompetensi = 'Kompetensi harus diisi';
    if (!formData.username.trim()) newErrors.username = 'Username harus diisi';
    if (!formData.password.trim()) newErrors.password = 'Password harus diisi';
    if (!ktpFile) newErrors.ktp = 'KTP harus diupload';
    if (!kkFile) newErrors.kk = 'KK harus diupload';
    if (sertifikasiFiles.length === 0) newErrors.sertifikasi = 'Minimal 1 sertifikasi harus diupload';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCancel = () => {
    setFormData({
      nama_lengkap: '',
      no_registrasi: '',
      jenis_kelamin: '',
      email: '',
      no_telepon: '',
      kompetensi: '',
      username: '',
      password: ''
    });
    setKtpFile(null);
    setKkFile(null);
    setSertifikasiFiles([]);
    setErrors({});
    onCancel?.() || onBack?.();
  };

  return (
    <div style={{ 
      padding: '40px', 
      fontFamily: "'Poppins', sans-serif", 
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5',
      backgroundImage: 'linear-gradient(to bottom, #f9f9f9, #e9ecef)'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '30px', 
        color: '#333',
        fontWeight: '600',
        fontSize: '28px'
      }}>TAMBAHKAN DATA ASESOR BARU</h1>
      
      <form onSubmit={handleSubmit} style={{ 
        maxWidth: '700px', 
        margin: '0 auto', 
        background: '#fff', 
        padding: '30px', 
        borderRadius: '15px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <InputField 
            label="Nama Lengkap" 
            name="nama_lengkap" 
            value={formData.nama_lengkap} 
            onChange={handleChange} 
            required 
            error={errors.nama_lengkap} 
          />
          <InputField 
            label="No Registrasi" 
            name="no_registrasi" 
            value={formData.no_registrasi} 
            onChange={handleChange} 
            required 
            error={errors.no_registrasi} 
          />
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px' }}>
          <SelectField 
            label="Jenis Kelamin" 
            name="jenis_kelamin"
            value={formData.jenis_kelamin} 
            onChange={handleChange} 
            options={[
              { value: '', label: 'Pilih Jenis Kelamin' },
              { value: 'Laki-laki', label: 'Laki-laki' },
              { value: 'Perempuan', label: 'Perempuan' }
            ]}
            required
            error={errors.jenis_kelamin}
          />
          <InputField 
            label="Email" 
            name="email" 
            type="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            error={errors.email} 
          />
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px' }}>
          <InputField 
            label="No Telepon" 
            name="no_telepon" 
            type="tel" 
            value={formData.no_telepon} 
            onChange={handleChange} 
            required 
            error={errors.no_telepon} 
          />
          <InputField 
            label="Kompetensi" 
            name="kompetensi" 
            value={formData.kompetensi} 
            onChange={handleChange} 
            required 
            error={errors.kompetensi} 
          />
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px' }}>
          <InputField 
            label="Username" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            required 
            error={errors.username} 
          />
          <InputField 
            label="Password" 
            name="password" 
            type="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
            error={errors.password} 
          />
        </div>
        
        {/* Upload Section */}
        <div style={{ marginTop: '25px', borderTop: '1px solid #eee', paddingTop: '25px' }}>
          <h3 style={{ marginBottom: '15px', color: '#555' }}>Upload Dokumen</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {/* KTP Upload */}
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                KTP <span style={{ color: 'red' }}>*</span>
              </label>
              <div style={{
                border: errors.ktp ? '2px dashed #ff4d4f' : '2px dashed #ccc',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
                cursor: 'pointer',
                position: 'relative'
              }}>
                <input 
                  type="file" 
                  onChange={handleKtpChange} 
                  accept=".pdf,.jpg,.jpeg,.png" 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                    cursor: 'pointer'
                  }} 
                />
                <div style={{ fontSize: '40px', color: '#6c757d' }}>📄</div>
                <p style={{ margin: '8px 0 0', fontSize: '14px' }}>
                  {ktpFile ? ktpFile.name : 'Klik untuk upload KTP'}
                </p>
                <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#6c757d' }}>
                  PDF, JPG, atau PNG
                </p>
              </div>
              {errors.ktp && <span style={{ color: '#ff4d4f', fontSize: '13px' }}>{errors.ktp}</span>}
            </div>
            
            {/* KK Upload */}
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Kartu Keluarga (KK) <span style={{ color: 'red' }}>*</span>
              </label>
              <div style={{
                border: errors.kk ? '2px dashed #ff4d4f' : '2px dashed #ccc',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
                cursor: 'pointer',
                position: 'relative'
              }}>
                <input 
                  type="file" 
                  onChange={handleKkChange} 
                  accept=".pdf,.jpg,.jpeg,.png" 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                    cursor: 'pointer'
                  }} 
                />
                <div style={{ fontSize: '40px', color: '#6c757d' }}>📄</div>
                <p style={{ margin: '8px 0 0', fontSize: '14px' }}>
                  {kkFile ? kkFile.name : 'Klik untuk upload KK'}
                </p>
                <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#6c757d' }}>
                  PDF, JPG, atau PNG
                </p>
              </div>
              {errors.kk && <span style={{ color: '#ff4d4f', fontSize: '13px' }}>{errors.kk}</span>}
            </div>
          </div>
          
          {/* Sertifikasi Upload */}
          <div style={{ marginTop: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Sertifikasi (Bisa lebih dari 1) <span style={{ color: 'red' }}>*</span>
            </label>
            <div style={{
              border: errors.sertifikasi ? '2px dashed #ff4d4f' : '2px dashed #ccc',
              borderRadius: '8px',
              padding: '15px',
              textAlign: 'center',
              backgroundColor: '#f9f9f9',
              cursor: 'pointer',
              position: 'relative'
            }}>
              <input 
                type="file" 
                onChange={handleSertifikasiChange} 
                multiple 
                accept=".pdf,.jpg,.jpeg,.png" 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  cursor: 'pointer'
                }} 
              />
              <div style={{ fontSize: '40px', color: '#6c757d' }}>📑</div>
              <p style={{ margin: '8px 0 0', fontSize: '14px' }}>
                Klik untuk upload sertifikasi
              </p>
              <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#6c757d' }}>
                PDF, JPG, atau PNG (Multiple files allowed)
              </p>
            </div>
            {errors.sertifikasi && <span style={{ color: '#ff4d4f', fontSize: '13px' }}>{errors.sertifikasi}</span>}
            
            {sertifikasiFiles.length > 0 && (
              <div style={{ marginTop: '10px' }}>
                <p style={{ marginBottom: '5px', fontSize: '14px' }}>File terpilih:</p>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {sertifikasiFiles.map((file, idx) => (
                    <li key={idx} style={{ fontSize: '13px', marginBottom: '3px' }}>
                      {file.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          gap: '15px', 
          marginTop: '30px',
          paddingTop: '20px',
          borderTop: '1px solid #eee'
        }}>
          <button 
            type="button" 
            onClick={handleCancel} 
            style={{ 
              padding: '12px 25px', 
              borderRadius: '8px', 
              backgroundColor: '#6c757d', 
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#5a6268'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#6c757d'}
          >
            Batal
          </button>
          <button 
            type="submit" 
            style={{ 
              padding: '12px 25px', 
              borderRadius: '8px', 
              backgroundColor: '#fd7e14', 
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#e76f11'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#fd7e14'}
          >
            Simpan Data
          </button>
        </div>
      </form>

      {showNotif && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          backgroundColor: 'rgba(0,0,0,0.5)', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{ 
            backgroundColor: '#fff', 
            borderRadius: '15px', 
            padding: '30px', 
            textAlign: 'center',
            boxShadow: '0 5px 25px rgba(0,0,0,0.2)',
            maxWidth: '400px'
          }}>
            <div style={{ fontSize: '50px', marginBottom: '15px' }}>✅</div>
            <h2 style={{ marginBottom: '15px', color: '#333' }}>Data Berhasil Ditambahkan!</h2>
            <button 
              onClick={() => {
                setShowNotif(false);
                onSave?.({ ...formData, id: Date.now() });
                setFormData({
                  nama_lengkap: '',
                  no_registrasi: '',
                  jenis_kelamin: '',
                  email: '',
                  no_telepon: '',
                  kompetensi: '',
                  username: '',
                  password: ''
                });
                setKtpFile(null);
                setKkFile(null);
                setSertifikasiFiles([]);
                setErrors({});
              }} 
              style={{
                padding: '10px 20px',
                borderRadius: '8px',
                backgroundColor: '#fd7e14',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              Okay!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddAsesor;