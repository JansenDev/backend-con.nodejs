const productsRoutes = require('../routes/products.route');
const userRoutes = require('../routes/user.route');
const categoriesRoutes = require('../routes/categories.route');

const express = require('express');
const router = express.Router();

function routesInit(app) {
  app.use('/api/v1', router);

  router.use('/products', productsRoutes);
  router.use('/users', userRoutes);
  router.use('/categories', categoriesRoutes);
}

module.exports = routesInit;
