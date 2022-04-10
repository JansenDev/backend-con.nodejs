const connection = require('../libs/postgres');
const pool = require('../libs/pool');

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }

  create() {}

  async find() {
    const client = await connection();
    const tasksResponse = await client.query('SELECT * FROM tasks');
    return tasksResponse.rows;
  }

  async findById() {
    const query = 'SELECT * FROM tasks';
    const rta = await this.pool.query(query);
    return rta.rows;
  }

  update() {}

  delete() {}
}

module.exports = UserService;
