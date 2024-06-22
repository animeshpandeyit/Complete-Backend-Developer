const express = require("express");
require("dotenv").config();
// console.log(process.env) //
const app = express();

// const port = 3000;
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hello Twitter!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
