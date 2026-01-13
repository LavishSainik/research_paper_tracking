import express from "express";
import cors from "cors";

import paperRoutes from "./routes/paper.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";

const app = express();

// 🔴 MUST be first
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json());

// Routes
app.use("/api/papers", paperRoutes);
app.use("/api/analytics", analyticsRoutes);

// Health check (IMPORTANT for testing)
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

export default app;
