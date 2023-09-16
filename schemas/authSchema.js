const Joi = require("joi");
const { regExp } = require("../constants");
const maxDate = new Date(new Date() - 568036800000);

const registerSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name cannot be empty",
    "any.required": "Name is a required field",
  }),
  email: Joi.string().pattern(regExp.email).email().required().messages({
    "string.base": "Email must be a string",
    "any.required": "Email is a required field",
    "string.pattern.base":
      "email address must be valid '[world]@[world].[2 or 3 letters]'",
  }),
  password: Joi.string().pattern(regExp.password).required().messages({
    "string.base": "Password must be a string",
    "any.required": "Password is a required field",
    "string.pattern.base":
      "Password must contain 6+ letters, 1 number, and 1+ letter or number",
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(regExp.email).email().required().messages({
    "string.base": "Email must be a string",
    "any.required": "Email is a required field",
    "string.pattern.base":
      "email address must be valid '[world]@[world].[2 or 3 letters]'",
  }),
  password: Joi.string().pattern(regExp.password).required().messages({
    "string.base": "Password must be a string",
    "any.required": "Password is a required field",
    "string.pattern.base":
      "Password must contain 6+ letters, 1 number, and 1+ letter or number",
  }),
});

const userBodySchema = Joi.object({
  height: Joi.number().integer().min(150).required().messages({
    "number.base": "Height must be a number",
    "number.integer": "Height must be an integer",
    "number.min": "Height must be greater than or equal to 150",
    "any.required": "Height is a required field",
  }),
  currentWeight: Joi.number().integer().min(35).required().messages({
    "number.base": "Current weight must be a number",
    "number.integer": "Current weight must be an integer",
    "number.min": "Current weight must be greater than or equal to 35",
    "any.required": "Current weight is a required field",
  }),
  desiredWeight: Joi.number().integer().min(35).required().messages({
    "number.base": "Desired weight must be a number",
    "number.integer": "Desired weight must be an integer",
    "number.min": "Desired weight must be greater than or equal to 35",
    "any.required": "Desired weight is a required field",
  }),
  birthday: Joi.date().max(maxDate).iso().required().messages({
    "date.format": "Please enter a valid date 'YYYY-mm-dd' ",
    "date.max": "You must be 18 years old",
    "any.required": "Date is a required field",
  }),
  blood: Joi.number().valid(1, 2, 3, 4).required().messages({
    "number.base": "Blood must be a number",
    "any.only": "Blood should be in the range 1-4",
    "any.required": "Blood is a required field",
  }),
  sex: Joi.string().valid("male", "female").required().messages({
    "string.base": "Sex must be a string",
    "any.only": "Sex should be 'male' or 'female'",
    "any.required": "Sex is a required field",
  }),
  levelActivity: Joi.number().valid(1, 2, 3, 4, 5).required().messages({
    "number.base": "Level activity must be a number",
    "any.only": "Level activity should be in the range 1-5",
    "any.required": "Level activity is a required field",
  }),
});

const updateSchema = Joi.object({
  name: Joi.string().min(2).required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name cannot be empty",
    "any.required": "Name is a required field",
  }),
  height: Joi.number().integer().min(150).required().messages({
    "number.base": "Height must be a number",
    "number.integer": "Height must be an integer",
    "number.min": "Height must be greater than or equal to 150",
    "any.required": "Height is a required field",
  }),
  currentWeight: Joi.number().integer().min(35).required().messages({
    "number.base": "Current weight must be a number",
    "number.integer": "Current weight must be an integer",
    "number.min": "Current weight must be greater than or equal to 35",
    "any.required": "Current weight is a required field",
  }),
  desiredWeight: Joi.number().integer().min(35).required().messages({
    "number.base": "Desired weight must be a number",
    "number.integer": "Desired weight must be an integer",
    "number.min": "Desired weight must be greater than or equal to 35",
    "any.required": "Desired weight is a required field",
  }),
  birthday: Joi.date().max(maxDate).iso().required().messages({
    "date.format": "Please enter a valid date 'YYYY-mm-dd' ",
    "date.max": "You must be 18 years old",
    "any.required": "Date is a required field",
  }),
  blood: Joi.number().valid(1, 2, 3, 4).required().messages({
    "number.base": "Blood must be a number",
    "any.only": "Blood should be in the range 1-4",
    "any.required": "Blood is a required field",
  }),
  sex: Joi.string().valid("male", "female").required().messages({
    "string.base": "Sex must be a string",
    "any.only": "Sex should be 'male' or 'female'",
    "any.required": "Sex is a required field",
  }),
  levelActivity: Joi.number().valid(1, 2, 3, 4, 5).required().messages({
    "number.base": "Level activity must be a number",
    "any.only": "Level activity should be in the range 1-5",
    "any.required": "Level activity is a required field",
  }),
});

module.exports = {
  registerSchema,
  loginSchema,
  userBodySchema,
  updateSchema,
};
