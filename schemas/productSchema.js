const Joi = require('joi');

const productSchema = Joi.object({
  amount: Joi.number().required().messages({
    'number.base': 'Amount must be a number',
    'any.required': 'Amount is a required field',
  }),
  calories: Joi.number().required().messages({
    'number.base': 'Calories must be a number',
    'any.required': 'Calories is a required field',
  }),
  productId: Joi.string().required().messages({
    'string.base': 'productId must be a string',
    'any.required': 'productId is a required field',
  }),
  date: Joi.string().required().messages({
    'string.base': 'Date must be a string',
    'any.required': 'Date is a required field',
  }),

});

module.exports = productSchema;

