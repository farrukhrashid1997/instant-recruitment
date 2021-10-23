import express from "express";
import { initDb } from "./utils/database";
import jobRoutes from "./routes/jobRoutes";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/jobs", jobRoutes);

initDb().then(() => {
  app.listen(8080);
});
