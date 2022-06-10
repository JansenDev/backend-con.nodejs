const { Sequelize } = require('sequelize');
const { DB } = require('../config/config');

const user = encodeURIComponent(DB.user);
const password = encodeURIComponent(DB.password);
const URI = `postgres://${user}:${password}@${DB.host}:${DB.port}/${DB.database}`;
const sequealize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

module.exports = sequealize;
