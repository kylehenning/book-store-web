const db = require("../dbConfig/db");

const bookService = {
    // Gets TODO lists from specified user 
    getBooks: (id, res) => {
        db.query('SELECT * FROM book_info;',
        (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
        })
    },
}

module.exports = bookService;