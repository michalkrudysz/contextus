const db = require("../config/dbConfig");
const bcrypt = require("bcryptjs");
const { registerValidation } = require("./validationService");

exports.authenticateUser = async (username, password) => {
  console.log("Logowanie:", { username, password });
  if (username === "test" && password === "test") {
    return { success: true, username };
  }
  return { success: false };
};

exports.registerUser = async (username, email, password, repeatPassword) => {
  const { error } = registerValidation({
    username,
    email,
    password,
    repeatPassword,
  });
  if (error) {
    return { success: false, message: error.details[0].message };
  }

  const userCheckQuery = "SELECT * FROM users WHERE username = ? OR email = ?";
  const [users] = await db.promise().query(userCheckQuery, [username, email]);
  if (users.length > 0) {
    return {
      success: false,
      message: "Użytkownik z takim emailem lub nazwą użytkownika już istnieje",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const insertQuery =
    "INSERT INTO users (username, email, password, created_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP)";
  await db.promise().query(insertQuery, [username, email, hashedPassword]);

  return { success: true, username, email };
};
