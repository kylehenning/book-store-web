const mysql = require('mysql');
// Set up db connection
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "mybookstore",
})

module.exports = db;