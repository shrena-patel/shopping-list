const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getToDo,
  getShoppingList,
  addItem,
  deleteItem
}

function getToDo (db = connection) {
  return db('toDo').select()
}

function getShoppingList (db = connection) {
    return db('shoppingList').select()
}

function addItem (item, db = connection) {
  return db('shoppingList')
  .insert(item)
}

function deleteItem (id, db = connection) {
  return db('shoppingList')
  .where('id', id)
  .del()
}