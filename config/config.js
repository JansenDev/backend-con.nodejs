const DB = {
  host: process.env.HOST || '',
  port: process.env.PORT || '',
  user: process.env.USER || '',
  password: process.env.PASSWORD || '',
  database: process.env.DATABASE || '',
};

module.exports = { production: false, port: 3000, DB };
