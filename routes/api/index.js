const authRouter = require("./auth");
const diaryRouter = require("./diary");
const exercisesRouter = require("./exercises");
const filterRouter = require("./filter");
const productsRouter = require("./products");
const categoriesRouter = require("./categories");
const assetsRouter = require("./assets");
const statisticsRouter = require("./statistics");

module.exports = {
  authRouter,
  exercisesRouter,
  filterRouter,
  productsRouter,
  diaryRouter,
  categoriesRouter,
  assetsRouter,
  statisticsRouter,
};
