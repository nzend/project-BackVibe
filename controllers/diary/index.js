const addProducts = require('./addProduct');
const addExercise = require('./addExercise');
const deleteExercise = require('./deleteExercise');
const getDiary = require('./getDiary');
const deleteProduct = require('./deleteProduct');

const { ctrlWrapper } = require('../../helpers');

module.exports = {
  addProducts: ctrlWrapper(addProducts),
  addExercise: ctrlWrapper(addExercise),
  deleteExercise: ctrlWrapper(deleteExercise),
  getDiary: ctrlWrapper(getDiary),
  deleteProduct: ctrlWrapper(deleteProduct)
};
