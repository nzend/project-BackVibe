const authRouter = require("./auth");
const diaryRouter = require("./diary")
const exercisesRouter = require('./exercises');
const filterRouter = require('./filter');
const productsRouter = require('./products');





module.exports = {
  authRouter,
  exercisesRouter,
  filterRouter,
  productsRouter,
  diaryRouter
};
