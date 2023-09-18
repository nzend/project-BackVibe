const { Diary } = require('../../models');
const { HttpError } = require('../../helpers');
const { Exercise } = require('../../models');


const deleteExercise = async (req, res) => {
  const { _id: owner } = req.user;
  const { date, exerciseId } = req.body;

  
  const exercise = await Exercise.findOne(
    { _id: exerciseId },
    '-createdAt -updatedAt'
  );

  const deleteExercise = {
    _id: exercise._id
  };

  const result = await Diary.findOneAndUpdate(
    { owner, date },
    { $pull: { exercises: deleteExercise } },
    { new: true }
  );

  if (!result) {
    throw HttpError(404, 'Not Found');
  }

  res.status(200).json({
    message: 'Exercise deleted successfully',
  });
};

module.exports = deleteExercise;
