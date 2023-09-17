const Joi = require('joi');

const exerciseSchema = Joi.object({
  bodyPart: Joi.string().required().message({
    'string.base': 'Body part must be a string',
    'any.required': 'Body part is a required field',
  }),
  equipment: Joi.string().required().message({
    'string.base': 'Equipment must be a string',
    'any.required': 'Equipment is a required field',
  }),
  gifUrl: Joi.string().required().message({
    'string.base': 'Gif url must be a string',
    'any.required': 'Gif url is a required field',
  }),
  name: Joi.string().required().message({
    'string.base': 'Name must be a string',
    'any.required': 'Name is a required field',
  }),
  target: Joi.string().required().message({
    'string.base': 'Target must be a string',
    'any.required': 'Target is a required field',
  }),
  burnedCalories: Joi.number().required().message({
    'number.base': 'Burned calories must be a number',
    'any.required': 'Burned calories is a required field',
  }),
  time: Joi.number().required().message({
    'number.base': 'Time must be a number',
    'any.required': 'Time is a required field',
  }),
});

module.exports = exerciseSchema;
