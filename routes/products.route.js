const express = require('express');
const router = express.Router();
const ProductService = require('../services/product.service');
const service = new ProductService();

router.get('/', async (req, res, next) => {
  const { size } = req.query;

  const products = await service.find();

  res.send(products);
});

router.get('/filter', (req, res, next) => {
  res.send('filtered');
});

router.get('/:idProduct', (req, res, next) => {
  try {
    const { idProduct } = req.params;
    const product = service.findOne(idProduct);
    console.log(product);

    if (!product) throw new Error('producto no existe');

    res.send(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', (req, res, next) => {
  const body = req.body;
  console.log(body);

  const product = service.create(body);
  let response = {};

  if (product.id) {
    response = {
      message: 'created',
      data: product,
    };
  } else {
    response = {
      message: 'error',
      data: [],
    };
  }

  res.json(response);
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;

  const product = req.body;

  const productUpdated = service.update(id, product);
  res.json({
    message: 'updated',
    body: productUpdated,
  });
});

router.delete('/:idProduct', (req, res, next) => {
  const { idProduct } = req.params;

  const id = service.delete(idProduct);
  res.json({
    message: 'deleted',
    body: id,
  });
});

module.exports = router;
