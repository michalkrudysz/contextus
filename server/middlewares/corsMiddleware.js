// Importowanie modułu cors
import cors from "cors";

// Definicja opcji CORS, które pozwolą na przyjmowanie żądań z konkretnej domeny
const corsOptions = {
  origin: "https://contextus.pl", // Tylko żądania z tej domeny będą akceptowane
  methods: ["GET", "POST", "PUT", "DELETE"], // Dozwolone metody
  allowedHeaders: ["Content-Type", "Authorization"], // Dozwolone nagłówki
  optionsSuccessStatus: 200, // Dla przeglądarek legacy wymagających tego statusu dla żądań OPTIONS
};

// Eksportowanie skonfigurowanego middleware CORS
export default cors(corsOptions);
