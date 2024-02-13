const {Pool} = require('pg')

const db = new Pool({
    connectionString:process.env['TEST_DB_URL']
})

module.exports = db