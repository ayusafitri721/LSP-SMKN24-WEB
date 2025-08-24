import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getAsesis } from "../Api/api";

const AsesiContext = createContext();

export const AsesiProvider = ({ children }) => {
  const [asesis, setAsesis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // fetchAsesis tanpa perlu token
  const fetchAsesis = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await getAsesis(); // interceptor otomatis inject token
      setAsesis(res.data?.data || []);
      console.log("Response Asesi:", res.data?.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Gagal fetch data asesi");
      console.error("Error fetching asesi:", err);
      setAsesis([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch saat provider mount
  useEffect(() => {
    fetchAsesis();
  }, [fetchAsesis]);

  return (
    <AsesiContext.Provider value={{ asesis, loading, error, fetchAsesis }}>
      {children}
    </AsesiContext.Provider>
  );
};

// Hook custom untuk akses AsesiContext
export const useAsesi = () => {
  const context = useContext(AsesiContext);
  if (!context) {
    throw new Error("useAsesi harus digunakan di dalam AsesiProvider");
  }
  return context;
};
