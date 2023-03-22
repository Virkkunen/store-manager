const joi = require('joi');
const errors = require('../utils');

const salesSchema = joi.object({
  productId: joi.number().required().label('productId'),
  quantity: joi.number().min(1).greater(0).required()
    .label('quantity'),
});

const validateSale = (sale) => {
  const { error } = salesSchema.validate(sale);
  if (error) {
    const errMsg = error.details.map((detail) => detail.message).join('');
    const key = Object.keys(errors)
      .find((k) => errors[k].message === errMsg);
    throw new Error(key);
  }
  return true;
};

const validateCreateSale = (req, res, next) => {
  const sales = req.body;
  const valid = sales.every((sale) => validateSale(sale));
  if (!valid) throw Error('CANT_CREATE_SALE');
  next();
};

module.exports = {
  validateCreateSale,
};