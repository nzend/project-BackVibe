const { ctrlWrapper } = require("../../helpers");

const register = require("./register");
const login = require("./login");
const userBody = require("./userBody");
const update = require("./update");
const currentUser = require("./currentUser");
const logout = require("./logout");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  userBody: ctrlWrapper(userBody),
  currentUser: ctrlWrapper(currentUser),
  logout: ctrlWrapper(logout),
  update: ctrlWrapper(update),
};
