

const cloudinary = require('cloudinary').v2;

const fs = require('fs');
const path = require('path');
const { Exercise } = require('../../models');

//шлях до локальної папки з гіфками
const folderPath = path.join(__dirname, '../../assets');
console.log(folderPath);

//дані з файлу .env для аутентифікації в cloudinary 
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const uploadFileToCloudinary = async (filePath, file) => {
  try {
   //записуються файли у папку exercises зі своїм оригінальним імʼям
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'exercises',
      public_id: file.slice(0,4),
      use_filename: true,
      unique_filename: false,

    });
    console.log(`File ${filePath} uploaded to URL: ${result.url}`);
  } catch (err) {
    console.error(`Failed to upload ${filePath}. Error: ${err.message}`);
  }
};

const onceUploadFilesAndChangeUrl = async (req, res) => {

    const updateResult = await Exercise.updateMany(
        { },
        [
          {
            $set: {
              gifUrl: {
                $concat: [
                  "https://res.cloudinary.com/dt0ilrtu3/image/upload/v1695562118/exercises", //ваша частина url
                  { $arrayElemAt: [{ $split: ["$gifUrl", "/"] }, -1] }
                ]
              }
            }
          }
        ]
      );

};

module.exports = onceUploadFilesAndChangeUrl;