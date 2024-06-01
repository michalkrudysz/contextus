import pool from "../config/dbConfig.js";

export const fetchPhrases = async (userId) => {
  const query =
    "SELECT phrase, translation, level, repetitions FROM user_phrases WHERE user_id = ?";
  const values = [userId];
  try {
    const [results] = await pool.query(query, values);
    return results;
  } catch (error) {
    throw error;
  }
};
