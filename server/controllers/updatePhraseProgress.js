import { validationResult } from "express-validator";
import { updatePhraseProgress as updateProgress } from "../services/updatePhraseProgressService.js";

export async function updatePhraseProgress(req, res) {
  console.log("Received updatePhraseProgress request with body:", req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Validation errors:", errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  const { id, lastReviewDate, level, repetitions, reviewInterval } = req.body;

  try {
    await updateProgress({
      id,
      lastReviewDate,
      level,
      repetitions,
      reviewInterval,
    });
    console.log("Update request processed successfully.");
    res.status(202).send("Żądanie aktualizacji odebrane.");
  } catch (error) {
    console.error("Error during update request handling:", error.message);
    res.status(500).json({
      message: "Błąd podczas dodawania do kolejki",
      error: error.message,
    });
  }
}
