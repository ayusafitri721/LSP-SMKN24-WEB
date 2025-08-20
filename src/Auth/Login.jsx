import { useState } from 'react';

function Login({ goToDashboard }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    nik: '',
    email: ''
  });

  const [error, setError] = useState('');

  // Dummy user data
  const dummyUsers = [
    {
      email: 'admin@admin.com',
      password: 'admin123',
      username: 'admin',
      nik: '1234567890'
    },
    {
      email: 'user@user.com',
      password: 'user123',
      username: 'user',
      nik: '0987654321'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = () => {
    console.log('Login data:', formData);
    
    // Check if email and password match dummy data
    const user = dummyUsers.find(u => 
      u.email === formData.email && u.password === formData.password
    );

    if (user) {
      console.log('Login successful:', user);
      if (goToDashboard) goToDashboard(); // Navigate to dashboard using prop
      setError('');
    } else {
      setError('Invalid email or password. Try admin@admin.com / admin123 or user@user.com / user123');
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

          {/* Demo credentials info */}
          <div style={{
            backgroundColor: '#f0f9ff',
            border: '1px solid #0ea5e9',
            borderRadius: '10px',
            padding: '12px',
            marginBottom: '20px',
            textAlign: 'left'
          }}>
            <p style={{ fontSize: '11px', color: '#0369a1', fontWeight: '600', marginBottom: '6px' }}>
              Demo Credentials:
            </p>
            <p style={{ fontSize: '10px', color: '#0369a1', margin: '2px 0' }}>
              Email: admin@admin.com | Pass: admin123
            </p>
            <p style={{ fontSize: '10px', color: '#0369a1', margin: '2px 0' }}>
              Email: user@user.com | Pass: user123
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
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;