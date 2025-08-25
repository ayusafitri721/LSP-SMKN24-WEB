import React, {createContext, useContext, useState, useEffect} from "react";
import { getAssesments, createAssesment, updateAssesment, deleteAssesment } from "../Api/api";

const AssesmentContext = createContext();
export const AssesmentProvider = ({ children }) => {
    const [assesments, setAssesments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAssesments = async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await getAssesments();
            setAssesments(res.data?.data || []);
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Gagal fetch data assesment");
            setAssesments([]);
        } finally {
            setLoading(false);
        }
    };

    const addAssesment = async (data) => {
        setLoading(true);
        setError(null);

        try {
            const res = await createAssesment(data);
            setAssesments((prev) => [...prev, res.data?.data]);
            return res.data?.data;
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Gagal tambah assesment");
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const editAssesment = async (id, data) => {
        setLoading(true);
        setError(null);

        try {
            const res = await updateAssesment(id, data);
            fetchAssesments();
            return res.data?.data;
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Gagal update assesment");
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const removeAssesment = async (id) => {
        setLoading(true);
        setError(null);

        try {
            await deleteAssesment(id);
            fetchAssesments();
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Gagal hapus assesment");
            throw err;
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchAssesments();
    }, []);

    return (
        <AssesmentContext.Provider value={{ assesments, loading, error, fetchAssesments, addAssesment, editAssesment, removeAssesment }}>
            {children}
        </AssesmentContext.Provider>
    );
}

export const useAssesment = () => {
    const context = useContext(AssesmentContext);
    if (!context) {
        throw new Error("useAssesment must be used within an AssesmentProvider");
    }
    return context;
}