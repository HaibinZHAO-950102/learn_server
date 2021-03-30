var express = require('express');
var app = express();

app.get('/', function(req, res)
{
  res.send('I am the main page.');
});

app.get('/music', function(req, res)
{
  res.send('Music channel.');
});

app.get('/page', function(req, res)
{
  res.sendFile(__dirname + '/learn_html_2.html');
});

app.get('/student/:matrikelnummer', function(req, res)
{
  res.set('Content-type', 'text/html; charset=UTF-8');
  if (/^[\d]{6}$/.test(req.params.matrikelnummer))
  {
    res.send('Student, matrikelnummer: ' + req.params.matrikelnummer);
  }
  else
  {
    res.send("Matrikelnummer not found!");
  }
});

app.use(express.static('./nodejs5'));

app.listen(3000);
