const ctrlAuth = require('./auth');
const ctrlDiary = require('./diary');
const ctrlExercises = require('./exercises');
const ctrlFilter = require('./filter');
const ctrlProducts = require('./products');
const ctrlCategories = require('./productsCategories');
const ctrlAssets = require('./assets')

module.exports = {
  ctrlAuth,
  ctrlExercises,
  ctrlFilter,
  ctrlProducts,
  ctrlDiary,
  ctrlCategories,
  ctrlAssets
};
