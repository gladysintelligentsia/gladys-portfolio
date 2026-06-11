import express from "express";
import userController from "../controllers/user.js";
import { verify } from "../auth.js";

const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/details", verify, userController.getProfile);

export default router;