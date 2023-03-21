const { productsModel } = require('../models');

const getAllProducts = async () => {
  const result = await productsModel.getAllProducts();
  if (!result) throw Error('Product not found');
  return result;
};

const getProductById = async (id) => {
  const result = await productsModel.getProductById(id);
  if (!result) throw Error('Product not found');
  return result;
};

const createProduct = async (product) => {
  const result = await productsModel.createProduct(product);
  if (!result) throw Error('Can\'t create product');
  return result;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};