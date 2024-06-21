import { updateSessionData } from "../services/updateRetrievedService.js";

export async function updateRetrieved(req, res) {
  const sessionId = req.body.session_id;
  try {
    const result = await updateSessionData(sessionId);
    if (result) {
      res.json({
        message: "Phrase session data updated successfully.",
        data: result,
      });
    } else {
      res.status(404).send("Phrase session not found.");
    }
  } catch (error) {
    res
      .status(500)
      .send("Error updating phrase session data: " + error.message);
  }
}
