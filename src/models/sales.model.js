const connection = require('../database/connection');

const getAllSales = async () => {
  const [rows] = await connection.execute(`
    SELECT
      sal.id AS saleId,
      DATE_FORMAT(sal.date, '%Y-%m-%dT%H:%i:%s.000Z') AS date,
      salProd.product_id AS prodId, salProd.quantity
    FROM sales sal
    JOIN sales_products salProd ON sal.id = salProd.sale_id
    ORDER BY saleId ASC, prodId ASC;
  `);
  // faltou map na linha
  return rows.map((row) => ({
    saleId: row.saleId,
    date: row.date,
    productId: row.prodId,
    quantity: row.quantity,
  }));
};

const getSaleById = async (id) => {
  // praticamente igual ao getAllSales
  const [rows] = await connection.execute(`
    SELECT
      DATE_FORMAT(sal.date, '%Y-%m-%dT%H:%i:%s.000Z') AS date,
      salProd.product_id AS prodId, salProd.quantity
    FROM sales sal
    JOIN sales_products salProd ON sal.id = salProd.sale_id WHERE sal.id = ?
  `, [id]);
  return rows.map((row) => ({
    date: row.date,
    productId: row.prodId,
    quantity: row.quantity,
  }));
};

// const createSale = async ({ productId, quantity }) => {
//   const [{ insertId }] = await connection.execute(`
//     INSERT INTO sales_products (product_id, quantity)
//     VALUES (?, ?);
//   `, [productId, quantity]);
//   const [rows] = await connection.execute(`
//     SELECT * FROM sales_products WHERE sale_id = ?;
//   `, [insertId]);
//   return rows[0];
// };

const createSale = async (saleId, productId, quantity) => {
  const [{ insertId }] = await connection.execute(`
    INSERT INTO sales_products (sale_id, product_id, quantity)
    VALUES (?, ?, ?);
  `, [saleId, productId, quantity]);
  return insertId;
};

// roda primeiro o createSaleDate pra pegar o ID da data
const createSaleDate = async () => {
  const [{ insertId }] = await connection.execute(`
    INSERT INTO sales (date)
    VALUES (NOW());
  `);
  return insertId;
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
  createSaleDate,
};