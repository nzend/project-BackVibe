const { ctrlWrapper } = require('../../helpers');
const getCategories = require('./getCategories');
module.exports = {
    getCategories: ctrlWrapper(getCategories),
};