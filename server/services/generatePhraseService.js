import connectRabbitMQ from "../config/amqpConfig.js";
import pool from "../config/dbConfig.js";

export async function enqueuePhraseGeneration(data) {
  const { userId, word } = data;

  try {
    const today = new Date().toISOString().slice(0, 10);

    // Sprawdzanie czy użytkownik ma specjalne uprawnienia
    if (userId !== 1) {
      const [rows] = await pool.query(
        "SELECT COUNT(DISTINCT session_id) as sessionCount FROM ai_generated_phrases WHERE user_id = ? AND DATE(generation_date) = ?",
        [userId, today]
      );

      console.log(
        `Liczba unikalnych sesji dla użytkownika ${userId} w dniu ${today}: ${rows[0].sessionCount}`
      );

      if (rows[0].sessionCount >= 2) {
        return {
          message:
            "Przy darmowym planie możesz korzystać z funkcji generowania zwrotów przez SI maksymalnie dwa razy na dobę.",
        };
      }
    }

    const { channel } = await connectRabbitMQ();
    const queue = "gptQueue";
    const message = { word, userId };

    console.log(
      `Łączenie z RabbitMQ i dodawanie wiadomości do kolejki: ${queue}`
    );
    await channel.assertQueue(queue, { durable: true });
    const messageBuffer = Buffer.from(JSON.stringify(message));
    channel.sendToQueue(queue, messageBuffer, { persistent: true });

    return {
      message: "Zlecenie generowania frazy zostało dodane do kolejki.",
    };
  } catch (error) {
    console.error(
      `Error enqueuing phrase generation for user ${userId}: ${error.message}`
    );
    throw new Error(
      "Nie udało się dodać zlecenia do kolejki: " + error.message
    );
  }
}
