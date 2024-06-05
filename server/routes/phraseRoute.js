import express from "express";
import { addPhrase } from "../controllers/addPhrase.js";
import { getPhrases } from "../controllers/getPhrase.js";
import { updatePhraseProgress } from "../controllers/updatePhraseProgress.js";
import { body, param } from "express-validator";

const router = express.Router();

router.put(
  "/updatePhraseProgress",
  [
    body("id").isInt(),
    body("lastReviewDate").isISO8601().toDate(),
    body("level").isInt({ min: 1, max: 6 }),
    body("repetitions").isInt({ min: 0 }),
    body("reviewInterval").isInt({ min: 1 }),
  ],
  updatePhraseProgress
);

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
