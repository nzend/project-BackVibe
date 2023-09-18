const addProducts = require('./addProduct');
const addExercise = require('./addExercise');
const getDiary = require('./getDiary');
const deleteProduct = require('./deleteProduct');

const { ctrlWrapper } = require('../../helpers');

module.exports = {
  addProducts: ctrlWrapper(addProducts),
  addExercise: ctrlWrapper(addExercise),
  getDiary: ctrlWrapper(getDiary),
  deleteProduct: ctrlWrapper(deleteProduct)
};
