const kx = require('./connection')

kx.schema.createTable('list', table => {
    table.increments('id')
    table.text('task')
    table.timestamps(false, true)
}).then(() => process.exit()).catch(() => process.exit())