const db = require("../dbConfig/db");

const authorService = {
  getAuthors: (req, res) => {
    db.query("SELECT * FROM author_info;", (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    });
  },
  getAuthorsAndBookTotals: (req, res) => {
    db.query(
      "select a.*, count(ba.book_info_book_id) as book_total from author_info as a left join book_info_has_author_info as ba on a.author_id = ba.author_info_author_id group by a.author_id;",
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  },
  getAuthorsBookPriceTotal: (req, res) => {
    db.query(
      "select concat(a.first_name, ' ', a.last_name) as author_name, sum(b.cost) as total_cost from author_info as a left join book_info_has_author_info as ba on a.author_id = ba.author_info_author_id left join book_info as b on ba.book_info_book_id = b.book_id group by a.author_id order by sum(b.cost) desc;",
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  },
  getAuthorWithMostBooksAndPriceTotal: (req, res) => {
    db.query(
      "select concat(a.first_name, ' ', a.last_name) as author_name, count(b.book_id) as total_books, sum(b.cost) as total_cost from author_info as a left join book_info_has_author_info as ba on a.author_id = ba.author_info_author_id left join book_info as b on ba.book_info_book_id = b.book_id group by a.author_id order by total_books desc limit 1;",
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  },
};

module.exports = authorService;
