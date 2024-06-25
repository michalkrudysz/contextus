import express from "express";
import { login } from "../controllers/login.js";
import { register } from "../controllers/register.js";
import { checkToken } from "../controllers/checkToken.js";
import { updateUsername } from "../controllers/updateUsername.js";
import { compare } from "../controllers/compare.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/check-token", checkToken);
router.post("/username", updateUsername);
router.put("/compare", compare);

export default router;
