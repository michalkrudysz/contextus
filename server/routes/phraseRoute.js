import express from "express";
import { addPhrase } from "../controllers/addPhrase.js";
import { getPhrases } from "../controllers/getPhrase.js";
import { body, param } from "express-validator";

const router = express.Router();

router.post(
  "/addPhrase",
  [
    body("user_id").isInt(),
    body("phrase").isString().notEmpty(),
    body("translation").isString().notEmpty(),
    body("level").isInt({ min: 1, max: 6 }),
    body("source").isIn(["AI", "manual"]),
    body("last_review_date").isISO8601().toDate(),
    body("review_interval").isInt({ min: 1 }),
  ],
  addPhrase
);

router.get("/getPhrase/:userId", [param("userId").isInt()], getPhrases);

export default router;
