var express = require("express");

var app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/"), (function(req, res) {
    res.sendFile(path.join(__dirname))
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });