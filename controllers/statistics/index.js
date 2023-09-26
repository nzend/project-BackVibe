const { ctrlWrapper } = require("../../helpers");
const getStatistics = require("./getStatistics");

module.exports = {
  getStatistics: ctrlWrapper(getStatistics),
};
