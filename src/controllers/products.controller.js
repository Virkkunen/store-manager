const { productsService } = require('../services');

const getAllProducts = async (req, res) => {
  const result = await productsService.getAllProducts();
  return res.status(200).json(result);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.getProductById(id);
  return res.status(200).json(result);
};

const createProduct = async (req, res) => {
  const result = await productsService.createProduct(req.body);
  return res.status(201).json(result);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const result = await productsService.updateProduct(id, name);
  return res.status(200).json(result);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.deleteProduct(id);
  if (result) return res.status(204).end();
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};