const { Filter } = require('../../models');

const getFilters = async (req, res) => {
  const result = await Filter.find({...req.query}, "-createdAt -updatedAt");
  res.json(result);
};

module.exports = getFilters;



