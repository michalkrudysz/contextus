import pool from "../config/dbConfig.js";

export async function checkIfPhraseIsGenerated(userId) {
  const querySelect = `
        SELECT * 
        FROM ai_generated_phrases 
        WHERE user_id = ? AND is_retrieved = 0 
        ORDER BY generation_date DESC 
        LIMIT 5;
    `;

  const queryUpdate = `
        UPDATE ai_generated_phrases 
        SET is_retrieved = 1 
        WHERE id IN (?);
    `;

  try {
    const [rows] = await pool.query(querySelect, [userId]);
    if (rows.length > 0) {
      const idsToUpdate = rows.map((row) => row.id);
      await pool.query(queryUpdate, [idsToUpdate]);
      return rows;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Database query error:", error);
    return null;
  }
}
