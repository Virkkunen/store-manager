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

const createProduct = async ({ name }) => {
  const [{ insertId }] = await connection.execute(`
    INSERT INTO products (name)
    VALUES (?);
  `, [name]);
  const [rows] = await connection.execute(`
    SELECT * FROM products WHERE id = ?;
  `, [insertId]);
  return rows[0];
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};