import express from "express";
import { initDb, sequelize } from "./utils/database";
import Jobs from "./models/jobs";

const app = express();
initDb().then((result) => {
  console.log(result);
  app.listen(3000);
});
