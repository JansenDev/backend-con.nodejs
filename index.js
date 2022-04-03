console.log('hello world');
const express = require('express');
const config = require('./config/config');

const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
  res.send('Hello world');
});
app.get('/products', (req, res, next) => {
  res.send([
    {
      product: 1,
      name: 'leche',
    },
    {
      product: 2,
      name: 'arroz',
    },
  ]);
});

app.get('/products/:idProduct', (req, res, next) => {
  const { idProduct } = req.params;

  console.log('idProduct');
  console.log(idProduct);
  res.send({
    product: 2,
    name: 'arroz',
  });
});

app.listen(port, () => {
  console.log(`Server run http://localhost:${port}`);

  if (!config.production) {
    // require('open')(`http://localhost:${port}`);
  }
});
