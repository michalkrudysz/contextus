import pool from "../config/dbConfig.js";

export async function updatePhraseProgress(data) {
  const query = `UPDATE user_phrases SET last_review_date = ?, level = ?, repetitions = ?, review_interval = ? WHERE id = ?`;
  const params = [
    data.lastReviewDate,
    data.level,
    data.repetitions,
    data.reviewInterval,
    data.id,
  ];

  try {
    const [result] = await pool.query(query, params);
    if (result.affectedRows === 0) {
      console.log(
        "No rows were updated - check if the provided ID exists and matches any records."
      );
    }
  } catch (error) {
    console.error("Error updating database: ", error.message);
    throw error;
  }
}
