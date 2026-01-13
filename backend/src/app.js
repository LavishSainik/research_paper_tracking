import express from "express";
import cors from "cors";
import paperRoutes from "./routes/paper.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Backend is running" });
});

app.use("/api/papers", paperRoutes);
app.use("/api/analytics", analyticsRoutes);


export default app;
