const { Exercise } = require('../../models');

const getExercises = async (req, res) => {
  const { page = 1, limit = 10, } = req.query;
  const skip = (page - 1) * limit;
  console.log("REQ", req.query);

  const result = await Exercise.find({...req.query}, "-createdAt -updatedAt").skip(skip)
  .limit(limit);;
  console.log("RES LENGTH",result.length);
 

  res.json(result);
};

module.exports = getExercises;


