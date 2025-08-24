import { useEffect, useState } from 'react';
import { useJurusan } from '../context/JurusanContext';
import { useAuth } from  '../context/AuthContext';
// Import gambar dari src/img/
import registerBackground from '../img/ADM_LOGIN.png';

function Register({ goToDashboard, goToLoginAsesi }) {
  const {register} = useAuth();
  const {jurusanList, loading} = useJurusan();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    jurusan_id: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear messages when user starts typing
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Register data:", formData);

    // Basic validation
    if (!formData.username || !formData.email || !formData.password || !formData.jurusan_id) {
      setError("All fields are required");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      const res = await register(formData);
      setSuccess("Registration successful!");
      console.log("API Response:", res.data);

      // misalnya langsung ke dashboard
      goToLoginAsesi?.();
    } catch (err) {
      console.error("Register error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow-x: hidden;
          }
        `
      }} />
      <div style={{
        minHeight: '100vh',
        height: '100vh',
        // Gunakan imported image
        backgroundImage: `url(${registerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '20px',
        margin: '0',
        width: '100vw',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0'
      }}>
        {/* Background layer/shadow box */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          padding: '20px',
          borderRadius: '30px',
          width: '700px',
          height: '550px',
          maxWidth: '95vw',
          position: 'absolute',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25), 0 10px 25px rgba(0, 0, 0, 0.15)',
        }}>
        </div>

        {/* Main form container */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(15px)',
          padding: '50px 60px',
          borderRadius: '25px',
          width: '650px',
          height: '500px',
          maxWidth: '90vw',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 100px rgba(255, 255, 255, 0.1)',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '600',
            color: '#333',
            marginBottom: '8px',
            letterSpacing: '-0.5px'
          }}>
            Sign up
          </h1>
          
          <p style={{
            fontSize: '14px',
            color: '#666',
            marginBottom: '25px',
            fontWeight: '400'
          }}>
            Create your account
          </p>

          {/* Error message */}
          {error && (
            <div style={{
              backgroundColor: '#fef2f2',
              border: '1px solid #f87171',
              borderRadius: '10px',
              padding: '10px',
              marginBottom: '15px',
              fontSize: '11px',
              color: '#dc2626'
            }}>
              {error}
            </div>
          )}

          {/* Success message */}
          {success && (
            <div style={{
              backgroundColor: '#f0fdf4',
              border: '1px solid #4ade80',
              borderRadius: '10px',
              padding: '10px',
              marginBottom: '15px',
              fontSize: '11px',
              color: '#16a34a'
            }}>
              {success}
            </div>
          )}

          <div style={{
            marginBottom: '25px'
          }}>
            {/* Name */}
            <div style={{ marginBottom: '20px', textAlign: 'left' }}>
              <input
                type="text"
                name="username"
                placeholder="Full Name"
                value={formData.username}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: 'none',
                  borderBottom: '2px solid #e5e7eb',
                  fontSize: '15px',
                  backgroundColor: 'transparent',
                  outline: 'none',
                  fontFamily: 'inherit',
                  color: '#333',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderBottomColor = '#f97316'}
                onBlur={(e) => e.target.style.borderBottomColor = '#e5e7eb'}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: '20px', textAlign: 'left' }}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: 'none',
                  borderBottom: '2px solid #e5e7eb',
                  fontSize: '15px',
                  backgroundColor: 'transparent',
                  outline: 'none',
                  fontFamily: 'inherit',
                  color: '#333',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderBottomColor = '#f97316'}
                onBlur={(e) => e.target.style.borderBottomColor = '#e5e7eb'}
              />
            </div>

            {/* Password */}
            <div style={{ textAlign: 'left' }}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: 'none',
                  borderBottom: '2px solid #e5e7eb',
                  fontSize: '15px',
                  backgroundColor: 'transparent',
                  outline: 'none',
                  fontFamily: 'inherit',
                  color: '#333',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderBottomColor = '#f97316'}
                onBlur={(e) => e.target.style.borderBottomColor = '#e5e7eb'}
              />
            </div>
          </div>

          {/* Select Jurusan - Updated to match other inputs */}
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <select
              name="jurusan_id"
              value={formData.jurusan_id}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '14px 18px',
                border: 'none',
                borderBottom: '2px solid #e5e7eb',
                fontSize: '15px',
                backgroundColor: 'transparent',
                outline: 'none',
                fontFamily: 'inherit',
                color: '#333',
                transition: 'border-color 0.3s ease',
                appearance: 'none', // Remove default arrow
                cursor: 'pointer'
              }}
              onFocus={(e) => e.target.style.borderBottomColor = '#f97316'}
              onBlur={(e) => e.target.style.borderBottomColor = '#e5e7eb'}
            >
              <option value="" disabled style={{ color: '#999' }}>
                Select Jurusan
              </option>
              {loading ? (
                <option disabled>Loading...</option>
              ) : (
                jurusanList.map((jurusan) => (
                  <option key={jurusan.id} value={jurusan.id}>
                    {jurusan.kode_jurusan} - {jurusan.nama_jurusan}
                  </option>
                ))
              )}
            </select>
          </div>

          {/* Submit Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <button
              onClick={handleSubmit}
              style={{
                width: '200px',
                padding: '14px',
                background: 'linear-gradient(135deg, #ff7f50, #ff6b35)',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)',
                letterSpacing: '0.5px'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.6)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(255, 107, 53, 0.4)';
              }}
            >
              Sign up
            </button>
          </div>

          {/* Link to LoginAsesi */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '13px', color: '#666', marginBottom: '10px' }}>
              Already have an account?
            </p>
            <button
              onClick={goToLoginAsesi}
              style={{
                background: 'none',
                border: 'none',
                color: '#f97316',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              Sign in as Asesi
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;