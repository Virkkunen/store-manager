const { productsModel } = require('../models');
const errors = require('../utils');

const { ERRORS_TYPE, ERRORS_MSG } = errors;

const getAllProducts = async () => {
  const result = await productsModel.getAllProducts();
  if (!result) {
    return {
      type: ERRORS_TYPE.PRODUCT_NOT_FOUND,
      message: ERRORS_MSG.PRODUCT_NOT_FOUND,
    };
  }
  return result;
};

module.exports = {
  getAllProducts,
};