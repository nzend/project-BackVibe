const { Exercise } = require("../../models");
const { User } = require("../../models");
const { Diary } = require("../../models");

const getStatistics = async (req, res) => {
  const AllExercises = await Exercise.count();
  const AllUsers = await User.count();
  const exercisesArr = await Diary.aggregate([{ $unwind: "$exercises" }]);
  const training = exercisesArr.reduce(
    (acc, current) => {
      acc.time = acc.time + current.exercises.time;
      acc.calories = acc.calories + current.exercises.burnedCalories;
      return acc;
    },
    { time: 0, calories: 0 }
  );

  res.json({
    AllExercises,
    AllUsers,
    usersBurnedCalories: training.calories,
    usersTimeTraining: training.time,
    usersTraining: exercisesArr.length,
  });
};

module.exports = getStatistics;
