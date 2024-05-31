import express from "express";
import corsMiddleware from "./middlewares/corsMiddleware.js";
import errorHandler from "./middlewares/errorHandler.js";
import addPhraseRoute from "./routes/addPhraseRoute.js";
import { verifyToken } from "./middlewares/authMiddleware.js";

import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(express.json());

app.use(corsMiddleware);

app.use("/home", authRoutes);
app.use("/dashboard", verifyToken, addPhraseRoute);

app.use(errorHandler);

export default app;
