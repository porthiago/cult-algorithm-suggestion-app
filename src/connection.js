const knex = require('knex')({
  client: 'pg',
  connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'cultural_contents'
  }
});

module.exports = knex;