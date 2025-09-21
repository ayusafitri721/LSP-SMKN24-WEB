import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  withCredentials: true, // use Sanctum cookies
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
});

api.interceptors.request.use(
  (config) => {
    // Ensure cookies are sent
    config.withCredentials = true;

    // Optional bearer token (if your backend also returns token)
    let token = null;
    try {
      const raw = localStorage.getItem("user");
      token = raw ? JSON.parse(raw)?.token : null;
    } catch (e) {
      token = null;
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// General Asesi Endpoint
export const getCurrentAsesi = () => api.get("/asesi");
export const showapl01 = () => api.get("/formApl01");

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

// Assesment Asesi CRUD operations
export const getAssesmentAsesis = () => api.get("/assesment-asesi");

// Apl01 CRUD operations
export const getApl01s = () => api.get("/assesment/formapl01");
export const approvementApl01 = (id, data) => api.post(`approvement/assesment/formapl01/${id}`, data);

// Form submission endpoints for forms available in backend routes
export const submitFormApl01 = (data) => api.post("/assesment/formapl01", data);
export const submitFormApl02 = (data) => api.post("/assesment/formapl02", data);
export const submitFormAk01 = (data) => api.post("/assesment/formak01", data);
export const submitFormAk02 = (data) => api.post("/assesment/formak02", data);
export const submitFormAk03 = (data) => api.post("/assesment/formak03", data);
export const submitFormAk05 = (data) => api.post("/assesment/formak05", data);
export const submitFormIa01 = (data) => api.post("/assesment/formia01", data);

// Get form data endpoints for retrieving saved form data
export const getFormAk01ByAssesi = (id) => api.get(`/assesment/formak01/${id}`);
export const getFormAk02ByAssesi = (id) => api.get(`/assesment/formak02/${id}`);
export const getFormAk03ByAssesi = (id) => api.get(`/assesment/formak03/${id}`);
export const getFormAk05ByAssesi = (id) => api.get(`/assesment/formak05/${id}`);
export const getFormIa01ByAssesi = (id) => api.get(`/assesment/formia01/${id}`);
export const getApl02ByAssesi = (id) => api.get(`/apl02/assesi/${id}`);

// Assessment status endpoints
export const getAssesmentAssesiStatus = () => api.get("/status/asesi/assesment");
export const updateAssesmentAssesiStatus = (data) => api.post("/status/asesi/assesment", data);

// User approval endpoints
export const approveFormAk01ByUser = (id, data) => api.post(`/user/assesment/formak01/${id}`, data);

// Get assessment by asesi
export const getAssesmentByAsesi = (id) => api.get(`/assesment-asesi/byAsesi/${id}`);

// File attachment endpoints
export const viewAttachment = (id) => api.get(`/form-apl01/attachment/${id}/view`);
export const viewBuktiDokumen = (id) => api.get(`/bukti-dokumen/view/${id}`);

export default api;
