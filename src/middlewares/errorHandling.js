require('express-async-errors');
const errors = require('../utils');

const errorHandling = (err, _req, res, next) => {
  const key = Object.keys(errors)
    .find((k) => errors[k].message === err.message);
  const error = errors[key] || errors.DEFAULT;
  res.status(error.status).json({ message: error.message });
  next(err);
};

module.exports = errorHandling;