import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // Ganti dengan URL API Anda
});

// contoh endpoint
export const getUsers = () => api.get("/users");
export const login = (data) => api.post("/auth/login", data);

export default api;
