import axios from "axios";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  withCredentials: true, 
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
});

// ---- Lightweight GET cache and in-flight de-duplication ----
const __inFlight = new Map(); // key -> Promise
const __cache = new Map();    // key -> { expireAt, data }
const __negCache = new Map(); // key -> { expireAt, status }

const __buildKey = (url, params) => `${url}::${params ? JSON.stringify(params) : ""}`;

/**
 * cachedGet wraps axios GET requests with:
 * - in-flight de-duplication so concurrent identical GETs share one request
 * - in-memory cache with TTL
 * Returns an axios-like response { data, ... } for compatibility.
 */
const cachedGet = async (url, { params, ttl = 30000, force = false, config = {} } = {}) => {
  const key = __buildKey(url, params);
  const now = Date.now();

  if (!force) {
    const neg = __negCache.get(key);
    if (neg && neg.expireAt > now) {
      const err = new Error(`cached ${neg.status}`);
      err.response = { status: neg.status };
      throw err;
    }
    const entry = __cache.get(key);
    if (entry && entry.expireAt > now) {
      return { data: entry.data, fromCache: true };
    }
    if (__inFlight.has(key)) {
      return __inFlight.get(key);
    }
  }

  const req = api
    .get(url, { params, ...config })
    .then((res) => {
      try {
        __cache.set(key, { expireAt: now + ttl, data: res.data });
      } catch {}
      return res;
    })
    .catch((error) => {
      const status = error?.response?.status;
      if (status === 404) {
        try {
          __negCache.set(key, { expireAt: now + Math.min(ttl, 15000), status: 404 });
        } catch {}
      }
      throw error;
    })
    .finally(() => {
      __inFlight.delete(key);
    });

  __inFlight.set(key, req);
  return req;
};

export const clearApiCache = (predicate = null) => {
  if (!predicate) {
    __cache.clear();
    return;
  }
  for (const k of Array.from(__cache.keys())) {
    try {
      if (predicate(k)) __cache.delete(k);
    } catch {}
  }
};

api.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
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
    await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
      withCredentials: true,
    });
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

// Self Profile (backend routes: /profile/self)
export const getMyProfile = () => cachedGet("/profile/self", { ttl: 15000 });
export const updateMyProfile = (data) => api.put("/profile/self", data);

// -------- Self / Assesor scope (auth:sanctum) --------
export const getCurrentAsesor = () => api.get("/asesor");

// -------- Asesi CRUD (admin-protected on server for write ops) --------
export const getAsesis = () => api.get("/assesi");
export const createAsesi = (data) => api.post("/assesi", data);
export const updateAsesi = (id, data) => api.put(`/assesi/${id}`, data);
export const deleteAsesi = (id) => api.delete(`/assesi/${id}`);
export const getAsesiById = (id) => api.get(`/assesi/${id}`);

// -------- Asesor CRUD --------
export const getAsesors = (page = 1, size = 10) =>
  api.get(`/assesor?page=${page}&size=${size}`);
export const createAsesor = (data) => api.post("/assesor", data);
export const updateAsesor = (id, data) => api.put(`/assesor/${id}`, data);
export const deleteAsesor = (id) => api.delete(`/assesor/${id}`);

// Assesment core
export const getAssesments = () => api.get("/assesment");
export const createAssesment = (data) => api.post("/assesment", data);
export const getAssesmentById = (id) => cachedGet(`/assesment/${id}`, { ttl: 30000 });
export const updateAssesment = (id, data) => api.put(`/assesment/${id}`, data);
export const deleteAssesment = (id) => api.delete(`/assesment/${id}`);

// Assesment-Asesi relations (updated routes)
// Note: backend now scopes routes under /asesi, /assesor, and /user
export const createAssesmentAsesi = (data) => api.post("/asesi/assesment-asesi", data);
export const getAssesmentByAsesi = (assesiId) => cachedGet(`/asesi/assesment-asesi/${assesiId}`, { ttl: 20000 });
export const getAssesmentByAssesor = () => cachedGet(`/assesment-asesi/`, { ttl: 20000 });
export const getAssesmentAsesiByUser = (userId) => cachedGet(`/user/assesment-asesi/${userId}`, { ttl: 20000 });

// Status endpoints
export const getAssesmentAssesiStatus = () =>
  cachedGet("/status/asesi/assesment", { ttl: 10000 });
export const updateAssesmentAssesiStatus = (data) =>
  api.post("/status/asesi/assesment", data);

// Schema (requires approve middleware server-side)
export const getSkemas = () => cachedGet("/schema", { ttl: 120000 });

