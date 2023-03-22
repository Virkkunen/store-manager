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

const createSale = async (sales) => {
  const saleId = await salesModel.createSaleDate();
  const salesPromises = sales.map(({ productId, quantity }) => (
    salesModel.createSale(saleId, productId, quantity)
  ));
  await Promise.all(salesPromises);
  const soldItems = sales.map(({ productId, quantity }) => ({ productId, quantity }));
  return { id: saleId, soldItems };
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
};