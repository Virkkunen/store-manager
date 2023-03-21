require('express-async-errors');

const errorHandling = (err, _req, res, next) => {
switch (err.message) {
    case 'Product not found':
      res.status(404);
      res.json({ message: err.message });
      break;
    default:
      res.status(505);
      res.json({ message: 'Internal server error' });
  }
  next(err);
};

module.exports = errorHandling;