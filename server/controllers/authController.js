exports.login = (req, res) => {
  const { username, password } = req.body;
  console.log("Login Data:", req.body);
  if (username === "test" && password === "test") {
    res.json({ message: "Zalogowany pomyślnie" });
  } else {
    res.status(401).json({ message: "Nieudane logowanie" });
  }
};

exports.register = (req, res) => {
  const { username, email, password } = req.body;
  console.log("Register Data:", req.body);
  res
    .status(201)
    .json({ message: "Rejestracja pomyślna", user: { username, email } });
};
