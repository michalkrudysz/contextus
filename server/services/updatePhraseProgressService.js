import pool from "../config/dbConfig.js";
import connectRabbitMQ from "../config/amqpConfig.js";

export async function updatePhraseProgress(data) {
  const formattedDate = new Date(data.lastReviewDate)
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
  const query = `UPDATE user_phrases SET last_review_date = ?, level = ?, repetitions = ?, review_interval = ? WHERE id = ?`;
  const params = [
    formattedDate,
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

  const { channel } = await connectRabbitMQ();
  const queue = "phraseUpdateQueue";
  try {
    await channel.assertQueue(queue, { durable: true });
    const messageBuffer = Buffer.from(JSON.stringify(data));
    channel.sendToQueue(queue, messageBuffer, { persistent: true });
  } catch (error) {
    throw new Error(`Nie udało się wysłać do kolejki: ${error.message}`);
  }
}
