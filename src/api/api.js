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

// Helper to refresh Sanctum CSRF cookie
export const fetchCsrfCookie = async () => {
  try {
    await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", { withCredentials: true });
  } catch (e) {
    // swallow; caller may handle
  }
};

// Auto-refresh CSRF/session and retry once on 401/419
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response } = error || {};
    if (!response || !config) return Promise.reject(error);
    const status = response.status;
    const isAuthError = status === 401 || status === 419;
    const notRetriedYet = !config._retry;
    if (isAuthError && notRetriedYet) {
      config._retry = true;
      try {
        await fetchCsrfCookie();
        // ensure cookies are attached on retry
        config.withCredentials = true;
        return api.request(config);
      } catch (e) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

// -------- Public endpoints --------
export const jurusans = () => api.get("/jurusan");
export const createJurusan = (data) => api.post("/jurusan", data);
export const putJurusan = (id, data) => api.put(`/jurusan/${id}`, data);
export const deleteJurusan = (id) => api.delete(`/jurusan/${id}`);

// -------- Auth --------
export const login = (data) => api.post("/auth/login", data);
export const register = (data) => api.post("/auth/register", data);

// -------- Self / Assesi scope (auth:sanctum) --------
export const getCurrentAsesi = () => api.get("/asesi");
export const showapl01 = () => api.get("/formApl01");

// -------- Asesi CRUD (admin-protected on server for write ops) --------
export const getAsesis = () => api.get("/assesi");
export const createAsesi = (data) => api.post("/assesi", data);
export const updateAsesi = (id, data) => api.put(`/assesi/${id}`, data);
export const deleteAsesi = (id) => api.delete(`/assesi/${id}`);
export const getAsesiById = (id) => api.get(`/assesi/${id}`);

// -------- Asesor CRUD --------
export const getAsesors = (page = 1, size = 10) => api.get(`/assesor?page=${page}&size=${size}`);
export const createAsesor = (data) => api.post("/assesor", data);
export const updateAsesor = (id, data) => api.put(`/assesor/${id}`, data);
export const deleteAsesor = (id) => api.delete(`/assesor/${id}`);

// Assesment core
export const getAssesments = () => api.get("/assesment");
export const createAssesment = (data) => api.post("/assesment", data);
export const getAssesmentById = (id) => api.get(`/assesment/${id}`);
export const updateAssesment = (id, data) => api.put(`/assesment/${id}`, data);
export const deleteAssesment = (id) => api.delete(`/assesment/${id}`);

// Assesment-Asesi relations
export const getAssesmentAsesis = () => api.get("/assesment-asesi");
export const createAssesmentAsesi = (data) => api.post("/assesment-asesi", data);
export const getAssesmentByAsesi = (assesiId) => api.get(`/assesment-asesi/byAsesi/${assesiId}`);
export const getAssesmentByAssesor = (assesorId) => api.get(`/assesment-asesi/byAsesor/${assesorId}`);

// Status endpoints
export const getAssesmentAssesiStatus = () => api.get("/status/asesi/assesment");
export const updateAssesmentAssesiStatus = (data) => api.post("/status/asesi/assesment", data);

// Schema (requires approve middleware server-side)
export const getSkemas = () => api.get("/schema");

// APL01
export const submitFormApl01 = (data) => api.post("/assesment/formapl01", data);
export const getApl01s = () => api.get("/assesment/formapl01"); // admin scope per routes
export const approvementApl01 = (id, data) => api.post(`approvement/assesment/formapl01/${id}`, data);
export const viewAttachment = (id) => api.get(`/form-apl01/attachment/${id}/view`);

// APL02
export const submitFormApl02 = (data) => api.post("/assesment/formapl02", data);
export const getApl02ByAssesi = (assesiId) => api.get(`/apl02/assesi/${assesiId}`);
export const getApl02ById = (id) => api.get(`/apl02/${id}`);
export const postApl02 = (data) => api.post("/apl02/import", data); // admin

// AK01
export const submitFormAk01 = (data) => api.post("/assesment/formak01", data);
export const getFormAk01ByAssesi = (assesiId) => api.get(`/assesment/formak01/${assesiId}`);
export const approveFormAk01ByUser = (id, data) => api.post(`/user/assesment/formak01/${id}`, data);

// AK02
export const submitFormAk02 = (data) => api.post("/assesment/formak02", data);
export const getFormAk02ByAssesi = (assesiId) => api.get(`/assesment/formak02/${assesiId}`);

// AK03
export const submitFormAk03 = (data) => api.post("/assesment/formak03", data);
export const getFormAk03ByAssesi = (assesiId) => api.get(`/assesment/formak03/${assesiId}`);

// AK05
export const submitFormAk05 = (data) => api.post("/assesment/formak05", data);
export const getFormAk05ByAssesi = (assesiId) => api.get(`/assesment/formak05/${assesiId}`);

// IA01
export const submitFormIa01 = (data) => api.post("/assesment/formia01", data);
export const getFormIa01ByAssesi = (assesiId) => api.get(`/assesment/formia01/${assesiId}`);

// Bukti dokumen generic
// User approval endpoints

// File attachment endpoints
export const viewBuktiDokumen = (id) => api.get(`/bukti-dokumen/view/${id}`);
// List bukti dokumen milik asesi saat ini
export const getMyBuktiDokumenSelf = () => api.get(`/bukti-dokumen/self`);

export default api;
