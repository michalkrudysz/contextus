import connectRabbitMQ from "../config/amqpConfig.js";
import { updatePhraseProgress } from "../services/updatePhraseProgressService.js";

const processedIds = new Set();

async function startWorker() {
  try {
    const { channel } = await connectRabbitMQ();
    setupConsumer(channel);
  } catch (error) {}
}

function setupConsumer(channel) {
  channel.consume(
    "phraseUpdateQueue",
    (msg) => {
      const data = JSON.parse(msg.content.toString());

      if (processedIds.has(data.id)) {
        channel.ack(msg);
        return;
      }

      updatePhraseProgress(data)
        .then(() => {
          processedIds.add(data.id);
          channel.ack(msg);
        })
        .catch((error) => {
          channel.nack(msg);
        });
    },
    { noAck: false }
  );
}

startWorker();
