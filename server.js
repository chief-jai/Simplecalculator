var express = require('express');
var path = require('path')
var http = require('http');
var app = express();


app.use(express.static(path.join(__dirname,'dist/simplecalculator')));

app.get('*'), (req,res) => {
	res.sendFile(path.join(__dirname, 'dist/simplecalculator/index.html'));
}

var port = process.env.PORT || '3000';
app.set('port', port);

var server = http.createServer(app);
server.listen(port, ()=> console.log("server is running"));
