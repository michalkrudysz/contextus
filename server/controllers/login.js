const authService = require("../services/authService");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const authResult = await authService.authenticateUser(username, password);

  if (authResult.success) {
    res.json({
      message: "Zalogowany pomyślnie",
      token: authResult.token,
      user: { username, userId: authResult.userId },
    });
  } else {
    res
      .status(401)
      .json({ message: authResult.message || "Nieudane logowanie" });
  }
};
