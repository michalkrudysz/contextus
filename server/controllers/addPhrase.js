import { addPhraseService } from "../services/addPhraseService.js";
import { validationResult } from "express-validator";

export const addPhrase = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    user_id,
    phrase,
    translation,
    level,
    source,
    last_review_date,
    review_interval,
  } = req.body;

  try {
    const result = await addPhraseService({
      user_id,
      phrase,
      translation,
      level,
      source,
      last_review_date,
      review_interval,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
