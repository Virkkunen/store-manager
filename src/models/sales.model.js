const connection = require('../database/connection');

const getAllSales = async () => {
  const [result] = await connection.execute('SELECT * FROM sales;');
  return result;
};

const getSaleById = async (id) => {
  const [[result]] = await connection.execute('SELECT * FROM sales WHERE id = ?;', [id]);
  return result;
};

const createSale = async ({ productId, quantity }) => {
  const [{ insertId }] = await connection.execute(`
    INSERT INTO sales_products (product_id, quantity)
    VALUES (?, ?);
  `, [productId, quantity]);
  const [rows] = await connection.execute(`
    SELECT * FROM sales_products WHERE sale_id = ?;
  `, [insertId]);
  return rows[0];
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
};