import express, { NextFunction, Request, Response } from "express";
import { initDb } from "./utils/database";
import jobRoutes from "./routes/job";
import userRoutes from "./routes/user";
import bodyParser from "body-parser";
import { ResponseError } from "./types/general";

const app = express();

app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/jobs", jobRoutes);
app.use("/users", userRoutes);

/**
 * This should be always at the end of the middlewares
 * as this is a error handler
 * The params should always be 4, even if next() is not being used
 */
app.use((error: ResponseError, req: Request, res: Response, next: NextFunction) => {
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

initDb().then(() => {
  app.listen(8080);
});
