exports.seed = knex => {
    return knex('shoppingList').del()
        .then(()=>{
            return knex('shoppingList').insert([
                {id: 1, name: 'Bananas'},
                {id: 2, name: 'Milk'},
                {id: 3, name: 'Chocolate'}
            ])
        })
}
