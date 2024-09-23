import { Router } from "express";
import { signUp } from "../controllers/authController.js";
const router = Router();
router.route("/register").post(signUp);
export default router;
