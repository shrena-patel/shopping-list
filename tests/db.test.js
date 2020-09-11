const config = require('../server/db/knexfile').test
const testDb = require('knex')(config)

const db = require('../server/db/db')

beforeAll(() => {
  return testDb.migrate.latest()
    .then(() => {
      return testDb.seed.run()
    })
})

test('getAll works', () => {
  // Arrange
  const expected = 3

  // Act
  return db.getToDo(testDb).then(toDos => {

    // Assert
    expect(toDos.length).toEqual(expected)
  })
})