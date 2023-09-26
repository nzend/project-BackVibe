const Joi = require('joi');

const exerciseSchema = Joi.object({
  exerciseId: Joi.string().required().messages({
    'string.base': 'exerciseId part must be a string',
    'any.required': 'exerciseId part is a required field',
  }),
  date: Joi.string().required().messages({
    'string.base': 'Date must be a string',
    'any.required': 'Date is a required field',
  }),
  burnedCalories: Joi.number().required().messages({
    'number.base': 'Burned calories must be a number',
    'any.required': 'Burned calories is a required field',
  }),
  time: Joi.number().required().messages({
    'number.base': 'Time must be a number',
    'any.required': 'Time is a required field',
  }),
});

module.exports = exerciseSchema;
