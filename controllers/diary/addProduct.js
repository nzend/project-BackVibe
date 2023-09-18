const { Diary } = require('../../models');

const addProducts = async (req, res) => {
  const { _id } = req.user;
  console.log(_id);

  console.log("REQBODy", req.body);

  const result = await Diary.create({ ...req.body, owner:[_id] });
  console.log("RESULT", result);
 

  res.status(201).json(result);
};

module.exports = addProducts;



 