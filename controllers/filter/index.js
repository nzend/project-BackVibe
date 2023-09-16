const { ctrlWrapper } = require('../../helpers');

// const getByFilters = require('./getByFilters');
const getBodyParts = require('./getBodyParts');
const getMuscles = require('./getMuscles');
const getEquipment = require('./getEquipment');

module.exports = {
  // getByFilters,
  getBodyParts: ctrlWrapper(getBodyParts),
  getMuscles: ctrlWrapper(getMuscles),
  getEquipment: ctrlWrapper(getEquipment),
};
