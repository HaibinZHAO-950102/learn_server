const express = require('express');
const app = express();
const PORT = 3000;
const http = require('http').createServer();
const io = require('socket.io')(http);

io.of('/games').on('connection', function(socket)
{
    socket.emit('welcome', 'Hello, welcome to the socket.io server!');
    console.log('New client came.')
});

http.listen(PORT, function()
{
  console.log("Server is listening on localhost: " + PORT);
});
