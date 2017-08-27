const path = require('path');
const port = 1795;

var express = require('express')
var app = express()

app.use(express.static('app'));

app.get('/', function (req, res) {
   res.sendFile(process.cwd() + '/index.html')
});

app.get('*', function (req, res) {
   res.send('Welcome to my app')
});

app.listen(process.env.PORT || port);

console.log('server is listening on port: ', port);
