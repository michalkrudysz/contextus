import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/jwtConfig.js";

export const checkToken = (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(400).json({ isValid: false, message: "Brak tokena" });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        isValid: false,
        message: "Token jest nieprawidłowy",
      });
    }
    res.json({ isValid: true });
  });
};
