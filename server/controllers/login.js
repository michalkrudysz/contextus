import authService from "../services/authService.js";

export const login = async (req, res) => {
  const { username, password } = req.body;
  const authResult = await authService.authenticateUser(username, password);

  if (authResult.success) {
    res.json({
      message: "Zalogowany pomyślnie",
      token: authResult.token,
      user: {
        username,
        firstname: authResult.firstname,
        userId: authResult.userId,
      },
    });
  } else {
    res
      .status(401)
      .json({ message: authResult.message || "Nieudane logowanie" });
  }
};
