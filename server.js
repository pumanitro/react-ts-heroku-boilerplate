var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var path = require("path");
var CONTACTS_COLLECTION = "contacts";
var app = express();
app.use(bodyParser.json());
// Create link to Angular build directory
var distDir = __dirname + "/build/";
app.use(express.static(distDir));
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});
