const { Exercise } = require('../../models');

const getExercises = async (req, res) => {
  const { page = 1, limit = 20, } = req.query;
  const skip = (page - 1) * limit;
  if (Object.values(req.user.bodyParameters).includes(undefined)) {
    throw HttpError(203, "The user parameters are not specified, for further work, enter your data correctly.");
  }
  const result = await Exercise.find({...req.query}, "-createdAt -updatedAt").skip(skip)
  .limit(limit);
  res.json(result);
};

module.exports = getExercises;


