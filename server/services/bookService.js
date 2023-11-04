const db = require("../dbConfig/db");

const bookService = {
  getBooks: (req, res) => {
    db.query("SELECT * FROM book_info;", (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    });
  },
  getBooksByCost: (req, res) => {
    db.query("select * from book_info order by cost;", (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    });
  },
  getBookGenres: (req, res) => {
    db.query(
      "select genre, count(*) as book_total from book_info group by genre;",
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  },
  getAboveAveragePoetryBooks: (req, res) => {
    db.query(
      "select * from book_info where genre = 'Poetry' and cost > (select avg(cost) from book_info);",
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  },
  getBookPublishers: (req, res) => {
    db.query(
      "select b.publisher, count(ba.author_info_author_id) from book_info as b left join book_info_has_author_info as ba on b.book_id = ba.book_info_book_id group by b.publisher;",
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  },
  getMostPublishedYear: (req, res) => {
    db.query(
      "select published_year, count(*) as book_total from book_info group by published_year order by book_total desc limit 1;",
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  },
};

module.exports = bookService;
