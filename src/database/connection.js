const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST || 'db',
  port: process.env.MYSQL_PORT || 3306,
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'StoreManager',
  waitForConnections: true,
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`Connected to ${process.env.HOST}`);
});

module.exports = connection;