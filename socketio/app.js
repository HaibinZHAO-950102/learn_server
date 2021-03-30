const PORT = 3000;
const io = require('socket.io-client');

let socket = io.connect('http://localhost:' + PORT + '/games');

socket.on("welcome", function(msg)
{
  console.log('Received: ' + msg);
});
