import { transporter } from "./config/emailConfig.js";
import dotenv from "dotenv";

dotenv.config();

const sendTestEmail = async () => {
  try {
    let info = await transporter.sendMail({
      from: `"Contextus" <${process.env.SMTP_USER}>`,
      to: "omis66@o2.pl",
      subject: "Kod weryfikacyjny",
      text: "Cześć, to test",
      html: "<b>Cześć, to test</b>",
    });

    console.log("Wiadomość została wysłana: %s", info.messageId);
  } catch (error) {
    console.error("Wystąpił błąd podczas wysyłania wiadomości: ", error);
  }
};

sendTestEmail();
