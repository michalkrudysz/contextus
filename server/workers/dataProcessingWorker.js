import connectRabbitMQ from "../config/amqpConfig.js";

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

function messageHandler(msg, channel) {
  if (msg && msg.content) {
    const data = msg.content.toString();
    const sentences = data.split(/(?<=[.?!])\s*/);
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
  }
}

startWorker();
