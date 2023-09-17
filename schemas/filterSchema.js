const Joi = require('joi');

const filterSchema = Joi.object({
  filter: Joi.string().required().message({
    'string.base': 'Filter part must be a string',
    'any.required': 'Filter part is a required field',
  }),
  name: Joi.string().required().message({
    'string.base': 'Name must be a string',
    'any.required': 'Name is a required field',
  }),
  imgURL: Joi.string().required().message({
    'string.base': 'Image url must be a string',
    'any.required': 'Image url is a required field',
  }),
});

module.exports = filterSchema;
