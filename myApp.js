var express = require("express");
var app = express();
require("dotenv").config();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time,
    });
  }
);
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
//as
