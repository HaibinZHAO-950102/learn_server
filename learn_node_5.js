const HOST = "127.0.0.1";
const PORT = 3000;

var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");

const mime = {
  '.jpg' : 'image/jpeg',
  '.jpeg' : 'image/jpeg',
  '.png' : 'image/png',
  '.html' : 'text/html;charset=URF-8',
  '.js' : 'application/x-javascript',
  '.css' : 'text/css'
};

var server = http.createServer(function(req, res)
{
  var pathname = url.parse(req.url).pathname;
  var extname = path.extname(pathname);

  if (!extname)
  {
    pathname = pathname + 'index.html';
  }

  console.log(pathname);
  fs.readFile("./nodejs5" + pathname, function(err, data)
  {
    if (err)
    {
      res.end("No such file.");
    }
    if (mime.hasOwnProperty(extname))
    {
      res.setHeader('content-type', mime[extname]);
    }
    res.end(data);
  });
});

server.listen(PORT, HOST);

console.log("Server is running...");
console.log(HOST + ":" + PORT);
