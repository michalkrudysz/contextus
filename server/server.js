const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Test");
});

app.listen(port, () => {
  console.log(`Serwer uruchomiony na porcie: ${port}`);
});
