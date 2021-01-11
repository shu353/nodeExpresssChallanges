var express = require("express");
var app = express();
require("dotenv").config();

console.log("Hello World");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  let jsonMessage = { message: "Hello json" };
  console.log(process.env.MESSAGE_STYLE);
  if (process.env.MESSAGE_STYLE === "uppercase") {
    jsonMessage.message = jsonMessage.message.toUpperCase();
  }
  res.json(jsonMessage);
});

app.use(express.static(__dirname + "/public"));

module.exports = app;
