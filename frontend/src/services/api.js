import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
    baseURL: API_BASE_URL,
})


//Papers basic apis
export const createPaper = (data) => api.post("/api/papers",data)
export const getPapers = (params)=>
    api.get("/api/papers",{params})

//analytics apis
export const getFunnelData = () => api.get("/api/analytics/funnel");
export const getScatterData = () => api.get("/api/analytics/scatter");
export const getDomainStageData = () =>
  api.get("/api/analytics/domain-stage");
export const getSummary = () =>
  api.get("/api/analytics/summary");

export default api;