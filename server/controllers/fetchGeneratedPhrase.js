import { checkIfPhraseIsGenerated } from "../services/fetchGenerateService.js";

export async function fetchGeneratedPhrase(req, res) {
  const userId = req.params.userId;
  try {
    let attempts = 0;
    const maxAttempts = 10;
    const interval = 2000;

    const checkPhrases = async () => {
      let phrases = await checkIfPhraseIsGenerated(userId);
      if (!phrases && attempts < maxAttempts) {
        attempts++;
        setTimeout(checkPhrases, interval);
      } else if (!phrases) {
        res
          .status(202)
          .send("Phrases are still being generated. Please check back later.");
      } else {
        res.json(phrases);
      }
    };

    checkPhrases();
  } catch (error) {
    res.status(500).send("Error fetching generated phrases: " + error.message);
  }
}
