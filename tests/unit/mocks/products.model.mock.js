const getAllProductsReturn = [
  {
    id: 1,
    name: 'Martelo do Thor',
  },
  {
    id: 2,
    name: 'Traje de Encolhimento',
  }
];

const getProductByIdReturn = [{
    id: 1,
    name: 'Martelo do Thor',
}];

const getProductByIdError = {
  message: 'Product not found',
};

module.exports = {
  getAllProductsReturn,
  getProductByIdReturn,
  getProductByIdError,
};