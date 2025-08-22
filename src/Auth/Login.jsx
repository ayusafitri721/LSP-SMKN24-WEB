import { useState } from 'react';

// Main application component
export default function App() {
  // Simple state to control which component is displayed
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This is the component that handles the login API request
  function Login({ goToDashboard }) {
    // State to hold form data and messages
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
    
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Handles changes in the input fields
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({ ...prevState, [name]: value }));
      // Clear error when user starts typing
      if (error) setError('');
    };

    // Handles the form submission
    const handleSubmit = async () => {
      // Basic validation
      if (!formData.email || !formData.password) {
        setError('Email dan password harus diisi.');
        return;
      }

      setIsLoading(true);
      setError('');

      // Define the API endpoint and the body for login
      // PERINGATAN: Jalur ini sekarang dipetakan ke URL API Anda yang sebenarnya melalui konfigurasi proxy Vite.
      // Kami menghapus '/proxy' dari URL karena Vite sudah menangani hal itu.
      const proxyUrl = '/api/auth/login'; 
      const requestBody = {
        input: formData.email,
        password: formData.password
      };

      try {
        console.log("Request Body:", requestBody);

        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        const result = await response.json();

        // Check if the response is ok (status 200-299)
        if (!response.ok) {
          const errorText = response.statusText || 'Error tidak diketahui';
          const responseBody = await response.text();
          try {
            const result = JSON.parse(responseBody);
            setError(result.message || 'Email atau password salah. Silakan coba lagi.');
          } catch (e) {
            setError(`Error: ${response.status} ${errorText}. Server mengembalikan respons yang tidak dapat diurai.`);
            console.error('Failed to parse JSON:', e);
            console.error('Server response:', responseBody);
          }
          return;
        }

         
        // API call was successful
        setError('');
        if (result.user?.role === "admin") {
          if (goToDashboard) goToDashboard(); 
        } else {
          setError("Anda tidak memiliki akses sebagai admin.");
        }

      } catch (err) {
        // Handle network errors (e.g., no internet connection)
        console.error('Fetch error:', err);
        setError('Kesalahan jaringan. Tidak dapat terhubung ke server.');
      } finally {
        setIsLoading(false);
      }
    };

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleSubmit();
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
          backgroundImage: "url('src/img/ADM_LOGIN.png')",
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
            height: '450px',
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
            height: '400px',
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

            <div style={{
              marginBottom: '25px'
            }}>
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
                  disabled={isLoading}
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
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)',
                  letterSpacing: '0.5px',
                  opacity: isLoading ? 0.7 : 1,
                }}
                onMouseOver={(e) => {
                  if (!isLoading) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.6)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isLoading) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(255, 107, 53, 0.4)';
                  }
                }}
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'Sign in'}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      {!isLoggedIn ? (
        <Login goToDashboard={() => setIsLoggedIn(true)} />
      ) : (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          background: '#f3f4f6',
          flexDirection: 'column',
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            padding: '50px',
            borderRadius: '25px',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
            textAlign: 'center',
            maxWidth: '90vw'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: '#22c55e',
              marginBottom: '1rem'
            }}>
              Login Success!
            </h2>
            <p style={{
              color: '#6b7280',
              fontSize: '1rem',
              marginBottom: '1.5rem'
            }}>
              Anda berhasil login. Aplikasi dapat dilanjutkan ke halaman dashboard.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
