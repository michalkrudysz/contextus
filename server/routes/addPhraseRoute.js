import express from "express";
import { addPhrase } from "../controllers/addPhrase.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/addPhrase",
  [
    body("user_id").isInt(),
    body("phrase").isString().notEmpty(),
    body("translation").isString().notEmpty(),
    body("level").isInt({ min: 1, max: 6 }),
    body("source").isIn(["AI", "manual"]),
  ],
  addPhrase
);

export default router;
