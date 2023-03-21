const express = require('express');
const { productsController } = require('../controllers');

const productsRouter = express.Router();

// productsRouter.get('/', async (req, res) => {
//   const products = await getProducts();
//   if (products) return res.status(200).send(products);
//   return res.status(404).send({ message: 'Product not found' });
// });

productsRouter.get('/', productsController.getAllProducts);
module.exports = productsRouter;