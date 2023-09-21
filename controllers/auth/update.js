const calculateCalories = require("../../helpers/calculateCalories");
const { User } = require("../../models");

const update = async (req, res) => {
  const {
    name,
    height,
    currentWeight,
    desiredWeight,
    birthday,
    blood,
    sex,
    levelActivity,
  } = req.body;

  const dailyСalories = calculateCalories(req.body);
  const dailyTime = 110;
  const userData = {
    name,
    dailyTime,
    dailyСalories,
    bodyParameters: {
      height,
      currentWeight,
      desiredWeight,
      birthday,
      blood,
      sex,
      levelActivity,
    },
  };

  if (req.file) {
    userData.avatarURL = req.file.path;
  }

  const updatedUser = await User.findByIdAndUpdate(req.user._id, userData, {
    new: true,
    select: "-_id -createdAt -updatedAt -password -verify -verificationToken",
  });

  res.json(updatedUser);
};

module.exports = update;
