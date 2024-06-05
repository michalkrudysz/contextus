import amqplib from "amqplib";

async function connectRabbitMQ() {
  const connection = await amqplib.connect("amqp://localhost");
  const channel = await connection.createChannel();
  const queue = "phraseUpdateQueue";
  const durable = true;

  await channel.assertQueue(queue, { durable });
  return { connection, channel };
}

export default connectRabbitMQ;
