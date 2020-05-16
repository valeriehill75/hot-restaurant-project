var express = require("express");
var path = require("path");
var app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
//==============================================

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./main.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "./tables.html"));
});

app.get("/reservations", function (req, res) {
  res.sendFile(path.join(__dirname, "./reservations.html"));
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
