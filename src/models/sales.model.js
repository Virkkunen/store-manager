const connection = require('../database/connection');

const getAllSales = async () => {
  const [result] = await connection.execute('SELECT * FROM sales;');
  return result;
};

const getSaleById = async (id) => {
  const [[result]] = await connection.execute('SELECT * FROM sales WHERE id = ?;', [id]);
  return result;
};

module.exports = {
  getAllSales,
  getSaleById,
};