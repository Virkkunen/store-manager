const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const connection = require('../../../src/database/connection')
const {
  getAllProductsReturn,
  getProductByIdReturn,
} = require('../mocks/products.model.mock');
const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');

const { expect } = chai;
chai.use(chaiHttp);
chai.use(sinonChai);

describe('Testa /products services', () => {
  afterEach(() => sinon.restore());

  describe('Função getAllProducts', () => {
    it('Retorna todos os produtos', async () => {
      sinon.stub(productsModel, 'getAllProducts').resolves(getAllProductsReturn);
      const result = await productsService.getAllProducts();
      expect(result).to.deep.equal(getAllProductsReturn);
    });
  });
});