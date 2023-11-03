const db = require("../dbConfig/db");

const authorService = {
    // Gets TODO lists from specified user 
    getAuthors: (id, res) => {
        db.query('SELECT * FROM author_info;',
        (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
        })
    },
}

module.exports = authorService;