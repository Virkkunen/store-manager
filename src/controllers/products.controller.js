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

module.exports = {
  getAllProducts,
  getProductById,
};