// context/AuthContext.jsx
import { createContext, useContext, useState } from "react";
import api from "../Api/api"; // axios instance misalnya

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // LOGIN
  const login = async (credentials) => {
    try {
      setLoading(true);
      const res = await api.post("/auth/login", credentials);
      setUser(res.data.user);
      localStorage.setItem("token", res.data.token); // simpan token
      console.log("Login successful:", res.data);
      return res.data;
    } catch (err) {
      throw err.response?.data || err;
    } finally {
      setLoading(false);
    }
  };

  // REGISTER (ini yang belum ada)
  const register = async (formData) => {
    try {
      setLoading(true);
      const res = await api.post("/auth/register", formData);
      return res.data;
    } catch (err) {
      throw err.response?.data || err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
