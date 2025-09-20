import React from 'react';

// Base Field Component
const BaseField = ({ label, required = false, error, children }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label
        style={{
          display: 'block',
          marginBottom: '8px',
          fontWeight: '500',
          color: '#333',
          fontSize: '14px',
        }}
      >
        {label} {required && '*'}
      </label>
      {children}
      {error && (
        <p style={{
          color: '#dc3545',
          fontSize: '12px',
          marginTop: '4px',
          margin: '4px 0 0 0'
        }}>
          {error}
        </p>
      )}
    </div>
  );
};

// Input Field Component
export const InputField = ({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  required = false, 
  error,
  maxLength,
  ...props 
}) => {
  return (
    <BaseField label={label} required={required} error={error}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        style={{
          width: '100%',
          padding: '8px 12px',
          border: error ? '1px solid #dc3545' : '1px solid #ccc',
          borderRadius: '8px',
          fontSize: '13px',
          boxSizing: 'border-box',
          backgroundColor: '#f8f9fa',
        }}
        {...props}
      />
    </BaseField>
  );
};

// Select Field Component
export const SelectField = ({ 
  label, 
  value, 
  onChange, 
  options, 
  placeholder = "Pilih...",
  required = false, 
  error,
  ...props 
}) => {
  return (
    <BaseField label={label} required={required} error={error}>
      <select
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          padding: '8px 12px',
          border: error ? '1px solid #dc3545' : '1px solid #ccc',
          borderRadius: '8px',
          fontSize: '13px',
          boxSizing: 'border-box',
          backgroundColor: '#f8f9fa',
        }}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </BaseField>
  );
};

// Textarea Field Component
export const TextareaField = ({ 
  label, 
  value, 
  onChange, 
  placeholder,
  rows = 3,
  required = false, 
  error,
  ...props 
}) => {
  return (
    <BaseField label={label} required={required} error={error}>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        style={{
          width: '100%',
          padding: '8px 12px',
          border: error ? '1px solid #dc3545' : '1px solid #ccc',
          borderRadius: '8px',
          fontSize: '13px',
          boxSizing: 'border-box',
          backgroundColor: '#f8f9fa',
          resize: 'vertical',
          fontFamily: 'inherit'
        }}
        {...props}
      />
    </BaseField>
  );
};

// Radio Field Component
export const RadioField = ({ 
  label, 
  name,
  value, 
  onChange, 
  options,
  required = false, 
  error 
}) => {
  return (
    <BaseField label={label} required={required} error={error}>
      <div style={{ display: 'flex', gap: '20px' }}>
        {options.map((option) => (
          <label key={option.value} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              style={{ marginRight: '8px' }}
            />
            <span style={{ fontSize: '13px' }}>{option.label}</span>
          </label>
        ))}
      </div>
    </BaseField>
  );
};

// Date Field Component
export const DateField = ({ 
  label, 
  value, 
  onChange, 
  required = false, 
  error,
  ...props 
}) => {
  return (
    <BaseField label={label} required={required} error={error}>
      <input
        type="date"
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          padding: '8px 12px',
          border: error ? '1px solid #dc3545' : '1px solid #ccc',
          borderRadius: '8px',
          fontSize: '13px',
          boxSizing: 'border-box',
          backgroundColor: '#f8f9fa',
        }}
        {...props}
      />
    </BaseField>
  );
};

// FieldComponents.jsx
export const DateTimeField = ({ 
  label, 
  value, 
  onChange, 
  required = false, 
  error,
  ...props 
}) => {
  // Konversi ke format input datetime-local (tambah "T" & trim detik)
  const formatForInput = (val) => {
    if (!val) return "";
    return val.replace(" ", "T").slice(0, 16); // 2025-10-16T16:26
  };

  const handleChange = (e) => {
    const rawValue = e.target.value; // 2025-10-16T16:26
    const formatted = rawValue.replace("T", " ") + ":00"; // 2025-10-16 16:26:00
    onChange({ target: { name: e.target.name, value: formatted } });
  };

  return (
    <BaseField label={label} required={required} error={error}>
      <input
        type="datetime-local"
        value={formatForInput(value)}
        onChange={handleChange}
        style={{
          width: '100%',
          padding: '8px 12px',
          border: error ? '1px solid #dc3545' : '1px solid #ccc',
          borderRadius: '8px',
          fontSize: '13px',
          boxSizing: 'border-box',
          backgroundColor: '#f8f9fa',
        }}
        {...props}
      />
    </BaseField>
  );
};



// Jurusan options constant
export const JURUSAN_OPTIONS = [
  { value: "1", label: "Rekayasa Perangkat Lunak" },
  { value: "2", label: "Perhotelan" },
  { value: "3", label: "Busana" },
  { value: "4", label: "Usaha Layanan Pariwisata" },
  { value: "5", label: "Kuliner" },
  { value: "6", label: "Teknik Komputer dan Jaringan" },
  { value: "7", label: "Multimedia" },
  { value: "8", label: "Akuntansi" },
  { value: "9", label: "Administrasi Perkantoran" }
];

// Gender options constant
export const GENDER_OPTIONS = [
  { value: "Laki-laki", label: "Laki-laki" },
  { value: "Perempuan", label: "Perempuan" }
];