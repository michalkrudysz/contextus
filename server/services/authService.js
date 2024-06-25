import { transporter } from "../config/emailConfig.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import db from "../config/dbConfig.js";
import { jwtSecret } from "../config/jwtConfig.js";
import { registerValidation } from "./validationService.js";

export const authenticateUser = async (username, password) => {
  try {
    const [users] = await db.query("SELECT * FROM users WHERE username = ?", [
      username,
    ]);
    if (users.length === 0) {
      return { success: false, message: "Użytkownik nie istnieje" };
    }
    const user = users[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      const token = jwt.sign({ username: user.username }, jwtSecret);
      return {
        success: true,
        username,
        firstname: user.firstname,
        token,
        userId: user.id,
      };
    }
    return { success: false, message: "Niepoprawny login lub hasło" };
  } catch (error) {
    return {
      success: false,
      message: "Błąd połączenia z bazą danych",
      error: error.message,
    };
  }
};

export const registerUser = async (
  firstname,
  username,
  email,
  password,
  repeatPassword
) => {
  try {
    const { error } = registerValidation({
      firstname,
      username,
      email,
      password,
      repeatPassword,
    });
    if (error) {
      return { success: false, message: error.details[0].message };
    }

    const [existing] = await db.query(
      "SELECT * FROM users WHERE username = ? OR email = ?",
      [username, email]
    );
    if (existing.length > 0) {
      return {
        success: false,
        message:
          "Użytkownik z takim emailem lub nazwą użytkownika już istnieje",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    await db.query(
      "INSERT INTO users (firstname, username, email, password, verification_code, is_verified, created_at) VALUES (?, ?, ?, ?, ?, FALSE, CURRENT_TIMESTAMP)",
      [firstname, username, email, hashedPassword, verificationCode]
    );

    const token = jwt.sign({ username }, jwtSecret);
    await sendVerificationEmail(username, email, verificationCode);

    return { success: true, username, email, token };
  } catch (error) {
    return {
      success: false,
      message: "Błąd podczas rejestracji użytkownika",
      error: error.message,
    };
  }
};

async function sendVerificationEmail(username, email, verificationCode) {
  let info = await transporter.sendMail({
    from: `"Contextus" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Kod weryfikacyjny",
    text: `Twój kod weryfikacyjny to: ${verificationCode}`,
    html: `<b>Twój kod weryfikacyjny to: ${verificationCode}</b>`,
  });

  console.log("Wiadomość została wysłana: %s", info.messageId);
}

export default {
  authenticateUser,
  registerUser,
};
