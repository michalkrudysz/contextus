import { fetchPhrases } from "../services/getPhraseService.js";
import { validationResult } from "express-validator";

export const getPhrases = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { userId } = req.params;
    const phrases = await fetchPhrases(userId);

    if (!phrases || phrases.length === 0) {
      return res
        .status(404)
        .json({ message: "No phrases found for this user." });
    }

    const response = {
      phrases: phrases.map((phrase, index) => ({
        id: index + 1,
        phrase: phrase.phrase,
        translation: phrase.translation,
        level: phrase.level,
        repetitions: phrase.repetitions,
        lastReviewDate: phrase.last_review_date.toISOString().split("T")[0],
        reviewInterval: phrase.review_interval,
      })),
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
