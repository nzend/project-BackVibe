const Joi = require('joi');

const productSchema = Joi.object({
  weight: Joi.number().required().message({
    'number.base': 'Weight must be a number',
    'any.required': 'Weight is a required field',
  }),
  calories: Joi.number().required().message({
    'number.base': 'Calories must be a number',
    'any.required': 'Calories is a required field',
  }),
  category: Joi.string().required().message({
    'string.base': 'Category must be a string',
    'any.required': 'Category is a required field',
  }),
  title: Joi.string().required().message({
    'string.base': 'Title must be a string',
    'any.required': 'Title is a required field',
  }),
  groupBloodNotAllowed: Joi.object({
    1: Joi.boolean(),
    2: Joi.boolean(),
    3: Joi.boolean(),
    4: Joi.boolean(),
  }),
});

module.exports = productSchema;
