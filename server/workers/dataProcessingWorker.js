import connectRabbitMQ from "../config/amqpConfig.js";
import pool from "../config/dbConfig.js";
import { v4 as uuidv4 } from "uuid";

async function startWorker() {
  try {
    const { channel } = await connectRabbitMQ();
    const sessionId = uuidv4();
    console.log(`Session ID generated: ${sessionId}`);
    setupConsumer(channel, sessionId);
  } catch (error) {
    console.error(`Error initializing worker: ${error}`);
  }
}

function setupConsumer(channel, sessionId) {
  const queue = "dataProcessingQueue";
  channel.assertQueue(queue, { durable: true });
  channel.consume(queue, (msg) => messageHandler(msg, channel, sessionId), {
    noAck: true,
  });
}

async function messageHandler(msg, channel, sessionId) {
  if (msg && msg.content) {
    const dataString = msg.content.toString();
    console.log(`Received data: ${dataString}`);

    const data = JSON.parse(dataString);
    console.log(
      `Processing data for User ID: ${data.userId} with Session ID: ${sessionId}`
    );

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

    await saveDataToDatabase(pairedData, data.userId, sessionId);
  }
}

async function saveDataToDatabase(data, userId, sessionId) {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    for (const item of data) {
      if (item.EN.length >= 5 && item.PL.length >= 5) {
        await connection.query(
          "INSERT INTO ai_generated_phrases (phrase_en, phrase_pl, user_id, session_id) VALUES (?, ?, ?, ?)",
          [item.EN, item.PL, userId, sessionId]
        );
      } else {
        console.log(
          `Rejected phrase: EN="${item.EN}", PL="${item.PL}" - one or both are less than 5 characters.`
        );
      }
    }
    await connection.commit();
  } catch (error) {
    console.error("Failed to save data to the database:", error);
    await connection.rollback();
  } finally {
    connection.release();
  }
}

startWorker();
