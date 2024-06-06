import connectRabbitMQ from "../config/amqpConfig.js";
import { updatePhraseProgress } from "../services/updatePhraseProgressService.js";

async function startWorker() {
  try {
    const { channel } = await connectRabbitMQ();
    setupConsumer(channel);
  } catch (error) {
    console.error("Nie udało się uruchomić workera z powodu błędu:", error);
  }
}

function setupConsumer(channel) {
  channel.consume("phraseUpdateQueue", (msg) => messageHandler(msg, channel), {
    noAck: false,
  });
}

async function messageHandler(msg, channel) {
  if (msg && msg.content) {
    const data = JSON.parse(msg.content.toString());
    try {
      await updatePhraseProgress(data);
      channel.ack(msg);
    } catch (error) {
      console.error("Błąd podczas przetwarzania wiadomości:", error);
      channel.nack(msg);
    }
  } else {
    console.error("Otrzymano pustą lub nieprawidłową wiadomość.");
    channel.nack(msg);
  }
}

startWorker();
