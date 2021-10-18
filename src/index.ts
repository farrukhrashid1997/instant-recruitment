import express from "express";
import { initDb } from "./utils/database";
import Jobs from "./models/jobs";
import schema from "./graphql/schema";
import { graphqlHTTP } from "express-graphql";

const app = express();

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//   })
// );

initDb().then((result) => {
  console.log(result);
  app.listen(3000);
});

/**Added response headers */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
});
