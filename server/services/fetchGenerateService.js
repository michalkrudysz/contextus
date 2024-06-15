import pool from "../config/dbConfig.js";

export async function checkIfPhraseIsGenerated(userId) {
  const currentTime = new Date();
  const pastTime = new Date(currentTime.getTime() - 60 * 60000);
  const query = `
    SELECT * FROM ai_generated_phrases 
    WHERE user_id = ? AND generation_date > ?
    ORDER BY generation_date DESC
    LIMIT 5;
  `;
  try {
    const [rows] = await pool.query(query, [userId, pastTime]);
    return rows.length > 0 ? rows : null;
  } catch (error) {
    console.error("Database query error:", error);
    return null;
  }
}
