// Setup express application
const express = require("express");

const PORT = 3001;
const cors = require('cors');
const app = express();
app.use(cors({
    origin: ''
}));

// const db = require("./dbConfig/db")

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});