const { ctrlWrapper } = require('../../helpers');

// const getByFilters = require('./getByFilters');
const getAllProducts = require('./getAllProducts');


module.exports = {
    getAllProducts: ctrlWrapper(getAllProducts),
};
