const { productsService } = require('../services');

const getAllProducts = async (req, res) => {
  const result = await productsService.getAllProducts();
  if (result.type) {
    const err = result;
    return res.status(404).json({ message: err.message });
  }
  return res.status(200).json(result);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.getProductById(id);
  if (result.type) {
    const err = result;
    return res.status(404).json({ message: err.message });
  }
  return res.status(200).json(result);
};

module.exports = {
  getAllProducts,
  getProductById,
};