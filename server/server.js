import https from "https";
import fs from "fs";
import app from "./app.js";

const port = process.env.PORT || 3000;

try {
  const key = fs.readFileSync(
    "/home/ubuntu/contextus/server/contextus_key.pem"
  );
  console.log("Klucz prywatny został pomyślnie odczytany.");
  const cert = fs.readFileSync(
    "/home/ubuntu/contextus/server/contextus_cert.crt"
  );
  console.log("Certyfikat został pomyślnie odczytany.");

  const options = {
    key: key,
    cert: cert,
  };

  https.createServer(options, app).listen(port, () => {
    console.log(`Serwer uruchomiony na porcie: ${port}`);
  });
} catch (error) {
  console.error("Błąd podczas odczytu plików klucza/certyfikatu:", error);
}
