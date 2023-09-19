const { Diary } = require('../../models');
const { HttpError } = require("../../helpers");

const getDiary = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const result = await Diary.findOne(
    { owner, ...req.body },
    "-createdAt -updatedAt" ,
    {
      skip,
      limit,
    }
  );
  if (!result) {
    throw HttpError(404, "Not Found");
  }

  res.json(result);
};

module.exports = getDiary;