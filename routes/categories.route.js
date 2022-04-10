const express = require('express');
const router = express.Router();

router.get('/:idCategorie/products/:idProduct', (req, res, next) => {
  const { idCategorie, idProduct } = req.params;

  res.json({
    idCategorie,
    idProduct,
  });
});

module.exports = router;
