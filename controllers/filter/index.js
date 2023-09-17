const { ctrlWrapper } = require('../../helpers');

// const getByFilters = require('./getByFilters');

const getFilters = require('./getFilters');


module.exports = {

  getFilters: ctrlWrapper(getFilters),

};
