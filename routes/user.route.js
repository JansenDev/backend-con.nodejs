const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const { limit, offset } = req.query;
  let result = 'No hay parametros';

  if (limit && offset) {
    result = { limit, offset };
  }
  res.json(result);
});

module.exports = router;
