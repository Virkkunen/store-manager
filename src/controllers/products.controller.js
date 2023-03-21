const { productsService } = require('../services');

const getAllProducts = async (req, res) => {
  const result = await productsService.getAllProducts();
  if (result.type) {
    const err = result;
    return res.status(404).json({ message: err.message });
  }
  return res.status(200).json(result);
};

module.exports = {
  getAllProducts,
};