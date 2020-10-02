var path = require("path");
var express = require("express");
var app = express();

var HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

let directories = ["/css", "/img", "/js"];

function useObjects(directory) {
  app.use(directory, express.static(__dirname + directory));
}

directories.forEach(useObjects);

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);
