import pool from "../config/dbConfig.js";
export const updateUsername = async (req, res) => {
  const { username } = req.body;

  try {
    const query = "SELECT is_verified FROM users WHERE username = ?";
    const [results] = await pool.query(query, [username]);

    if (results.length > 0) {
      const { is_verified } = results[0];
      if (is_verified === 1) {
        res.status(200).json({
          success: true,
          message: "Account is verified.",
          data: { username, is_verified },
        });
      } else {
        res.status(403).json({
          success: false,
          message: "Account is not verified.",
          data: { username, is_verified },
        });
      }
    } else {
      res.status(404).json({
        success: false,
        message: "Username not found.",
        data: { username },
      });
    }
  } catch (error) {
    console.error("Error processing username:", error);
    res.status(500).send("Database error: " + error.message);
  }
};
