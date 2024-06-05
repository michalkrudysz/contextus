import { validationResult } from "express-validator";
import { enqueuePhraseUpdate } from "../services/queueService.js";

export async function updatePhraseProgress(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id, lastReviewDate, level, repetitions, reviewInterval } = req.body;
  const date = new Date(lastReviewDate);
  const formattedDate = date.toISOString().slice(0, 19).replace("T", " ");

  try {
    await enqueuePhraseUpdate({
      id,
      lastReviewDate: formattedDate,
      level,
      repetitions,
      reviewInterval,
    });
    res
      .status(202)
      .send("Update request received, processing will be done asynchronously");
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error enqueuing the update", error: error.message });
  }
}
