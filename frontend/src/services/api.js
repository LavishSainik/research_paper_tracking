import axios from "axios";
import cors from "cors";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
    baseURL: API_BASE_URL,
})

app.use(
  cors({
    origin: [
      "https://researchpapertrackingf-86ff48ftq-lavish-sainiks-projects.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

app.options("*", cors());


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