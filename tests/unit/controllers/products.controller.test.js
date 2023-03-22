const app = require('../../../src/app');
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
const { productsController } = require('../../../src/controllers');
const { productsService } = require('../../../src/services');

const { expect } = chai;
chai.use(chaiHttp);
chai.use(sinonChai);

describe('Testa /products controllers', () => {
  afterEach(() => sinon.restore());

  describe('Função getAllProducts', () => {
    it('Retorna todos os produtos e status 200', async () => {
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, 'getAllProducts').resolves(getAllProductsReturn);
      await productsController.getAllProducts(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(getAllProductsReturn);
    });
  });
});