const connection = require('../database/connection');

const getProducts = () => {
  connection.query('SELECT * FROM StoreManager.products', (err, results, _fields) => {
    if (err) throw err;
    if (!results) return [];
    const formatResults = results.map((r) => ({
      id: r.id,
      name: r.name,
    }));
    console.log(formatResults)
    return formatResults;
  });
};

module.exports = { getProducts };