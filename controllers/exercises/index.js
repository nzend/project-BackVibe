const { ctrlWrapper } = require('../../helpers');

const getExercises = require('./getExercises');

module.exports = {
  getExercises: ctrlWrapper(getExercises),
};
