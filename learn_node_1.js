const HOST = "127.0.0.1";
const PORT = 3000;

//读取内置模块http，用于开发服务器
var http = require("http");
// 读取fs模块，访问文件
var fs = require("fs");

// 创建服务器
// var res_num = 0.5;
var server = http.createServer(function(req,res)
{
  // res_num = res_num + 0.5;
  res.setHeader("Content-Type", "text/html; charset=UTF-8");
  fs.readFile("text.txt", function(err, filecontext)
  {
    res.end(filecontext);
  });
  // res.end(res_num.toString());
  // if (res_num === 5)
  // {
  //   throw new Error("Error appear! Their IP is: " + req.connection.remoteAddress);
  // }
});

server.listen(PORT, HOST);

console.log("Server is running...");
console.log(HOST + ":" + PORT);
