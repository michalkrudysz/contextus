const authService = require("../services/authService");

exports.register = async (req, res) => {
  const { username, email, password, repeatPassword } = req.body;
  const registerResult = await authService.registerUser(
    username,
    email,
    password,
    repeatPassword
  );

  if (registerResult.success) {
    res
      .status(201)
      .json({ message: "Rejestracja pomyślna", user: { username, email } });
  } else {
    res.status(400).json({ message: registerResult.message });
  }
};
