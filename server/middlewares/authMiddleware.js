import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/jwtConfig.js";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("Received Authorization Header:", authHeader);
  if (authHeader) {
    const parts = authHeader.split(" ");
    console.log("Split parts:", parts);
    let token;
    if (parts.length === 2 && parts[0] === "Bearer") {
      token = parts[1];
    } else if (parts.length === 1) {
      token = parts[0];
    } else {
      return res
        .status(401)
        .json({ message: "Format nagłówka autoryzacji jest nieprawidłowy" });
    }
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        console.log("JWT Error:", err);
        return res
          .status(403)
          .json({ message: "Token jest nieprawidłowy", error: err.message });
      }
      req.user = decoded;
      next();
    });
  } else {
    res.status(401).json({ message: "Brak tokena autoryzacyjnego" });
  }
};
