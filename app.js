const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Іменований імпорт роутів
const { authRouter } = require("./routes/api");
// ___________________________________

// Тут нічого не чіпаємо!!!!
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
// __________________________________
// Документація
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// __________________________________

// Місце для роутів
app.use("/api/users", authRouter);

// _____________________________________________

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