// APL01
export const submitFormApl01 = (data) => api.post("/assesment/formapl01", data);
export const getApl01s = () => api.get("/assesment/formapl01"); // admin scope per routes
export const approvementApl01 = (id, data) =>
  api.post(`approvement/assesment/formapl01/${id}`, data);
export const viewAttachment = (id) =>
  api.get(`/form-apl01/attachment/${id}/view`);

// APL02
export const submitFormApl02 = (data) => api.post("/assesment/formapl02", data);
export const getApl02ByAssesi = (assesiId) =>
  cachedGet(`/apl02/assesi/${assesiId}`, { ttl: 30000 });
export const getApl02ById = (id) => cachedGet(`/apl02/${id}`, { ttl: 60000 });
export const getApl02ByAssesmentAsesi = (assesmentAsesiId) => cachedGet(`/apl02/assesment-asesi/${assesmentAsesiId}`, { ttl: 30000 });
export const postApl02 = (data) => api.post("/apl02/import", data); // admin
export const approveApl02ByUser = (id, data) =>
  api.post(`/approvement/assesment/formapl02/${id}`, data);

// AK01
export const submitFormAk01 = (data) => api.post("/assesment/formak01", data);
export const getFormAk01ByAssesi = (assesiId) =>
  cachedGet(`/assesment/formak01/${assesiId}`, { ttl: 15000 });
export const approveFormAk01ByUser = (id, data) =>
  api.post(`/user/assesment/formak01/${id}`, data);

// AK02
export const submitFormAk02 = (data) => api.post("/assesment/formak02", data);
export const getFormAk02ByAssesi = (assesiId) =>
  cachedGet(`/assesment/formak02/${assesiId}`, { ttl: 15000 });

// AK03
export const submitFormAk03 = (data) => api.post("/assesment/formak03", data);
export const getFormAk03ByAssesi = (assesiId) =>
  cachedGet(`/assesment/formak03/${assesiId}`, { ttl: 15000 });

// AK05
export const submitFormAk05 = (data) => api.post("/assesment/formak05", data);
export const getFormAk05ByAssesi = (assesiId) =>
  cachedGet(`/assesment/formak05/${assesiId}`, { ttl: 15000 });

// AK04 (if backend provides; pages will handle 404 gracefully)
export const submitFormAk04 = (data) => api.post("/assesment/formak04", data);
export const getFormAk04ByAssesi = (assesiId) =>
  cachedGet(`/assesment/formak04/${assesiId}`, { ttl: 15000 });

// IA01
export const submitFormIa01 = (data) => api.post("/assesment/formia01", data);
export const getFormIa01ByAssesi = (assesiId) =>
  cachedGet(`/assesment/formia01/${assesiId}`, { ttl: 15000 });

// IA02
export const submitFormIa02 = (data) => api.post("/assesment/formia02", data);
export const getFormIa02ByAssesi = (assesiId) =>
  cachedGet(`/assesment/formia02/${assesiId}`, { ttl: 15000 });

// IA03
export const submitFormIa03 = (data) => api.post("/assesment/formia03", data);
export const getFormIa03ByAssesi = (assesiId) =>
  cachedGet(`/assesment/formia03/${assesiId}`, { ttl: 15000 });

// IA06A
export const submitFormIa06a = (data) => api.post("/assesment/formia06a", data);
export const getFormIa06aByAssesi = (assesiId) =>
  cachedGet(`/assesment/formia06a/${assesiId}`, { ttl: 15000 });

// Bukti dokumen generic
// User approval endpoints

// File attachment endpoints
export const viewBuktiDokumen = (id) => api.get(`/bukti-dokumen/view/${id}`);
// List bukti dokumen milik asesi saat ini
export const getMyBuktiDokumenSelf = () => api.get(`/bukti-dokumen/self`);

// IA Docs download
export const downloadIaDoc = async (form, skemaId) => {
  // returns Blob response for download
  const res = await api.get(`/ia/docs/${encodeURIComponent(form)}/${skemaId}` , {
    responseType: 'blob'
  });
  return res;
};

// IA Docs list for a given skema
export const listIaDocs = (skemaId) => cachedGet(`/ia/docs/list/${skemaId}`, { ttl: 300000 });

// Questions (for IA-03 demo)
export const getQuestionsBySkema = (skemaId) => cachedGet(`/questions/skema/${skemaId}`, { ttl: 300000 });
export const submitQuestionAnswers = (data) => api.post(`/questions/answer`, data);

// Auth
export const logout = () => api.post(`/auth/logout`);

export default api;