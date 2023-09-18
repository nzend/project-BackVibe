const addProducts = require('./addProduct');
const { ctrlWrapper } = require('../../helpers');

module.exports = {
  addProducts: ctrlWrapper(addProducts)
};
