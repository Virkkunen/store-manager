const joi = require('joi');
const errors = require('../utils');

const schema = joi.object({
  name: joi.string()
    .min(5)
    .required(),
});

const validateNewProduct = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    const errMsg = error.details.map((detail) => detail.message).join('');
    const key = Object.keys(errors)
      .find((k) => errors[k].message === errMsg);
    throw new Error(key);
  }
  next();
};

module.exports = validateNewProduct;