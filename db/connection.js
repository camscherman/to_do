const kx = require('knex')({
    client:'pg',
    connection: {
        database: 'toDo'
    }
})

module.exports = kx