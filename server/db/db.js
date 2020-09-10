const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getToDo,
}

function getToDo (db = connection) {
  return db('toDo').select()
}