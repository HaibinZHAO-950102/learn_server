const HOST = "127.0.0.1";
const PORT = 3000;

var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");

var server = http.createServer(function(req, res)
{
  var urljson = url.parse(req.url, true);
  var pathname = urljson.pathname;
  var extname = path.extname(pathname);
  console.log(urljson.query.name);
  res.end("Hello");
});

server.listen(PORT, HOST);

console.log("Server is running...");
console.log(HOST + ":" + PORT);
