import express from "express";
import { getAllJobs } from "../controllers/job";

const router = express.Router();

router.get("/get-all-jobs", getAllJobs);
router.get("/post-job");

export default router;
