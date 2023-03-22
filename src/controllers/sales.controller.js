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
  const sales = req.body;
  const result = await salesService.createSale(sales);
  return res.status(201).json(result);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.deleteSale(id);
  if (result) return res.status(204).end();
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
  deleteSale,
};