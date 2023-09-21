const { Diary } = require('../../models');
const { HttpError } = require("../../helpers");

const getDiary = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, date } = req.query;
  const skip = (page - 1) * limit;
  const filter = { date, owner}

  const result = await Diary.findOne(
    filter,
    "-createdAt -updatedAt" ,
    {
      skip,
      limit,
    }
  );
  if (Object.keys(req.query).length < 1) {
    throw HttpError(404, "Not Found, enter the date!");
  }
  if (!result) {
    throw HttpError(404, "There are no entries in the diary for this date");
  }

  res.json(result);
};

module.exports = getDiary;