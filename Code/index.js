var express = require('express'),
    http = require('http'),
    os = require('os'),
    redis = require('redis');

var app = express();
var client = redis.createClient('6379', 'redis');

app.use(express.static(__dirname));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
});

http.createServer(app).listen(process.env.PORT || 8080, function() {
  console.log('Listening on port ' + (process.env.PORT || 8080));
});
