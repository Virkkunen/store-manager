const { salesModel } = require('../models');

const getAllSales = async () => {
  const result = await salesModel.getAllSales();
  if (!result) throw Error('DEFAULT');
  return result;
};

const getSaleById = async (id) => {
  const result = await salesModel.getSaleById(id);
  if (!result) throw Error('PRODUCT_NOT_FOUND');
  return result;
};

module.exports = {
  getAllSales,
  getSaleById,
};