const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();

// Іменований імпорт роутів
const { authRouter, dairyRouter } = require('./routes/api');
// ___________________________________

// Тут нічого не чіпаємо!!!!
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
// __________________________________

// Місце для роутів
app.use("/api/users", authRouter);
app.use('/api/dairy', dairyRouter);

// _____________________________________________

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
