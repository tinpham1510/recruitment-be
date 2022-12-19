import { Router } from "express";
import { Controller } from "./user.controller";

const router = Router();

router.route("/login").post(Controller.login);
router.route("/signin").post(Controller.signin);

export default router;
