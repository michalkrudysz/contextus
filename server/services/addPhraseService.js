import pool from "../config/dbConfig.js";

export const addPhraseService = async ({
  user_id,
  phrase,
  translation,
  level,
  source,
}) => {
  const query = `
    INSERT INTO user_phrases (user_id, phrase, translation, level, source) VALUES (?, ?, ?, ?, ?);
  `;
  const values = [user_id, phrase, translation, level, source];

  const [result] = await pool.query(query, values);
  return result;
};
