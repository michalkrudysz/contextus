import pool from "../config/dbConfig.js";

export async function checkIfPhraseIsGenerated(userId) {
  const querySelect = `
        SELECT * 
        FROM ai_generated_phrases 
        WHERE user_id = ? AND is_retrieved = 0 
        ORDER BY generation_date DESC;
    `;

  try {
    const [rows] = await pool.query(querySelect, [userId]);
    if (rows.length > 0) {
      return rows;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Database query error:", error);
    return null;
  }
}
