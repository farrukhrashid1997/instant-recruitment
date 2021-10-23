import { RequestHandler } from "express";
import Jobs from "../models/jobs";

export const getAllJobs: RequestHandler = async (req, res, next) => {
  const jobs = await Jobs.findAll();
  res.status(200).json({ jobs: jobs });
  next();
};
