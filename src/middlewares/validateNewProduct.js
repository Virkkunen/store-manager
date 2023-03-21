const joi = require('joi');

const schema = joi.object({
  name: joi.string()
    .min(5)
    .required(),
});

const validateNewProduct = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    throw new Error(errors);
  }
  next();
};

module.exports = validateNewProduct;