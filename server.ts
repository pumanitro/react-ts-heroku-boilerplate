let express = require("express");
let bodyParser = require("body-parser");
let mongodb = require("mongodb");
let ObjectID = mongodb.ObjectID;

let CONTACTS_COLLECTION = "contacts";

let app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
let distDir = __dirname + "/build/";
app.use(express.static(distDir));

let server = app.listen(process.env.PORT || 8080, function () {
    let port = server.address().port;
    console.log("App now running on port", port);
});
