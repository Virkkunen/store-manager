const { salesService } = require('../services');

const getAllSales = async (req, res) => {
  const result = await salesService.getAllSales();
  return res.status(200).json(result);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.getSaleById(id);
  return res.status(200).json(result);
};

const createSale = async (req, res) => {
  const sale = req.body[0];
  const result = await salesService.createSale(sale);
  return res.status(201).json(result);
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
};