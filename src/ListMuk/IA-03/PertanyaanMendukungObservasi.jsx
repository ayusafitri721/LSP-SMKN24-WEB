import React, { useState } from 'react';
import ListMukHeader from '../../components/ListMukHeader';

const PertanyaanMendukungObservasi = ({ onBack, onNavigate }) => {
    const [formData, setFormData] = useState({
        judulUnit: '',
        kodeUnit: '',
        checkedAnswers: {},
        responses: {}
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleCheckboxChange = (questionId, answerType) => {
        const oppositeType = answerType === 'ya' ? 'tidak' : 'ya';
        
        setFormData(prev => ({
            ...prev,
            checkedAnswers: {
                ...prev.checkedAnswers,
                [questionId]: {
                    ...prev.checkedAnswers[questionId],
                    [answerType]: !prev.checkedAnswers[questionId]?.[answerType],
                    [oppositeType]: false
                }
            }
        }));
    };

    const handleResponseChange = (questionId, value) => {
        setFormData(prev => ({
            ...prev,
            responses: {
                ...prev.responses,
                [questionId]: value
            }
        }));
    };

    const questions = [
        {
            id: 'gab_cm_01_003_01',
            text: 'Mengikuti Prosedur Kesehatani'
        },
        {
            id: 'question_2',
            text: 'dst'
        },
        {
            id: 'question_3',
            text: 'dst'
        },
        {
            id: 'question_4',
            text: 'dst'
        }
    ];

   
return (
        <div style={{
            backgroundColor: '#f5f5f5',
            padding: '20px',
            margin: '0',
            minHeight: '100vh'
        }}>
            <ListMukHeader active="ia-03" onBack={onBack} onNavigate={onNavigate} />

            {/* Main Content */}
            <div style={styles.container}>
                {/* Header with Logo */}
                

                    <div style={styles.titleContainer}>
                        <h2 style={styles.formNumber}>FR.IA.03</h2>
                        <h3 style={styles.formTitle}>Pertanyaan Untuk Mendukung Observasi</h3>
                    </div>

                {/* Schema Information */}
                <table style={styles.schemaTable}>
                    <tbody>
                        <tr>
                            <td style={styles.schemaLabelCell} rowSpan={2}>
                                Skema Sertifikasi<br />
                                <span style={styles.schemaSubtext}>(KKNI/OKUPASI/KLASTER)</span>
                            </td>
                            <td style={styles.schemaSubLabelCell}>Judul Unit</td>
                            <td style={styles.colonCell}>:</td>
                            <td style={styles.schemaInputCell}>
                                <input
                                    type="text"
                                    value={formData.judulUnit}
                                    onChange={(e) => handleInputChange('judulUnit', e.target.value)}
                                    style={styles.input}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td style={styles.schemaSubLabelCell}>Kode Unit</td>
                            <td style={styles.colonCell}>:</td>
                            <td style={styles.schemaInputCell}>
                                <input
                                    type="text"
                                    value={formData.kodeUnit}
                                    onChange={(e) => handleInputChange('kodeUnit', e.target.value)}
                                    style={styles.input}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Instructions Section */}
                <div style={styles.instructionSection}>
                    <div style={styles.instructionHeader}>
                        <strong>PADUAN ASESMEN MANDIRI</strong>
                    </div>
                    <div style={styles.instructionContent}>
                        <p style={styles.instructionTitle}><strong>Instruksi:</strong></p>
                        <ul style={styles.instructionList}>     
                            <li>Formulir ini di isi oleh asesor kompetensi dapat sebelum, pada saat atau setelah melakukan asesmen dengan metode observasi demonstrasi.</li>
                            <li>Pertanyaan dibuat dengan tujuan untuk menggali, dapat berisi pertanyaan yang berkaitan dengan dimensi kompetensi, batasan variabel dan aspek kritis yang relevan dengan skenario tugas dan praktek demonstrasi.</li>
                            <li>Jika pertanyaan disampaikan sebelum asesi melakukan praktek demonstrasi, maka pertanyaan dibuat berkaitan dengan aspek K3L, SOP, penggunaan peralatan dan perlengkapan.</li>
                            <li>Jika setelah asesi melakukan praktik demonstrasi terdapat item pertanyaan pendukung observasi telah terpenuhi, maka pertanyaan tersebut tidak perlu ditanyakan lagi dan cukup memberi catatan bahwa sudah terpenuhi pada saat tugas praktek demonstrasi pada kolom tanggapan.</li>
                            <li>Jika pada saat observasi ada hal yang perlu dikonfirmasi sedangkan di instrumen daftar pertanyaan pendukung observasi tidak ada, maka asesor dapat memberikan pertanyaan dengan syarat pertanyaan harus berkaitan dengan tugas praktek demonstrasi. Jika dilakukan, asesor harus mencatat dalam instrumen pertanyaan pendukung observasi.</li>
                            <li>Tanggapan asesi ditulis pada kolom tanggapan.</li>
                        </ul>
                    </div>
                </div>

                {/* Job Group Section */}
                <div style={styles.jobGroupSection}>
                    <h4 style={styles.jobGroupTitle}>Kelompok Pekerjaan 1</h4>
                    <ol style={styles.jobList}>
                        <li>GAB.CM01.003.01 Mengikuti Prosedur Kesehatan</li>
                        <li>dst</li>
                        <li>dst</li>
                        <li>dst</li>
                    </ol>
                </div>

                {/* Questions Table */}
                <table style={styles.questionTable}>
                    <thead>
                        <tr>
                            <th style={styles.questionHeaderCell}>Pertanyaan</th>
                            <th style={styles.answerHeaderCell}>Ya</th>
                            <th style={styles.answerHeaderCell}>Tidak</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={styles.questionCell}>
                                <div style={styles.questionText}>
                                   Anda seorang operator yunior busana, sebelum memulai kegiatan menjahit blus, anda perlu memperhatikan SOP kesehatan dan keselamatan kerja, apa yang akan anda lakukan supaya tidak terjadi kecelakaan kerja pada waktu menjahit blus? (JRES)
                                </div>
                                <div style={styles.responseBox}>
                                    <div style={styles.responseLabel}>isi TanggapanMu disini:</div>
                                    <textarea
                                        value={formData.responses.question1 || ''}
                                        onChange={(e) => handleResponseChange('question1', e.target.value)}
                                        placeholder="Tulis tanggapan asesi di sini..."
                                        style={{
                                            width: '100%',
                                            minHeight: '60px',
                                            border: 'none',
                                            outline: 'none',
                                            backgroundColor: 'transparent',
                                            resize: 'vertical',
                                            fontSize: '12px',
                                            color: '#333'
                                        }}
                                    />
                                </div>
                            </td>
                            <td style={styles.checkboxCell}>
                                <input
                                    type="checkbox"
                                    checked={formData.checkedAnswers.question1?.ya || false}
                                    onChange={() => handleCheckboxChange('question1', 'ya')}
                                    style={styles.checkbox}
                                />
                            </td>
                            <td style={styles.checkboxCell}>
                                <input
                                    type="checkbox"
                                    checked={formData.checkedAnswers.question1?.tidak || false}
                                    onChange={() => handleCheckboxChange('question1', 'tidak')}
                                    style={styles.checkbox}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Send Button */}
                <div style={styles.buttonContainer}>
                    <button style={styles.sendButton}>
                        Kirim
                    </button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '1000px',
        margin: '20px auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'white',
        fontSize: '12px',
        lineHeight: '1.4'
    },
    headerSection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
        padding: '10px 0'
    },
    logoContainer: {
        flex: '0 0 auto'
    },
    logo: {
        backgroundColor: '#ff6200',
        color: 'white',
        padding: '15px 20px',
        fontSize: '18px',
        fontWeight: 'bold',
        borderRadius: '8px'
    },
    titleContainer: {
        flex: '1',
        textAlign: 'center',
        padding: '0 20px'
    },
    formNumber: {
        fontSize: '16px',
        fontWeight: 'bold',
        margin: '0 0 5px 0',
        color: '#333'
    },
    formTitle: {
        fontSize: '14px',
        fontWeight: 'bold',
        margin: '0',
        color: '#333'
    },
    profileContainer: {
        flex: '0 0 auto'
    },
    profileImage: {
        width: '60px',
        height: '60px',
        backgroundColor: '#e0e0e0',
        borderRadius: '50%',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23666\'%3E%3Cpath d=\'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z\'/%3E%3C/svg%3E")',
        backgroundSize: '70%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    schemaTable: {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '20px',
        border: '2px solid #333'
    },
    schemaLabelCell: {
        border: '1px solid #333',
        padding: '10px',
        backgroundColor: '#f0f0f0',
        fontWeight: 'bold',
        width: '20%',
        verticalAlign: 'middle',
        textAlign: 'center'
    },
    schemaSubtext: {
        fontSize: '10px',
        fontWeight: 'normal'
    },
    schemaSubLabelCell: {
        border: '1px solid #333',
        padding: '8px',
        fontWeight: 'bold',
        width: '15%',
        textAlign: 'left'
    },
    colonCell: {
        border: '1px solid #333',
        padding: '8px',
        width: '3%',
        textAlign: 'center'
    },
    schemaInputCell: {
        border: '1px solid #333',
        padding: '8px',
        width: '62%'
    },
    input: {
        width: '100%',
        border: 'none',
        outline: 'none',
        fontSize: '12px',
        backgroundColor: 'transparent'
    },
    instructionSection: {
        marginBottom: '20px',
        border: '2px solid #f6b27a',
        borderRadius: '6px',
        overflow: 'hidden'
    },
    instructionHeader: {
        backgroundColor: '#f6b27a',
        padding: '12px 16px',
        fontSize: '14px',
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#333'
    },
    instructionContent: {
        backgroundColor: '#fde6d2',
        padding: '16px'
    },
    instructionTitle: {
        margin: '0 0 10px 0',
        fontSize: '12px'
    },
    instructionList: {
        margin: '0',
        paddingLeft: '20px',
        fontSize: '11px',
        lineHeight: '1.5'
    },
    jobGroupSection: {
        marginBottom: '20px'
    },
    jobGroupTitle: {
        fontSize: '13px',
        fontWeight: 'bold',
        marginBottom: '10px'
    },
    jobList: {
        margin: '0',
        paddingLeft: '20px',
        fontSize: '12px',
        lineHeight: '1.5'
    },
    questionTable: {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '20px',
        border: '2px solid #333'
    },
    questionHeaderCell: {
        border: '1px solid #333',
        padding: '10px',
        backgroundColor: '#f0f0f0',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '70%'
    },
    answerHeaderCell: {
        border: '1px solid #333',
        padding: '10px',
        backgroundColor: '#f0f0f0',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '15%'
    },
    questionCell: {
        border: '1px solid #333',
        padding: '15px',
        verticalAlign: 'top'
    },
    questionText: {
        fontSize: '12px',
        lineHeight: '1.5',
        marginBottom: '15px'
    },
    responseBox: {
        backgroundColor: '#f5f5f5',
        padding: '10px',
        minHeight: '40px',
        border: '1px solid #ccc'
    },
    responseLabel: {
        fontSize: '10px',
        fontStyle: 'italic',
        color: '#666'
    },
    checkboxCell: {
        border: '1px solid #333',
        padding: '15px',
        textAlign: 'center',
        verticalAlign: 'middle'
    },
    checkbox: {
        transform: 'scale(1.5)',
        cursor: 'pointer'
    },
    buttonContainer: {
        textAlign: 'center',
        marginTop: '20px'
    },
    sendButton: {
        backgroundColor: '#4a90e2',
        color: 'white',
        padding: '12px 30px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '14px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
    }
};

export default PertanyaanMendukungObservasi;