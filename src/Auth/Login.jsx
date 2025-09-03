import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import custom hook
import loginBackground from '../img/ADM_LOGIN.png';

function Login({ goToDashboard, goToRegister }) {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    input: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Fallback function jika goToRegister tidak di-pass dari parent
  const handleGoToRegister = () => {
    if (goToRegister) {
      goToRegister();
    } else {
      navigate('/auth/register');
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validasi input kosong
    if (!formData.input.trim() || !formData.password.trim()) {
      setError("Email/Username dan Password harus diisi!");
      return;
    }

    setLoading(true);
    setError(""); // Clear previous error
    
    try {
      console.log("Login data:", formData);
      
      const success = await login(formData); // langsung panggil API lewat AuthContext

      if (success) {
        goToDashboard(); // pindah ke dashboard
      } else {
        setError("Email/Username atau Password salah!");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
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
          
          /* Loading spinner animation */
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .spinner {
            animation: spin 1s linear infinite;
          }
          
          /* Mobile responsive */
          @media (max-width: 768px) {
            .main-container {
              padding: 15px !important;
            }
            .form-container {
              width: 95vw !important;
              height: auto !important;
              padding: 30px 25px !important;
            }
            .background-layer {
              width: 95vw !important;
              height: auto !important;
              min-height: 400px;
            }
            .form-title {
              font-size: 24px !important;
            }
            .submit-button {
              width: 100% !important;
              max-width: 200px;
            }
          }
          
          @media (max-width: 480px) {
            .form-container {
              width: 98vw !important;
              padding: 25px 20px !important;
            }
            .background-layer {
              width: 98vw !important;
            }
            .form-title {
              font-size: 22px !important;
            }
          }
        `
      }} />
      <div className="main-container" style={{
        minHeight: '100vh',
        height: '100vh',
        // Gunakan imported image
        backgroundImage: `url(${loginBackground})`,
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
        <div className="background-layer" style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          padding: '20px',
          borderRadius: '30px',
          width: '700px',
          height: '480px',
          maxWidth: '95vw',
          position: 'absolute',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25), 0 10px 25px rgba(0, 0, 0, 0.15)',
        }}>
        </div>

        {/* Main form container */}
        <div className="form-container" style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(15px)',
          padding: '50px 60px',
          borderRadius: '25px',
          width: '650px',
          height: '430px',
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
          <div>
            <h1 className="form-title" style={{
              fontSize: '28px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '8px',
              letterSpacing: '-0.5px'
            }}>
              Sign in
            </h1>
            
            <p style={{
              fontSize: '14px',
              color: '#666',
              marginBottom: '25px',
              fontWeight: '400'
            }}>
              Sign in your account
            </p>
          </div>

          {/* Error message */}
          {error && (
            <div style={{
              backgroundColor: '#fef2f2',
              border: '1px solid #f87171',
              borderRadius: '10px',
              padding: '10px',
              marginBottom: '15px',
              fontSize: '11px',
              color: '#dc2626',
              textAlign: 'center',
              fontWeight: '500'
            }}>
              {error}
            </div>
          )}

          <div style={{
            marginBottom: '25px'
          }}>
            {/* Email */}
            <div style={{ marginBottom: '20px', textAlign: 'left' }}>
              <input
                type="email"
                name="input"
                placeholder="Email / Username"
                value={formData.input}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: 'none',
                  borderBottom: '2px solid #e5e7eb',
                  fontSize: '15px',
                  backgroundColor: 'transparent',
                  outline: 'none',
                  fontFamily: 'inherit',
                  color: loading ? '#999' : '#333',
                  transition: 'border-color 0.3s ease',
                  cursor: loading ? 'not-allowed' : 'text'
                }}
                onFocus={(e) => !loading && (e.target.style.borderBottomColor = '#f97316')}
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
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: 'none',
                  borderBottom: '2px solid #e5e7eb',
                  fontSize: '15px',
                  backgroundColor: 'transparent',
                  outline: 'none',
                  fontFamily: 'inherit',
                  color: loading ? '#999' : '#333',
                  transition: 'border-color 0.3s ease',
                  cursor: loading ? 'not-allowed' : 'text'
                }}
                onFocus={(e) => !loading && (e.target.style.borderBottomColor = '#f97316')}
                onBlur={(e) => e.target.style.borderBottomColor = '#e5e7eb'}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <button
              className="submit-button"
              onClick={handleSubmit}
              disabled={loading}
              style={{
                width: '200px',
                padding: '14px',
                background: loading 
                  ? 'linear-gradient(135deg, #d1d5db, #9ca3af)' 
                  : 'linear-gradient(135deg, #ff7f50, #ff6b35)',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: loading 
                  ? '0 4px 15px rgba(156, 163, 175, 0.4)' 
                  : '0 4px 15px rgba(255, 107, 53, 0.4)',
                letterSpacing: '0.5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
              onMouseOver={(e) => {
                if (!loading) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.6)';
                }
              }}
              onMouseOut={(e) => {
                if (!loading) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(255, 107, 53, 0.4)';
                }
              }}
            >
              {loading && (
                <div
                  className="spinner"
                  style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderTop: '2px solid white',
                    borderRadius: '50%'
                  }}
                />
              )}
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>

          {/* Link to Register */}
          <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <p style={{ fontSize: '13px', color: '#666', marginBottom: '0px' }}>
              Don't have an account?
            </p>
            <button
              onClick={handleGoToRegister}
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
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;