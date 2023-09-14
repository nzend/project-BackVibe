const Joi = require("joi");
const { regExp } = require("../constants");

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(regExp.email).email().required(),
    password: Joi.string().pattern(regExp.password).min(8).max(64).required(),
  });
  const loginSchema = Joi.object({
    email: Joi.string().pattern(regExp.email).email().required(),
    password: Joi.string().pattern(regExp.password).min(8).max(64).trim().required(),
  });



  module.exports = {
    registerSchema,
    loginSchema
  };