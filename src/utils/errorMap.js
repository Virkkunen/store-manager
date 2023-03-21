const errorMap = {
  PRODUCT_NOT_FOUND: {
    message: 'Product not found',
    status: 404,
  },
  CANT_CREATE_PRODUCT: {
    message: 'Can\'t create product',
    status: 400,
  },
  NAME_EMPTY: {
    message: '"name" is not allowed to be empty',
    status: 422,
  },
  NAME_TOO_SHORT: {
    message: '"name" length must be at least 5 characters long',
    status: 422,
  },
  NAME_MISSING: {
    message: '"name" is required',
    status: 400,
  },
  DEFAULT: 500,
};

module.exports = errorMap;