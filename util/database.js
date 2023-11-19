const mysql = require('mysql2')

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'nodecomplete_dk',
    password:'mysqlroot'
})

module.exports = pool.promise();