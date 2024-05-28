const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../config/dbConfig");
const { jwtSecret } = require("../config/jwtConfig");
const { registerValidation } = require("./validationService");

exports.authenticateUser = async (username, password) => {
  try {
    const [users] = await db
      .promise()
      .query("SELECT * FROM users WHERE username = ?", [username]);
    if (users.length === 0) {
      return { success: false, message: "Użytkownik nie istnieje" };
    }
    const user = users[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      const token = jwt.sign({ username: user.username }, jwtSecret, {
        expiresIn: "1h",
      });
      return { success: true, username, token, userId: user.id };
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

exports.registerUser = async (username, email, password, repeatPassword) => {
  try {
    const { error } = registerValidation({
      username,
      email,
      password,
      repeatPassword,
    });
    if (error) {
      return { success: false, message: error.details[0].message };
    }

    const [existing] = await db
      .promise()
      .query("SELECT * FROM users WHERE username = ? OR email = ?", [
        username,
        email,
      ]);
    if (existing.length > 0) {
      return {
        success: false,
        message:
          "Użytkownik z takim emailem lub nazwą użytkownika już istnieje",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await db
      .promise()
      .query(
        "INSERT INTO users (username, email, password, created_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP)",
        [username, email, hashedPassword]
      );
    return { success: true, username, email };
  } catch (error) {
    return {
      success: false,
      message: "Błąd podczas rejestracji użytkownika",
      error: error.message,
    };
  }
};
