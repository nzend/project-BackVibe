const { ctrlWrapper } = require('../../helpers');

const onceUploadFilesAndChangeUrl = require('./assets');

module.exports = {
    getAssets: ctrlWrapper(onceUploadFilesAndChangeUrl),
};