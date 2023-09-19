const { Category } = require('../../models');

const getCategories = async (req, res) => {
  const result = await Category.find( null, "-createdAt -updatedAt");
  res.json(result);
};

module.exports = getCategories;