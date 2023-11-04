// Setup express application
const express = require("express");

const PORT = 3001;
const cors = require("cors");
const app = express();

const authorService = require("./services/authorService");
const bookService = require("./services/bookService");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Author Requests
app.get("/authors", (req, res) => {
  authorService.getAuthors(req, res);
});

app.get("/authorsAndBookTotals", (req, res) => {
  authorService.getAuthorsAndBookTotals(req, res);
});

app.get("/authorsBookPriceTotal", (req, res) => {
  authorService.getAuthorsBookPriceTotal(req, res);
});

app.get("/authorWithMostBooksAndPriceTotal", (req, res) => {
  authorService.getAuthorWithMostBooksAndPriceTotal(req, res);
});

// Book Requests
app.get("/books", (req, res) => {
  bookService.getBooks(req, res);
});

app.get("/booksByCost", (req, res) => {
  bookService.getBooksByCost(req, res);
});

app.get("/bookGenres", (req, res) => {
  bookService.getBookGenres(req, res);
});

app.get("/aboveAveragePoetryBooks", (req, res) => {
  bookService.getAboveAveragePoetryBooks(req, res);
});

app.get("/bookPublishers", (req, res) => {
  bookService.getBookPublishers(req, res);
});

app.get("/mostPublishedYear", (req, res) => {
  bookService.getMostPublishedYear(req, res);
});


// Listening on...
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
