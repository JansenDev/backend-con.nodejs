const { Client } = require('pg');

module.exports = async () => {
  const client = new Client({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: '12345',
    database: 'test',
  });

  await client.connect();

  return client;
};
