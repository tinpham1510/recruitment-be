import express from "express";
import { json, urlencoded } from "body-parser";
import "dotenv/config";
import { connect } from "./utils/db";
import cors from "cors";
import initRoute from "./utils/route";

export const app = express();
const port = process.env.PORT || 3333;

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors({ origin: true }));
initRoute(app);

export const start = async () => {
  try {
    await connect();
    app.listen(port, () => {
      console.log(`REST API on http://localhost:${port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};
