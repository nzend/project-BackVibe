const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers/");
const { regExp } = require("../constants");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is a required field"],
    },
    email: {
      type: String,
      required: [true, "Email is a required field"],
      match: [
        regExp.email,
        "email address must be valid '[world]@[world].[2 or 3 letters]'",
      ],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    avatarURL: {
      type: String,
    },
    bodyParameters: {
      height: {
        type: Number,
        min: [150, "Height must be greater than or equal to 150"],
      },
      currentWeight: {
        type: Number,
        min: [35, "Current weight must be greater than or equal to 35"],
      },
      desiredWeight: {
        type: Number,
        min: [35, "Current weight must be greater than or equal to 35"],
      },
      birthday: { type: Date },
      blood: {
        type: Number,
        enum: {
          values: [1, 2, 3, 4],
          message: "Blood should be in the range 1-4",
        },
      },
      sex: {
        type: String,
        enum: {
          values: ["male", "female"],
          message: "Sex should be 'male' or 'female'",
        },
      },
      levelActivity: {
        type: Number,
        enum: {
          values: [1, 2, 3, 4, 5],
          message: "Level activity should be in the range 1-5",
        },
      },
      dailyСalories: { type: Number },
      dailyTime: { type: Number },
    },
    token: {
      type: String,
      default: "",
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);
userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;
