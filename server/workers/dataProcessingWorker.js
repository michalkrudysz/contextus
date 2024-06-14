import connectRabbitMQ from "../config/amqpConfig.js";
import pool from "../config/dbConfig.js";

async function startWorker() {
  try {
    const { channel } = await connectRabbitMQ();
    setupConsumer(channel);
  } catch (error) {
    console.error(`Error initializing worker: ${error}`);
  }
}

function setupConsumer(channel) {
  const queue = "dataProcessingQueue";
  channel.assertQueue(queue, { durable: true });
  channel.consume(queue, (msg) => messageHandler(msg, channel), {
    noAck: true,
  });
}

async function messageHandler(msg, channel) {
  if (msg && msg.content) {
    const dataString = msg.content.toString();
    console.log(`Received data: ${dataString}`);

    const data = JSON.parse(dataString);

    console.log(`UserID is: ${data.userId}`);

    const sentences = data.message.split(/(?<=[.?!])\s*/);
    const processedData = sentences
      .map((sentence) => ({ sentence: sentence.trim() }))
      .filter(
        (obj) => !/\d|\\/.test(obj.sentence) && !/^"+$/.test(obj.sentence)
      );

    const pairedData = [];
    for (let i = 0; i < processedData.length; i += 2) {
      const enText = processedData[i] ? processedData[i].sentence : "";
      const plText = processedData[i + 1] ? processedData[i + 1].sentence : "";
      pairedData.push({ EN: enText, PL: plText });
    }

    console.log(`Processed and paired data: `, pairedData);
    await saveDataToDatabase(pairedData, data.userId);
  }
}

async function saveDataToDatabase(data, userId) {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    for (const item of data) {
      await connection.query(
        "INSERT INTO ai_generated_phrases (phrase_en, phrase_pl, user_id) VALUES (?, ?, ?)",
        [item.EN, item.PL, userId]
      );
    }
    await connection.commit();
  } catch (error) {
    console.error("Nie udało się zapisać danych do bazy danych:", error);
    await connection.rollback();
  } finally {
    connection.release();
  }
}

startWorker();
