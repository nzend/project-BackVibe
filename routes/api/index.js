const authRouter = require("./auth");
const diaryRouter = require("./diary")
const exercisesRouter = require('./exercises');
const filterRouter = require('./filter');
const productsRouter = require('./products');
const categoriesRouter = require('./categories');





module.exports = {
  authRouter,
  exercisesRouter,
  filterRouter,
  productsRouter,
  diaryRouter,
  categoriesRouter
};
