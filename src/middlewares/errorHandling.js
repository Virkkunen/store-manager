require('express-async-errors');

const errorHandling = (err, _req, res, next) => {
switch (err.message) {
  case 'Product not found':
    res.status(404);
    break;
  case 'Can\'t create product':
    res.status(400);
    break;
  case '"name" is not allowed to be empty':
  case '"name" length must be at least 5 characters long':
    res.status(422);
    break;
  default:
    res.status(500);
  }
  res.json({ message: err.message });
  next(err);
};

module.exports = errorHandling;