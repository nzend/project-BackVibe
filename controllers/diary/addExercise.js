const { Diary } = require('../../models');
const { Exercise } = require('../../models');


const addExercise = async (req, res) => {
  const { _id: owner } = req.user;
  const { date, exerciseId, time, burnedCalories } = req.body;

  const exercise = await Exercise.findOne(
    { _id: exerciseId },
    '-createdAt -updatedAt'
  );

  const newExercise = {
    name: exercise.name,
    bodyPart: exercise.bodyPart,
    equipment: exercise.equipment,
    target: exercise.target,
    time,
    burnedCalories,
  };


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

};

module.exports = addExercise;
