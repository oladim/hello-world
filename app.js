var express = require("express");
var app = express();

const port = 8080;


app.get("/", (req, res) => res.send("Hello World"));

app.get("/contact", (req, res) => res.send("This is contact page"));

app.listen(port, () => console.log("Server has started"));
