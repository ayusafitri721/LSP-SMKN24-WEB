import {createContext, useContext, useState, useEffect} from "react";
import { deleteSkema, getSkemas, postApl02 } from "../Api/api"; // service ambil skema

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

    const importFile = async (data) => {
        setLoading(true);
        setError(null);
        try {
            const res = await postApl02(data);
            return res.data; // <— penting: balikin response
        } catch (err) {
            const message = err.response?.data?.message || err.message || "Gagal import data!";
            setError(message);
            throw new Error(message); // <— lempar error biar bisa ditangkap
        } finally {
            setLoading(false);
        }
    };

    const removeSkema = async (id) => {
        setLoading(true);
        setError(null);
        try{
          const res = await deleteSkema(id);
          return res.data?.data;
        }catch(err){
          setError(err.response?.data?.message || "Gagal menghapus jurusan!");
          throw err;
        }
      }

    return (
        <SkemaContext.Provider
            value={{ skemaList, loading, error, fetchSkemas, importFile, removeSkema }}
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