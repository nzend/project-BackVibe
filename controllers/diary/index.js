const addProducts = require('./addProduct');
const addExercise = require('./addExercise');
const { ctrlWrapper } = require('../../helpers');

module.exports = {
  addProducts: ctrlWrapper(addProducts),
  addExercise: ctrlWrapper(addExercise)
};
