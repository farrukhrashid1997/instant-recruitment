import express from "express";
import { getAllJobs } from "../controllers/jobController";

const router = express.Router();

router.get("/get-all-jobs", getAllJobs);

export default router;
