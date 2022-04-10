const express = require('express');

const config = require('./config/config');
const routes = require('./routes');

const app = express();
const port = config.port || 3000;

app.use(express.json());

routes(app);

app.get('/', (req, res, next) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Server run http://localhost:${port}`);

  if (!config.production) {
    // require('open')(`http://localhost:${port}`);
  }
});
