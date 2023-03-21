const express = require('express');
const { salesController } = require('../controllers');

const salesRouter = express.Router();

salesRouter.get('/', salesController.getAllSales);
salesRouter.get('/:id', salesController.getSaleById);
salesRouter.post('/', salesController.createSale);

module.exports = salesRouter;