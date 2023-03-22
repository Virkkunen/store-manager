const mockSale = [{
  saleId: 1,
  date: '2023-03-22T19:24:00.000Z',
  productId: 2,
  quantity: 10,
}];

const mockSaleNoId = [{
  date: '2023-03-22T19:24:00.000Z',
  productId: 2,
  quantity: 10,
}];

const insertId = 1;

const mockAffectedRows = { affectedRows: 1 };

module.exports = {
  mockSale,
  mockSaleNoId,
  insertId,
  mockAffectedRows,
};