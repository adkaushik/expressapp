const path = require('path');
const port = 1795;

var express = require('express')
var app = express()

app.get('/', function (req, res) {
   res.sendFile(process.cwd() + '/index.html')
});

app.get('/app/style.css', function (req, res) {
	res.sendFile(path.join(process.cwd(), 'app', 'style.css'))
});

app.get('/app/app.js', function (req, res) {
	res.sendFile(path.join(process.cwd(), 'app', 'app.js'))
});

app.get('*', function (req, res) {
   res.send('Welcome to my app')
});

console.log('server is listening on port: ', port)
app.listen(process.env.PORT || port);