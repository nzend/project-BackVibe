const ctrlAuth = require('./auth');
const ctrlDiary = require('./diary');
const ctrlExercises = require('./exercises');
const ctrlFilter = require('./filter');
const ctrlProducts = require('./products');
const ctrlCategories = require('./productsCategories');

module.exports = {
  ctrlAuth,
  ctrlExercises,
  ctrlFilter,
  ctrlProducts,
  ctrlDiary,
  ctrlCategories
};
