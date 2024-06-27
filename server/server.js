import https from "https";
import app from "./app.js";

const port = process.env.PORT || 3000;

https.createServer(app).listen(port, () => {
  console.log(`Serwer uruchomiony na porcie: ${port}`);
});
