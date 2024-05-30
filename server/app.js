const express = require("express");
const corsMiddleware = require("./middlewares/corsMiddleware");
const errorHandler = require("./middlewares/errorHandler");

const authRoutes = require("./routes/authRoutes");
const tokenRoutes = require("./routes/tokenRoutes"); // Dodane

const app = express();

app.use(express.json());

app.use(corsMiddleware);

app.use("/home", authRoutes);
app.use("/home", tokenRoutes); // Dodane

app.use(errorHandler);

module.exports = app;
