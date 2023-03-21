const express = require('express');
const { getProducts } = require('../models/products.model');

const productsRouter = express.Router();

productsRouter.get('/', async (req, res) => {
  const products = await getProducts();
  return res.status(200).json(products);
});

module.exports = productsRouter;