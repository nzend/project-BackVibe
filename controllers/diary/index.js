const addProducts = require('./addProduct');
const addExercise = require('./addExercise');
const deleteExercise = require('./deleteExercise');
const { ctrlWrapper } = require('../../helpers');

module.exports = {
  addProducts: ctrlWrapper(addProducts),
  addExercise: ctrlWrapper(addExercise),
  deleteExercise: ctrlWrapper(deleteExercise),
};
