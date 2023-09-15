const { Filter } = require('../../models');

const getBodyParts = async (req, res) => {
  const result = await Filter.find({ filter: 'Body parts' });

  res.json(result);
};

module.exports = getBodyParts;
