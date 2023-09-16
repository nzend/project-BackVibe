const { User } = require("../../models");

const logout = async (req, res) => {
  await User.findByIdAndUpdate(req.user.id, { token: "" });
  res.status(204).json();
};

module.exports = logout;
