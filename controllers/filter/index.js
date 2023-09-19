const { ctrlWrapper } = require('../../helpers');
const getFilters = require('./getFilters');

module.exports = {

  getFilters: ctrlWrapper(getFilters),

};
