const calculateCalories = require("../../helpers/calculateCalories");
const { User } = require("../../models");

const userBody = async (req, res) => {
  const { _id } = req.user;
  
  const body = req.body;
  const dailyСalories = calculateCalories(body);
  const dailyTime = 110;

  const updatedUser = await User.findByIdAndUpdate(
    _id,
    { bodyParameters: { ...body }, dailyСalories, dailyTime, },
    {
      new: true,
      select: "-_id -createdAt -updatedAt -password -verify -verificationToken",
    }
  );
  res.json(updatedUser);
};

module.exports = userBody;
