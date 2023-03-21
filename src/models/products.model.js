const connection = require('../database/connection');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM products');
  return result;
};

module.exports = { getAllProducts };