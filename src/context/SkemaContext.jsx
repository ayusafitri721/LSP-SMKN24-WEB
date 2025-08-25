import {createContext, useContext, useState, useEffect} from "react";
import { getSkemas } from "../Api/api"; // service ambil skema

const SkemaContext = createContext();
export function SkemaProvider({ children }) {
    const [skemaList, setSkemaList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchSkemas = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await getSkemas();
            console.log("Fetched skemas:", res.data.data);
            setSkemaList(res.data.data || []);
        } catch (err) {
            setError(err.response?.data?.message || "Gagal mengambil data skema!");
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSkemas();
    }, []);

    return (
        <SkemaContext.Provider
            value={{ skemaList, loading, error, fetchSkemas }}
        >
            {children}
        </SkemaContext.Provider>
    );
}

export function useSkema() {
    const context = useContext(SkemaContext);
    if (!context) {
        throw new Error("useSkema must be used within a SkemaProvider");
    }
    return context;
}