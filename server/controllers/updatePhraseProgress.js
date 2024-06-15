import { validationResult } from "express-validator";
import { updatePhraseProgress as updateProgress } from "../services/updatePhraseProgressService.js";

export async function updatePhraseProgress(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id, lastReviewDate, level, repetitions, reviewInterval } = req.body;
  const date = new Date(lastReviewDate);
  const formattedDate = date.toISOString().split("T")[0];

  try {
    await updateProgress({
      id,
      lastReviewDate: formattedDate,
      level,
      repetitions,
      reviewInterval,
    });

    res.status(202).send("Żądanie aktualizacji odebrane.");
  } catch (error) {
    res.status(500).json({
      message: "Błąd podczas dodawania do kolejki",
      error: error.message,
    });
  }
}
