import axios from "axios";
import { data } from "react-router-dom";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

api.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("user")).token; 
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
export const createJurusan = (data) => api.post("/jurusan",data)
export const putJurusan = (id, data) => api.put(`/jurusan/${id}`, data)
export const deleteJurusan = (id) => api.delete(`/jurusan/${id}`)

// Asesi CRUD operations
export const getAsesis = () => api.get("/assesi");
export const createAsesi = (data) => api.post("/assesi", data);
export const updateAsesi = (id, data) => api.put(`/assesi/${id}`, data);
export const deleteAsesi = (id) => api.delete(`/assesi/${id}`);
export const getAsesiById = (id) => api.get(`/assesi/${id}`);

// Asesor CRUD operations
export const getAsesors = (page, size) => api.get(`/assesor?page=${page}&size=${size}`);
export const createAsesor = (data) => api.post("/assesor", data);
export const updateAsesor = (id, data) => api.put(`/assesor/${id}`, data);
export const deleteAsesor = (id) => api.delete(`/assesor/${id}`);

// Skema CRUD operations
export const getSkemas = () => api.get("/schema");
export const postApl02 = (data) => api.post("/apl02/import", data)

// Assesmen CRUD operations
export const getAssesments = () => api.get("/assesment");
export const createAssesment = (data) => api.post("/assesment", data);
export const updateAssesment = (id, data) => api.put(`/assesment/${id}`, data);
export const deleteAssesment = (id) => api.delete(`/assesment/${id}`);

// Apl01 CRUD operations
export const getApl01s = () => api.get("/assesment/formapl01");
export const approvementApl01 = (id, data) => api.post(`approvement/assesment/formapl01/${id}`, data);
export default api;
