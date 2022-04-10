const express = require('express');
const router = express.Router();

const UserService = require('../services/user.service');

const userService = new UserService();

router.get('/', async (req, res, next) => {
  const data = await userService.find();
  res.json(data);
});

router.get('/:id', async (req, res, next) => {

  const data = await userService.findById();
  res.json(data);
});

module.exports = router;
