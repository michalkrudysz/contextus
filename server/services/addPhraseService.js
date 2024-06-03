import pool from "../config/dbConfig.js";

export const addPhraseService = async ({
  user_id,
  phrase,
  translation,
  level,
  source,
  last_review_date,
  review_interval,
}) => {
  const query = `
    INSERT INTO user_phrases (user_id, phrase, translation, level, source, last_review_date, review_interval)
    VALUES (?, ?, ?, ?, ?, ?, ?);
  `;

  const values = [
    user_id,
    phrase,
    translation,
    level,
    source,
    last_review_date,
    review_interval,
  ];

  const [result] = await pool.query(query, values);
  return result;
};
