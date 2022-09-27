
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'P@rv9958',
    database: 'interview'
  }
})


module.exports = knex;
