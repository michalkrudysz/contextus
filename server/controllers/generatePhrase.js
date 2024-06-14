import { validationResult } from "express-validator";
import { enqueuePhraseGeneration } from "../services/generatePhraseService.js";

export const generatePhrase = async (req, res) => {
  console.log("Otrzymano żądanie do /generatePhrase z danymi:", req.body);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Błędy walidacji:", errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { word, userId } = req.body;
    console.log("Wywoływanie enqueuePhraseGeneration z danymi:", word, userId);
    const response = await enqueuePhraseGeneration({ word, userId });
    console.log("Odpowiedź z enqueuePhraseGeneration:", response);
    res.status(202).json(response);
  } catch (error) {
    console.error("Błąd podczas generowania frazy:", error);
    res.status(500).json({ message: error.message });
  }
};
