const { Filter } = require('../../models');

const getMuscles = async (req, res) => {
  const result = await Filter.find({ filter: 'Muscles' });

  res.json(result);
};

module.exports = getMuscles;
