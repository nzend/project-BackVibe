const authRouter = require("./auth");
const dairyRouter = require("./dairy")
const exercisesRouter = require('./exercises');
const filterRouter = require('./filter');
const productsRouter = require('./products');





module.exports = {
  authRouter,
  exercisesRouter,
  filterRouter,
  productsRouter,
  dairyRouter
};
