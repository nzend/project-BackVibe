const { Diary } = require('../../models');
const { Exercise } = require('../../models');
const { nanoid } = require('nanoid');

const addExercise = async (req, res) => {
  const { _id: owner } = req.user;
  const { date, exerciseId, time, calories } = req.body;

  const exercise = await Exercise.findOne(
    { _id: exerciseId },
    '-createdAt -updatedAt'
  );

  const newExercise = {
    _id: nanoid(),
    name: exercise.name,
    bodyPart: exercise.bodyPart,
    equipment: exercise.equipment,
    target: exercise.target,
    time,
    calories,
  };

  try {
    const result = await Diary.findOneAndUpdate(
      { owner, date },
      { $push: { exercises: newExercise } },
      { new: true }
    );

    if (!result) {
      const newDiaryEntry = await Diary.create({
        owner,
        date,
        exercises: [newExercise],
      });
      res.status(201).json(newDiaryEntry);
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500);
  }
};

module.exports = addExercise;
