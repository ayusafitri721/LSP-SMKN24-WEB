import { createContext, useContext, useState } from "react";
import { login as apiLogin } from "../Api/api"; // API service

// Buat Context
const AuthContext = createContext();

// Provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fungsi login
  const login = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const res = await apiLogin(formData);
      const { token, user } = res.data;

      setUser(user);
      localStorage.setItem("token", token);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || "Login gagal!");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Fungsi logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook custom buat akses Auth
export function useAuth() {
  return useContext(AuthContext);
}
