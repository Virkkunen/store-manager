const { salesModel } = require('../models');

const getAllSales = async () => {
  const result = await salesModel.getAllSales();
  if (!result) throw Error('DEFAULT');
  return result;
};

const getSaleById = async (id) => {
  const result = await salesModel.getSaleById(id);
  if (!result) throw Error('SALE_NOT_FOUND');
  return result;
};

const createSale = async (sale) => {
  const result = await salesModel.createSale(sale);
  if (!result) throw Error('CANT_CREATE_SALE');
  return result;
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
};