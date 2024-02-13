const fs = require('fs')
require('dotenv').config()
const db = require('./connect')

const sql = fs.readFileSync(__dirname + '/' + 'setup.sql').toString()

db.query(sql)
    .then(data => console.log(data))
    .catch(error => console.error("Unable to set up testing database:", error))
    .finally(() => db.end())