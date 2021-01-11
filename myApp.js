var express = require("express");
var app = express();
require("dotenv").config();

console.log("Hello World");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  let message = "Hello json";
  console.log(process.env.MESSAGE_STYLE);
  process.env.MESSAGE_STYLE === "uppercase"
    ? (message = message.toUpperCase())
    : (message = message);
  res.json({ message: message });
});

app.use(express.static(__dirname + "/public"));

module.exports = app;
