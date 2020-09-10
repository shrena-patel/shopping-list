exports.seed = knex => {
    // Deletes ALL existing entries
    return knex('toDo').del()
      .then(function () {
        // Inserts seed entries
        return knex('toDo').insert([
          {id: 1, name: 'Start List'},
          {id: 2, name: 'Continue List'},
          {id: 3, name: 'Finish List'},
        ])
      })
  }
  