const { ctrlWrapper } = require('../../helpers');

// const getByFilters = require('./getByFilters');
const getBodyParts = require('./getBodyParts');
const getFilters = require('./getFilters');
const getEquipment = require('./getEquipment');

module.exports = {
  // getByFilters,
  getBodyParts: ctrlWrapper(getBodyParts),
  getFilters: ctrlWrapper(getFilters),
  getEquipment: ctrlWrapper(getEquipment),
};
