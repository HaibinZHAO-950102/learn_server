const HOST = "127.0.0.1";
const PORT = 3000;

//读取内置模块http，用于开发服务器
var http = require("http");
// 创建服务器
var server = http.createServer(function(req,res)
{
  res.setHeader("Content-Type", "text/html; charset=UTF-8");
  // 导航
  if (req.url == '/')
  {
    res.end("Main Page");
  }
  else if (req.url == '/music')
  {
    res.end("Music page");
  }
  else
  {
    res.end("No such page!");
  }

  // 正则表达
  var str = "I am 12 years old, and I have 20 apples. My mon is 30 years old. She has 100 oranges.";

  var reg = /\d/g;
  var result = reg.exec(str);
  console.log(result);

  result = reg.exec(str);
  console.log(result);

  var reg = /\d+/g;
  var result = reg.exec(str);
  console.log(result);

  var reg = /\d+ years old/g;
  var result = reg.exec(str);
  console.log(result);

  var reg = /(\d+) years old/g;
  var result = reg.exec(str);
  console.log(result);

  var reg = /(\d+) years old/g;
  var result = reg.exec(str);
  console.log(result[1]);

  var reg = /(\d+) years old/g;
  var result;
  while (result = reg.exec(str))
  {
    console.log(result[1]);
  }
});

server.listen(PORT, HOST);

console.log("Server is running...");
console.log(HOST + ":" + PORT);
