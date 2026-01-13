import express from "express";
import {
  getFunnelData,
  getScatterData,
  getDomainStageData,
  getSummary
} from "../controllers/analytics.controller.js";

const router = express.Router();

router.get("/funnel", getFunnelData);
router.get("/scatter", getScatterData);
router.get("/domain-stage", getDomainStageData);
router.get("/summary", getSummary);

export default router;
