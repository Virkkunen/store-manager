const connection = require('../database/connection');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM products;');
  return result;
};

const getProductById = async (id) => {
  // não entendi por que mas precisa de 2 [[]]
  const [[result]] = await connection.execute('SELECT * FROM products WHERE id = ?;', [id]);
  return result;
};

module.exports = {
  getAllProducts,
  getProductById,
};