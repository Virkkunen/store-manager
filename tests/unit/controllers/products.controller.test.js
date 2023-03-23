const app = require('../../../src/app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const connection = require('../../../src/database/connection')
const {
  getAllProductsReturn, mockFindProducts, getProductByIdReturn,
} = require('../mocks/products.model.mock');
const { productsController } = require('../../../src/controllers');
const { productsService } = require('../../../src/services');

const { expect } = chai;
chai.use(chaiHttp);
chai.use(sinonChai);

describe('/products controller', () => {
  let req;
  let res;
  let statusStub;
  let jsonStub;

  beforeEach(() => {
    statusStub = sinon.stub();
    jsonStub = sinon.stub();
    res = {
      status: statusStub.returnsThis(),
      json: jsonStub,
    };
  });

  afterEach(() => sinon.restore());

  it('Lista todos os produtos e retorna 200', async () => {
    const getAllProductsStub = sinon.stub(productsService, 'getAllProducts')
      .resolves(mockFindProducts);
    await productsController.getAllProducts(null, res);
    expect(getAllProductsStub).to.have.been.calledOnce;
    expect(statusStub).to.have.been.calledWith(200);
    expect(jsonStub).to.have.been.calledWith(mockFindProducts);
  });

  it('Lista o produto do ID e retorna 200', async () => {
    const getProductByIdStub = sinon.stub(productsService, 'getProductById')
      .resolves(getProductByIdReturn);
    req = { params: { id: 1 } };
    await productsController.getProductById(req, res);
    expect(getProductByIdStub).to.have.been.calledOnce;
    expect(statusStub).to.have.been.calledWith(200);
    expect(jsonStub).to.have.been.calledWith(getProductByIdReturn);
  });

  it('Retorna 404 quando não acha o produto', async () => {
    const getProductByIdStub = sinon.stub(productsService, 'getProductById')
      .resolves('PRODUCT_NOT_FOUND');
    req = { params: { id: 1 } };
    await productsController.getProductById(req, res);
    expect(getProductByIdStub).to.have.been.calledWith(1);
    expect(statusStub).to.have.been.calledWith(404);
    expect(jsonStub).to.have.been.calledWith({ message: 'TESTE' });

  });
});