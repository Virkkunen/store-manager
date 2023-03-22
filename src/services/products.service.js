const { productsModel } = require('../models');

const getAllProducts = async () => {
  const result = await productsModel.getAllProducts();
  if (!result) throw Error('DEFAULT');
  return result;
};

const getProductById = async (id) => {
  const result = await productsModel.getProductById(id);
  if (!result) throw Error('PRODUCT_NOT_FOUND');
  return result;
};

const createProduct = async (product) => {
  const result = await productsModel.createProduct(product);
  if (!result) throw Error('CANT_CREATE_PRODUCT');
  return result;
};

const updateProduct = async (id, name) => {
  const result = await productsModel.updateProduct(id, name);
  if (!result) throw Error('PRODUCT_NOT_FOUND');
  return result;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
};