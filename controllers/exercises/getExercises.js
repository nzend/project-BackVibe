const { Exercise } = require('../../models');

const getExercises = async (req, res) => {
  const { page = 1, limit = 10, } = req.query;
  const skip = (page - 1) * limit;
  const result = await Exercise.find({...req.query}, "-createdAt -updatedAt").skip(skip)
  .limit(limit);
  res.json(result);
};

module.exports = getExercises;


