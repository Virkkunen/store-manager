const app = require('../../../src/app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const connection = require('../../../src/database/connection')
const {
  getAllProductsReturn,
} = require('../mocks/products.model.mock');
const { productsController } = require('../../../src/controllers');
const { productsService } = require('../../../src/services');
const errors = require('../../../src/utils');
const { PRODUCT_NOT_FOUND } = require('../../../src/utils');

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

  describe('Função getProductById', () => {
    it('Retorna o produto e status 200', async () => {
      const req = {
        params: {
          id: 1
        }
      };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, 'getProductById').resolves(getAllProductsReturn[0]);
      await productsController.getProductById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(getAllProductsReturn[0]);
    });
    it('Retorna 404 quando não há o produto', async () => {
      const req = {
        params: {
          id: 5
        }
      };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      const err = {
        status: errors.PRODUCT_NOT_FOUND.status,
        message: errors.PRODUCT_NOT_FOUND.message,
      };
      sinon.stub(productsService, 'getProductById').resolves(PRODUCT_NOT_FOUND);
      await productsController.getProductById(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(PRODUCT_NOT_FOUND);
    }); 
  });
});