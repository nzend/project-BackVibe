const { ctrlWrapper } = require("../../helpers");

const register = require("./register");
const login = require("./login");
const update = require("./update");
const getCurrentUser = require("./getCurrent");
const logout = require("./logout");

module.exports = {
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
    currentUser: ctrlWrapper(getCurrentUser),
    logout: ctrlWrapper(logout),
    update: ctrlWrapper(update),
  };