import pool from "../config/dbConfig.js";

async function updateSessionData(sessionId) {
  const query = `
    UPDATE ai_generated_phrases
    SET is_retrieved = 1
    WHERE session_id = ?
  `;

  try {
    const [result] = await pool.query(query, [sessionId]);
    return {
      changedRows: result.changedRows,
      message: result.changedRows > 0 ? "Update successful" : "No rows updated",
    };
  } catch (error) {
    throw new Error("Database operation failed: " + error.message);
  }
}

export { updateSessionData };
