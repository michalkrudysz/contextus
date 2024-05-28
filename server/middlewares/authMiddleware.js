const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/jwtConfig");

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Token jest nieprawidłowy" });
      }
      req.user = decoded;
      next();
    });
  } else {
    res.status(401).json({ message: "Brak tokena autoryzacyjnego" });
  }
};
