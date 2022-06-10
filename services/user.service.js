// const connection = require('../libs/postgres');
const sequealize = require('../libs/sequealize');

class UserService {
  constructor() {}

  create() {}

  async find() {
    // const client = await connection();
    // const tasksResponse = await client.query('SELECT * FROM tasks');
    // return tasksResponse.rows;

    //sql
    const query = `SELECT * FROM tasks`;
    console.log('┼');
    const [_, metadata] = await sequealize.query(query);
    return metadata.rows;
  }

  async findById() {
    const query = `SELECT * FROM tasks`;
    const rta = await sequealize.query(query);
    return rta;
  }

  update() {}

  delete() {}
}

module.exports = UserService;
