import express from "express";
import rateLimit from "express-rate-limit";

import { me, signup } from "../controllers/userController.js";
import { login } from "../controllers/userController.js";
import protect from "../middlewares/authMiddleware.js";

const signupLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

const router = express.Router();

router.get("/me", protect, me);

router.route("/signup").post(signup);
router.route("/login").post(login);

export default router;
