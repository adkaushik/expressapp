
var express = require('express')
var app = express()

app.get('/kaushik', function (req, res) {
   res.sendFile(process.cwd()+'/index.html')
});


app.get('*', function (req, res) {
   res.send('Welcome to my app')
});


app.listen(process.env.PORT || 1795);