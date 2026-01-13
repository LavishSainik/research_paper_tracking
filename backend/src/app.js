import express from "express";
import cors from "cors";
import paperRoutes from "./routes/paper.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use("/api/papers", paperRoutes);
app.use("/api/analytics", analyticsRoutes);

export default app;
