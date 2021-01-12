var express = require("express");
var app = express();
require("dotenv").config();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

getCurrentTime = () => {
  return new Date().toString();
};

app.get(
  "/now",
  (req, res, next) => {
    req.time = getCurrentTime();
    next();
  },
  (req, res) => {
    res.json({
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

app.get("/:word/echo", (req, res) => {
  let word = req.params.word;
  res.json({
    echo: word,
  });
  console.log(req.params.word);
});

app
  .route("/name")
  .get((req, res) => {
    let firstName = req.query.first;
    let lastName = req.query.last;

    res.json({
      name: `${firstName} ${lastName}`,
    });
  })
  .post();

module.exports = app;
//as
