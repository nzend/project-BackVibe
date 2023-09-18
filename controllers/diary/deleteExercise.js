const { Diary } = require('../../models');
const { HttpError } = require('../../helpers');

const deleteExercise = async (req, res) => {
  const { _id: owner } = req.user;
  const { date, exerciseId } = req.body;


  const result = await Diary.findOneAndUpdate(
    { owner, date },
    { $pull: { exercises: { _id: exerciseId } } }, 
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
