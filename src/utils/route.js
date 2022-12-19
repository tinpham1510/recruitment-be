import express from "express";
import userRoute from "../api/user/user.route";
import employeeRoute from "../api/employee/employee.route";

const router = express.Router();

const initRoute = (app) => {
  app.use("/api/user", userRoute);
  app.use("/api/employee", employeeRoute);
};
export default initRoute;
