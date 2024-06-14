import amqplib from "amqplib";
import dotenv from "dotenv";
dotenv.config();

async function connectRabbitMQ() {
  const connection = await amqplib.connect(process.env.AMQP_URL);
  const channel = await connection.createChannel();
  const queue = process.env.AMQP_QUEUE;
  const durable = true;

  await channel.assertQueue(queue, { durable });
  return { connection, channel };
}

export default connectRabbitMQ;
