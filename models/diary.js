const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const diarySchema = new Schema(
  {
    weight: Number,
    calories: Number,
    category: String,
    title: String,
    recommend: Boolean
  },
  { versionKey: false, timestamps: true }
);

diarySchema.post('save', handleMongooseError);

const Diary = model('diary', diarySchema);

module.exports = Diary;