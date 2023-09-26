const { Diary } = require('../../models');
const { HttpError } = require("../../helpers");


const getDiary = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, date } = req.query;
  const skip = (page - 1) * limit;
  const filter = { date, owner};


  const result = await Diary.findOne(
    filter,
    "-createdAt -updatedAt" ,
    {
      skip,
      limit,
    }, 
  );

  if (Object.values(req.user.bodyParameters).includes(undefined)) {
    throw HttpError(203, "The user parameters are not specified, for further work, enter your data correctly.");
  }
  if (Object.keys(req.query).length < 1) {
    throw HttpError(404, "Not Found, enter the date!");
  }
  if (!result) {
    throw HttpError(204, "There are no entries in the diary for this date");
  }
  
  
 
  const burnedCalories = result.exercises.map(item => item.burnedCalories).reduce((previousValue, burnedCalories) => {
    return previousValue + burnedCalories;
  }, 0);;
  const consumedCalories = result.products.map(item => item.calories).reduce((previousValue, consumedCalories) => {
    return previousValue + consumedCalories;
  }, 0);
  const doneExercisesTime = result.exercises.map(item => item.time).reduce((previousValue, exerciseTime) => {
    return previousValue + exerciseTime;
  }, 0);

  const updateResult = {
  _id: result._id,
  owner: result.owner,
  date: result.date,
  burnedCalories,
  consumedCalories,
  doneExercisesTime,
  exercises : [...result.exercises],
  products: [...result.products]
  }
 
  res.json(updateResult);
};

module.exports = getDiary;