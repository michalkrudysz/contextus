import pool from "../config/dbConfig.js";

export const compare = async (req, res) => {
  const { username, code } = req.body;

  if (!username || !code) {
    return res.status(400).json({ message: "Username and code are required" });
  }

  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute(
      "SELECT verification_code FROM users WHERE username = ?",
      [username]
    );

    if (rows.length === 0) {
      await connection.release();
      return res.status(404).json({ message: "User not found" });
    }

    const verificationCode = rows[0].verification_code;

    let isVerified = 0;
    if (verificationCode == code) {
      isVerified = 1;
    }

    await connection.execute(
      "UPDATE users SET is_verified = ? WHERE username = ?",
      [isVerified, username]
    );

    await connection.release();

    if (isVerified) {
      res.status(200).json({ message: "Verification successful" });
    } else {
      res.status(200).json({ message: "Verification failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
