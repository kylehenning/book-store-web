// Setup express application
const express = require("express");

const PORT = 3001;
const cors = require("cors");
const app = express();

const authorService = require("./services/authorService");
const bookService = require("./services/bookService");

app.use(
  cors({
    origin: "",
  })
);

app.get("/authors", (req, res) => {
  authorService.getAuthors(req, res);
});

app.get("/authorsBookPriceTotal", (req, res) => {
  authorService.getAuthorsBookPriceTotal(req, res);
});

app.get("/books", (req, res) => {
  bookService.getBooks(req, res);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
