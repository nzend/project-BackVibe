const { Filter } = require('../../models');

const getEquipment = async (req, res) => {
  const result = await Filter.find({ filter: 'Equipment' });

  res.json(result);
};

module.exports = getEquipment;
