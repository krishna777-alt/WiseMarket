import express from "express";
import rateLimit from "express-rate-limit";

import { signup } from "../controllers/userController.js";

const signupLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

const router = express.Router();

router.route("/signup").post(signup);
export default router;
