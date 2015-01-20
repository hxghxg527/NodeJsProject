var express = require('express');
var app = express();
app.get('/', function(req, res) {
	res.send('hello node js');
});


app.listen('3000', function() {
	console.log('the app is listen to 3000');
});