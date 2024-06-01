import express from "express";
import corsMiddleware from "./middlewares/corsMiddleware.js";
import errorHandler from "./middlewares/errorHandler.js";
import phraseRoute from "./routes/phraseRoute.js";
import { verifyToken } from "./middlewares/authMiddleware.js";

import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(express.json());

app.use(corsMiddleware);

app.use("/home", authRoutes);
app.use("/dashboard", verifyToken, phraseRoute);

app.use(errorHandler);

export default app;
