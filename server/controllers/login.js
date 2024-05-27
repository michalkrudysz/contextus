const authService = require("../services/authService");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  console.log("Dane logowania:", { username, password });
  const authResult = await authService.authenticateUser(username, password);

  if (authResult.success) {
    res.json({ message: "Zalogowany pomyślnie", user: { username } });
  } else {
    res.status(401).json({ message: "Nieudane logowanie" });
  }
};
