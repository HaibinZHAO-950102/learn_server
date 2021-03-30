const HOST = "127.0.0.1";
const PORT = 3000;
const PHOTO_PATH = "/photo.jpg";
const HTML_PATH = '/learn_html_2.html';

var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res)
{
  if (req.url == '/hello')
  {
    fs.readFile("."+HTML_PATH, function(err, data)
    {
      res.end(data);
    });
  }
  else if (req.url == '/photo.jpg')
  {
    fs.readFile("."+PHOTO_PATH, function(err, data)
    {
        res.end(data);
    });
  }
  else
  {
    res.end("Error!");
  }
});

server.listen(PORT, HOST);

console.log("Server is running...");
console.log(HOST + ":" + PORT);
