const authService = require("../services/authService");

exports.register = async (req, res) => {
  const { firstname, username, email, password, repeatPassword } = req.body;
  const registerResult = await authService.registerUser(
    firstname,
    username,
    email,
    password,
    repeatPassword
  );

  if (registerResult.success) {
    res
      .status(201)
      .json({
        message: "Rejestracja pomyślna",
        user: { firstname, username, email },
      });
  } else {
    res.status(400).json({ message: registerResult.message });
  }
};
