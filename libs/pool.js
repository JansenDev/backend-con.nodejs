const { Pool } = require('pg');
const { DB } = require('../config/config');

const user = encodeURIComponent(DB.user);
const password = encodeURIComponent(DB.password);

const URI = `postgres://${user}:${password}@${DB.host}:${DB.port}/${DB.database}`;

module.exports = new Pool({
  connectionString: URI,
});
