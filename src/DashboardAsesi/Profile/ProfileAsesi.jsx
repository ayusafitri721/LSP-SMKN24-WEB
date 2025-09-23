import React, { useState, useEffect } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { getProfileSelf, updateProfileSelf } from '../../api/api';

const ProfileAsesi = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    user: { username: '', email: '', jurusan_id: null, role: '' },
    assesi: {
      nama_lengkap: '',
      tempat_lahir: '',
      tanggal_lahir: '',
      alamat: '',
      no_telepon: '',
      jenis_kelamin: '',
      kode_pos: '',
      kualifikasi_pendidikan: '',
      no_ktp: '',
    }
  });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await getProfileSelf();
        const data = res?.data?.data || {};
        setProfile({
          user: data.user || profile.user,
          assesi: {
            ...profile.assesi,
            ...(data.assesi || {}),
          },
        });
      } catch (e) {
        // ignore
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const styles = {
    container: {
      backgroundColor: '#f5f5f5',
      padding: '20px',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      backgroundImage: 'linear-gradient(to top, rgba(255, 140, 0, 0.7), rgba(255, 140, 0, 0.7)), url("/src/img/kontak.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '180px',
      borderRadius: '15px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    },
    mainContent: {
      padding: isMobile ? '0 20px' : '0 50px',
      maxWidth: '1000px',
      margin: '0 auto',
      position: 'relative',
    },
    title: {
      textAlign: 'center',
      color: '#ff8c00',
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '30px',
    },
    gridContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
    },
    panel: {
      flex: '1',
      minWidth: '250px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    card: {
      backgroundColor: '#fff',
      padding: '15px',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },
    cardWithBorder: {
      backgroundColor: '#fff',
      padding: '15px',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      borderLeft: '5px solid #ff8c00',
    },
    centerCard: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      textAlign: 'center',
      minWidth: '200px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    photoPlaceholder: {
      width: '100px',
      height: '100px',
      backgroundColor: '#f0f0f0',
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto 10px',
      overflow: 'hidden',
    },
    statusBarContainer: {
      textAlign: 'center',
      marginTop: '30px',
    },
    statusBar: {
      backgroundColor: '#fff',
      display: 'inline-block',
      padding: '15px 40px',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      color: '#2C94FF',
      fontSize: '1rem',
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      width: '100%',
      boxSizing: 'border-box'
    },
    editButtonContainer: {
      textAlign: 'right',
      marginTop: '20px',
    },
    editButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#ff8c00',
      fontSize: '1rem',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      cursor: 'pointer'
    },
  };

  return (
    <div style={styles.container}>
      {/* Header dengan gambar latar belakang */}
      <div style={styles.header}>
        <h1 style={{ color: 'white', fontSize: '48px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', letterSpacing: '2px' }}>
          MyLSP
        </h1>
      </div>

      {/* Konten Utama */}
      <div style={styles.mainContent}>
        <h2 style={styles.title}>Profil Anda</h2>
        {loading ? (
          <div style={{ textAlign: 'center', color: '#666', marginBottom: 20 }}>Memuat profil...</div>
        ) : null}
        
        {/* Grid Profil */}
        <div style={styles.gridContainer}>
          {/* Panel Kiri */}
          <div style={styles.panel}>
            <div style={styles.cardWithBorder}>
              <p style={{ margin: '0', fontSize: '0.8rem', color: '#666' }}>Jurusan</p>
              <h4 style={{ margin: '5px 0 0', fontSize: '1rem', fontWeight: 'normal' }}>{profile?.assesi?.jurusan?.nama_jurusan || '—'}</h4>
            </div>
            <div style={styles.cardWithBorder}>
              <p style={{ margin: '0', fontSize: '0.8rem', color: '#666' }}>Kelas</p>
              <h4 style={{ margin: '5px 0 0', fontSize: '1rem', fontWeight: 'normal' }}>—</h4>
            </div>
            <div style={styles.cardWithBorder}>
              <p style={{ margin: '0', fontSize: '0.8rem', color: '#666' }}>Jenis Kelamin</p>
              {editMode ? (
                <select
                  value={profile.assesi.jenis_kelamin || ''}
                  onChange={(e) => setProfile(p => ({...p, assesi: {...p.assesi, jenis_kelamin: e.target.value}}))}
                  style={{ width: '100%', padding: 6 }}
                >
                  <option value="">—</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              ) : (
                <h4 style={{ margin: '5px 0 0', fontSize: '1rem', fontWeight: 'normal' }}>{profile.assesi.jenis_kelamin || '—'}</h4>
              )}
            </div>
          </div>

          {/* Kartu Foto dan Nama di Tengah */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={styles.centerCard}>
              <div style={styles.photoPlaceholder}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#ccc"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.69 0-5.46 1.48-6 4H6c.54-2.52 3.31-4 6-4s5.46 1.48 6 4h.01c-.54-2.52-3.31-4-6-4zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/></svg>
              </div>
              {editMode ? (
                <input
                  type="text"
                  value={profile.assesi.nama_lengkap || ''}
                  onChange={(e) => setProfile(p => ({...p, assesi: {...p.assesi, nama_lengkap: e.target.value}}))}
                  style={{ margin: 0, fontSize: '0.9rem', color: '#333', width: '100%', border: '1px solid #ddd', padding: 6 }}
                />
              ) : (
                <p style={{ margin: '0', fontSize: '0.9rem', color: '#333' }}>
                  {profile.assesi.nama_lengkap || '—'}
                </p>
              )}
            </div>
          </div>

          {/* Panel Kanan */}
          <div style={styles.panel}>
            <div style={styles.cardWithBorder}>
              <p style={{ margin: '0', fontSize: '0.8rem', color: '#666' }}>Tanggal lahir</p>
              {editMode ? (
                <input type="date" value={(profile.assesi.tanggal_lahir||'').substring(0,10)} onChange={(e) => setProfile(p => ({...p, assesi: {...p.assesi, tanggal_lahir: e.target.value}}))} style={{ width: '100%', padding: 6 }} />
              ) : (
                <h4 style={{ margin: '5px 0 0', fontSize: '1rem', fontWeight: 'normal' }}>{profile.assesi.tanggal_lahir ? String(profile.assesi.tanggal_lahir).substring(0,10) : '—'}</h4>
              )}
            </div>
            <div style={styles.cardWithBorder}>
              <p style={{ margin: '0', fontSize: '0.8rem', color: '#666' }}>Alamat</p>
              {editMode ? (
                <input type="text" value={profile.assesi.alamat || ''} onChange={(e) => setProfile(p => ({...p, assesi: {...p.assesi, alamat: e.target.value}}))} style={{ width: '100%', padding: 6 }} />
              ) : (
                <h4 style={{ margin: '5px 0 0', fontSize: '1rem', fontWeight: 'normal' }}>{profile.assesi.alamat || '—'}</h4>
              )}
            </div>
            <div style={styles.cardWithBorder}>
              <p style={{ margin: '0', fontSize: '0.8rem', color: '#666' }}>No. Telepon</p>
              {editMode ? (
                <input type="text" value={profile.assesi.no_telepon || ''} onChange={(e) => setProfile(p => ({...p, assesi: {...p.assesi, no_telepon: e.target.value}}))} style={{ width: '100%', padding: 6 }} />
              ) : (
                <h4 style={{ margin: '5px 0 0', fontSize: '1rem', fontWeight: 'normal' }}>{profile.assesi.no_telepon || '—'}</h4>
              )}
            </div>
            <div style={styles.cardWithBorder}>
              <p style={{ margin: '0', fontSize: '0.8rem', color: '#666' }}>Kode Pos</p>
              {editMode ? (
                <input type="text" value={profile.assesi.kode_pos || ''} onChange={(e) => setProfile(p => ({...p, assesi: {...p.assesi, kode_pos: e.target.value}}))} style={{ width: '100%', padding: 6 }} />
              ) : (
                <h4 style={{ margin: '5px 0 0', fontSize: '1rem', fontWeight: 'normal' }}>{profile.assesi.kode_pos || '—'}</h4>
              )}
            </div>
            <div style={styles.cardWithBorder}>
              <p style={{ margin: '0', fontSize: '0.8rem', color: '#666' }}>Kualifikasi Pendidikan</p>
              {editMode ? (
                <input type="text" value={profile.assesi.kualifikasi_pendidikan || ''} onChange={(e) => setProfile(p => ({...p, assesi: {...p.assesi, kualifikasi_pendidikan: e.target.value}}))} style={{ width: '100%', padding: 6 }} />
              ) : (
                <h4 style={{ margin: '5px 0 0', fontSize: '1rem', fontWeight: 'normal' }}>{profile.assesi.kualifikasi_pendidikan || '—'}</h4>
              )}
            </div>
          </div>
        </div>
        
        {/* Status Bar */}
        <div style={styles.statusBarContainer}>
          <div style={styles.statusBar}>
            PESERTA UJI KOMPETENSI SMKN 24 JAKARTA - ASESI
          </div>
        </div>

        {/* Tombol Edit */}
        <div style={styles.editButtonContainer}>
          {!editMode ? (
            <button style={styles.editButton} onClick={() => setEditMode(true)}>
              <FaPencilAlt /> EDIT
            </button>
          ) : (
            <button
              style={{ ...styles.editButton, color: saving ? '#aaa' : '#10b981' }}
              onClick={async () => {
                try {
                  setSaving(true);
                  const payload = {
                    nama_lengkap: profile.assesi.nama_lengkap || undefined,
                    tempat_lahir: profile.assesi.tempat_lahir || undefined,
                    tanggal_lahir: profile.assesi.tanggal_lahir || undefined,
                    alamat: profile.assesi.alamat || undefined,
                    no_telepon: profile.assesi.no_telepon || undefined,
                    jenis_kelamin: profile.assesi.jenis_kelamin || undefined,
                    kode_pos: profile.assesi.kode_pos || undefined,
                    kualifikasi_pendidikan: profile.assesi.kualifikasi_pendidikan || undefined,
                    no_ktp: profile.assesi.no_ktp || undefined,
                  };
                  await updateProfileSelf(payload);
                  setEditMode(false);
                } catch (e) {
                  alert('Gagal menyimpan profil.');
                } finally {
                  setSaving(false);
                }
              }}
              disabled={saving}
            >
              {saving ? 'Menyimpan...' : 'SIMPAN'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileAsesi;