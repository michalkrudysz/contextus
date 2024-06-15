import amqplib from "amqplib";
import dotenv from "dotenv";
dotenv.config();

async function connectRabbitMQ() {
  try {
    const connection = await amqplib.connect(process.env.AMQP_URL);
    console.log("Połączono z RabbitMQ.");
    const channel = await connection.createChannel();
    const queue = process.env.AMQP_QUEUE;
    const durable = true;

    await channel.assertQueue(queue, { durable });
    console.log(`Kolejka '${queue}' została zweryfikowana/zainicjowana.`);

    return { connection, channel };
  } catch (error) {
    console.error("Błąd podczas łączenia lub konfiguracji RabbitMQ:", error);
    throw error;
  }
}

export default connectRabbitMQ;
