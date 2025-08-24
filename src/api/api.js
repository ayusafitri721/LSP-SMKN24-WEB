import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Endpoint
export const getUsers = () => api.get("/users");
export const login = (data) => api.post("/auth/login", data);
export const register = (data) => api.post("/auth/register", data);
export const jurusans = () => api.get("/jurusan");

// Asesi CRUD operations
export const getAsesis = () => api.get("/assesi");
export const createAsesi = (data) => api.post("/assesi", data);
export const updateAsesi = (id, data) => api.put(`/assesi/${id}`, data);
export const deleteAsesi = (id) => api.delete(`/assesi/${id}`);
export const getAsesiById = (id) => api.get(`/assesi/${id}`);

// Asesor CRUD operations
export const getAsesors = (page, size) => api.get(`/asesor?page=${page}&size=${size}`);
export const createAsesor = (data) => api.post("/asesor", data);
export const updateAsesor = (id, data) => api.put(`/asesor/${id}`, data);
export const deleteAsesor = (id) => api.delete(`/asesor/${id}`);

// Skema CRUD operations
export const getSkemas = () => api.get("/skema");

// Assesmen CRUD operations
export const getAssesmens = () => api.get("/assesmen");
export const createAssesmen = (data) => api.post("/assesmen", data);
export const updateAssesmen = (id, data) => api.put(`/assesmen/${id}`, data);



export default api;
