const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const connection = require('../../../src/database/connection')
const {
  getAllProductsReturn,
  getProductByIdReturn,
  getProductByIdError,
} = require('../mocks/products.model.mock');
const { productsModel } = require('../../../src/models');

const { expect } = chai;
chai.use(chaiHttp);
chai.use(sinonChai);

describe('Testa /products models', () => {
  afterEach(() => sinon.restore());

  describe('Função getAllProducts', () => {
    it('Retorna todos os produtos', async () => {
      sinon.stub(connection, 'execute').resolves([getAllProductsReturn]);
      const result = await productsModel.getAllProducts();
      expect(result).to.equal(getAllProductsReturn);
    });
  });

  describe('Função getProductById', () => {
    it('Retorna o produto correto', async () => {
      sinon.stub(connection, 'execute').resolves([getProductByIdReturn]);
      const result = await productsModel.getProductById(1);
      expect([result]).to.deep.equal(getProductByIdReturn);
    });

    it('Retorna erro 404 quando o produto não existe', async () => {
      sinon.stub(connection, 'execute').resolves(getProductByIdError);
      const result = await productsModel.getProductById(10);
      expect(result).to.deep.equal(getProductByIdError);
    });
  });
});