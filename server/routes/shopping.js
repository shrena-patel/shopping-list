const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getShoppingList()
    .then(list => {
      res.json(list)
    })
})

router.post('/', (req, res) => {
  db.addItem(req.body)
    .then(ids => {
      res.json({id: ids[0]})
    })
})

// router.patch('/:id', (req, res) => {
//   db.updateWombat(req.params.id, req.body)
//     .then(wombatsUpdated => {
//       res.json(wombatsUpdated)
//     })
// })

router.delete('/:id', (req, res) => {
  db.deleteItem(req.params.id)
    .then(itemsDeleted => {
      res.json(itemsDeleted)
    })
})

module.exports = router