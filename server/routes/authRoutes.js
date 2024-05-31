import express from "express";
import { login } from "../controllers/login.js";
import { register } from "../controllers/register.js";
import { checkToken } from "../controllers/checkToken.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/check-token", checkToken);

export default router;
