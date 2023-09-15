const { Exercise } = require('../../models');

const getExercises = async (req, res) => {
  const result = await Exercise.find();

  res.json(result);
};

module.exports = getExercises;
