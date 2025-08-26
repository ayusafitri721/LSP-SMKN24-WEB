import React from 'react';

// Base Modal Wrapper
const ModalWrapper = ({ isVisible, onClose, children, preventCloseOnBackdrop = false }) => {
  if (!isVisible) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && !preventCloseOnBackdrop) {
      onClose?.();
    }
  };

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  };

  const modalContentStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '40px 30px',
    textAlign: 'center',
    width: '320px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    position: 'relative'
  };

  return (
    <div style={modalOverlayStyle} onClick={handleBackdropClick}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

// Confirmation Modal (Delete, etc.)
const ConfirmationModal = ({ 
  isVisible, 
  onConfirm, 
  onCancel, 
  title, 
  message,
  confirmText = "Lanjutkan",
  cancelText = "Batal",
  confirmButtonColor = "#dc3545",
  icon = "warning"
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'warning':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="65" height="85" viewBox="0 0 24 24">
            <path
              d="M12 22s8-7.58 8-13a8 8 0 1 0-16 0c0 5.42 8 13 8 13z"
              fill="white"
              stroke="#dc3545"
              strokeWidth="2"
            />
            <rect x="11" y="6" width="2" height="5" fill="#dc3545" />
            <circle cx="12" cy="13.5" r="1.2" fill="#dc3545" />
          </svg>
        );
      case 'danger':
        return (
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#dc3545',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 25px auto'
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="2"/>
              <path d="M15 9l-6 6M9 9l6 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <ModalWrapper isVisible={isVisible} onClose={onCancel} preventCloseOnBackdrop>
      <h2 style={{
        fontSize: '20px',
        fontWeight: '600',
        color: '#333333',
        margin: '0 0 25px 0',
        lineHeight: '1.3'
      }}>
        {title}
      </h2>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "25px" }}>
        {getIcon()}
      </div>

      {message && (
        <p style={{
          fontSize: '16px',
          color: '#666666',
          margin: '0 0 25px 0',
          lineHeight: '1.4'
        }}>
          {message}
        </p>
      )}

      <div style={{
        display: 'flex',
        gap: '1px',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#e0e0e0'
      }}>
        <button
          onClick={onConfirm}
          style={{
            flex: 1,
            padding: '15px 20px',
            backgroundColor: confirmButtonColor,
            border: 'none',
            fontSize: '16px',
            fontWeight: '500',
            color: '#ffffff',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => {
            const color = confirmButtonColor === '#dc3545' ? '#c82333' : '#b8860b';
            e.target.style.backgroundColor = color;
          }}
          onMouseLeave={(e) => e.target.style.backgroundColor = confirmButtonColor}
        >
          {confirmText}
        </button>
        
        <button
          onClick={onCancel}
          style={{
            flex: 1,
            padding: '15px 20px',
            backgroundColor: '#f8f9fa',
            border: 'none',
            fontSize: '16px',
            fontWeight: '500',
            color: '#333333',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#e9ecef'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#f8f9fa'}
        >
          {cancelText}
        </button>
      </div>
    </ModalWrapper>
  );
};

// Success Modal
const SuccessModal = ({ 
  isVisible, 
  onClose, 
  title, 
  message,
  autoClose = true,
  autoCloseDelay = 1500,
  buttonText = "Okay!",
  iconColor = "#28a745"
}) => {
  React.useEffect(() => {
    if (isVisible && autoClose) {
      const timer = setTimeout(() => {
        onClose?.();
      }, autoCloseDelay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, autoClose, autoCloseDelay, onClose]);

  return (
    <ModalWrapper isVisible={isVisible} onClose={onClose}>
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: iconColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 25px auto'
      }}>
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 6L9 17l-5-5"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h2 style={{
        fontSize: '22px',
        fontWeight: '600',
        color: '#333333',
        margin: '0 0 25px 0',
        lineHeight: '1.4',
        paddingBottom: '25px',
        borderBottom: '1px solid #e0e0e0'
      }}>
        {title}
      </h2>

      {message && (
        <p style={{
          fontSize: '16px',
          color: '#666666',
          margin: '0 0 20px 0',
          fontFamily: 'inherit'
        }}>
          {message}
        </p>
      )}

      {!autoClose && (
        <div
          onClick={onClose}
          style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#333333',
            cursor: 'pointer',
            fontFamily: 'inherit',
            userSelect: 'none'
          }}
        >
          {buttonText}({autoCloseDelay})
        </div>
      )}
    </ModalWrapper>
  );
};

// Info Modal
const InfoModal = ({ 
  isVisible, 
  onClose, 
  title, 
  message,
  buttonText = "OK",
  iconColor = "#4A90E2"
}) => {
  return (
    <ModalWrapper isVisible={isVisible} onClose={onClose}>
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: iconColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 25px auto'
      }}>
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="2"/>
          <path d="M12 16v-4M12 8h.01" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      <h2 style={{
        fontSize: '22px',
        fontWeight: '600',
        color: '#333333',
        margin: '0 0 25px 0',
        lineHeight: '1.4'
      }}>
        {title}
      </h2>

      {message && (
        <p style={{
          fontSize: '16px',
          color: '#666666',
          margin: '0 0 25px 0',
          lineHeight: '1.4'
        }}>
          {message}
        </p>
      )}

      <button
        onClick={onClose}
        style={{
          backgroundColor: iconColor,
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#357abd'}
        onMouseLeave={(e) => e.target.style.backgroundColor = iconColor}
      >
        {buttonText}
      </button>
    </ModalWrapper>
  );
};

// Loading Modal
const LoadingModal = ({ 
  isVisible, 
  message = "Loading...",
  color = "#ff6600"
}) => {
  return (
    <ModalWrapper isVisible={isVisible} preventCloseOnBackdrop>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: `4px solid #f3f3f3`,
          borderTop: `4px solid ${color}`,
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        
        <p style={{
          fontSize: '16px',
          color: '#666666',
          margin: 0,
          fontWeight: '500'
        }}>
          {message}
        </p>
      </div>
      
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </ModalWrapper>
  );
};

// Export all components
export {
  ModalWrapper,
  ConfirmationModal,
  SuccessModal,
  InfoModal,
  LoadingModal
};

// Usage Examples:
/*

// Delete Confirmation
<ConfirmationModal
  isVisible={showDeleteModal}
  onConfirm={handleDelete}
  onCancel={() => setShowDeleteModal(false)}
  title="Anda Yakin Menghapus Assessment ini?"
  icon="warning"
/>

// Success Notification
<SuccessModal
  isVisible={showSuccess}
  onClose={() => setShowSuccess(false)}
  title="Data Berhasil Dihapus!"
  message="Mengarahkan ke halaman asesmen..."
/>

// Info Modal
<InfoModal
  isVisible={showInfo}
  onClose={() => setShowInfo(false)}
  title="Informasi"
  message="Ini adalah pesan informasi."
/>

// Loading Modal
<LoadingModal
  isVisible={loading}
  message="Menyimpan data..."
  color="#ff7849"
/>

*/