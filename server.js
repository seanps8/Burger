var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var router = require("./controllers/burgers_controller.js");


var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up rendering engine, Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static files and routes (middleware)
app.use(router);

// Start server
app.listen(PORT, function() {
	console.log("Listening on PORT " + PORT);
});