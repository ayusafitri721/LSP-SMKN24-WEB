import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAssesment } from "../context/AssesmentContext";
import {useAsesor} from "../context/AsesorContext";
import { useJurusan } from "../context/JurusanContext.jsx";
import { useSkema } from "../context/SkemaContext.jsx";
import {
    InputField,
    SelectField,
    DateField,
    RadioField
} from "../components/FieldComponents.jsx";

const AddAsesmen = ({ onSubmit, onBack }) => {
    const navigate = useNavigate();
    const { addAssesment } = useAssesment();
    const { asesors } = useAsesor();
    const { jurusanList } = useJurusan();
    const {skemaList} = useSkema();
    const [loading, setLoading] = useState(false);

    const skemaOptions = skemaList.map((s) => ({
        value: s.id,
        label: s.judul_skema
    }));
    
    const [formData, setFormData] = useState({
        skema_id: "",
        admin_id: 1, // Ganti dengan ID admin yang sesuai
        assesor_id: "",
        tanggal_assesment: "",
        status: "",
        tuk: "",
    });
    
    const [errors, setErrors] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({...prev, [name]: ''}));
        }
    };
    
    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.skema_id) newErrors.skema_id = "Skema harus dipilih";
        if (!formData.assesor_id) newErrors.assesor_id = "Asesor harus dipilih";
        if (!formData.tanggal_assesment) newErrors.tanggal_assesment = "Tanggal asesmen harus diisi";
        if (!formData.status) newErrors.status = "Status harus dipilih";
        if (!formData.tuk) newErrors.tuk = "TUK harus diisi";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        try {
            await addAssesment(formData);
            if (onSubmit) onSubmit(formData);
            navigate('/dashboard/asesmen');
        } catch (err) {
            if (err.response?.data?.errors) {
                console.error("Validation errors:", err.response.data.errors);
            } else {
                console.error("Error adding assesment:", err.response?.data?.message || err.message);
            }
        }

    };

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            navigate(-1);
        }
    };

    // Format asesor list untuk dropdown
    const asesorOptions = asesors.map(asesor => ({
        value: asesor.id,
        label: asesor.nama_lengkap
    }));

    // Options untuk status radio button
    const statusOptions = [
        { value: "active", label: "Terjadwal" },
        { value: "expired", label: "Selesai" },
        { value: "dibatalkan", label: "Dibatalkan" }
    ];

    return (
        <div style={{
            padding: '24px',
            backgroundColor: '#FFFFFF',
            minHeight: '100vh',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '24px',
                    borderBottom: '1px solid #f0f0f0',
                    paddingBottom: '16px'
                }}>
                    <button 
                        onClick={handleBack}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            marginRight: '16px',
                            color: '#10A9C9',
                            fontSize: '20px'
                        }}
                    >
                        &larr;
                    </button>
                    <h1 style={{
                        margin: 0,
                        color: '#343434',
                        fontSize: '24px',
                        fontWeight: '600'
                    }}>
                        Tambah Asesmen Baru
                    </h1>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '20px',
                        marginBottom: '24px'
                    }}>
                        <SelectField
                            label="Skema"
                            name="skema_id"
                            value={formData.skema_id}
                            onChange={handleChange}
                            options={skemaOptions}
                            placeholder="Pilih Skema"
                            required={true}
                            error={errors.skema_id}
                        />
                        
                        <SelectField
                            label="Asesor"
                            name="assesor_id"
                            value={formData.assesor_id}
                            onChange={handleChange}
                            options={asesorOptions}
                            placeholder="Pilih Asesor"
                            required={true}
                            error={errors.assesor_id}
                        />
                        
                        <DateField
                            label="Tanggal Asesmen"
                            name="tanggal_assesment"
                            value={formData.tanggal_assesment}
                            onChange={handleChange}
                            required={true}
                            error={errors.tanggal_assesment}
                        />
                        
                        <div>
                            <RadioField
                                label="Status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                options={statusOptions}
                                required={true}
                                error={errors.status}
                            />
                        </div>
                        
                        <div style={{ gridColumn: 'span 2' }}>
                            <InputField
                                label="Tempat Uji Kompetensi (TUK)"
                                name="tuk"
                                value={formData.tuk}
                                onChange={handleChange}
                                placeholder="Masukkan TUK"
                                required={true}
                                error={errors.tuk}
                            />
                        </div>
                    </div>
                    
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '12px',
                        marginTop: '24px',
                        borderTop: '1px solid #f0f0f0',
                        paddingTop: '20px'
                    }}>
                        <button
                            type="button"
                            onClick={handleBack}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#FFFFFF',
                                color: '#343434',
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: '500'
                            }}
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#10A9C9',
                                color: '#FFFFFF',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: '500'
                            }}
                        >
                            Simpan Asesmen
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddAsesmen;