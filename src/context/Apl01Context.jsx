import React, { createContext, useContext, useState, useEffect } from "react";
import { getApl01s, approvementApl01 } from "../Api/api";

const Apl01Context = createContext();

export const Apl01Provider = ({ children }) => {
  const [apl01s, setApl01s] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch awal
  const fetchApl01s = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getApl01s();
      setApl01s(res.data?.data || []);
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Gagal fetch data apl01"
      );
      setApl01s([]);
    } finally {
      setLoading(false);
    }
  };

  // Approve tanpa refetch semua
  const approveApl01 = async (id, data) => {
    setLoading(true);
    try {
      const res = await approvementApl01(id, data);
      const updated = res.data?.data;

      // update langsung di state lokal
      setApl01s((prev) =>
        prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
      );

      return updated;
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Gagal approve apl01"
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApl01s();
  }, []);

  return (
    <Apl01Context.Provider
      value={{ apl01s, loading, error, fetchApl01s, approveApl01 }}
    >
      {children}
    </Apl01Context.Provider>
  );
};

export const useApl01 = () => {
  const context = useContext(Apl01Context);
  if (context === undefined) {
    throw new Error("useApl01 must be used within a Apl01Provider");
  }
  return context;
};
