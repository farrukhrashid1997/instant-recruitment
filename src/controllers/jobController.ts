import Jobs from "../models/jobs";

export const getAllJobs = async (req: any, res: any, next: any) => {
  const jobs = await Jobs.findAll();
  res.status(200).json({ jobs: jobs });
  next();
};
