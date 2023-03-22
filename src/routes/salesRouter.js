const express = require('express');
const { salesController } = require('../controllers');
const { validateCreateSale } = require('../middlewares/validateCreateSale');
const validateProductId = require('../middlewares/validateProductId');

const salesRouter = express.Router();

salesRouter.get('/', salesController.getAllSales);
salesRouter.get('/:id', salesController.getSaleById);
salesRouter.post('/',
  validateCreateSale,
  validateProductId,
  salesController.createSale);

module.exports = salesRouter;