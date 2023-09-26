const { Filter } = require('../../models');

const getFilters = async (req, res) => {
  if (Object.values(req.user.bodyParameters).includes(undefined)) {
    throw HttpError(203, "The user parameters are not specified, for further work, enter your data correctly.");
  }
  const result = await Filter.find({...req.query}, "-createdAt -updatedAt");
  res.json(result);
};

module.exports = getFilters;



