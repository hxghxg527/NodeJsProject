/**
 * Created by hxghxg527 on 16/3/20.
 */
'use strict';

var express = require('express'),
    app = express(),
    Parser = require('./modules/parser');

var parser = new Parser();
console.log(parser.parse(5));

app.use(express.static(__dirname + '/public'));

app.listen(8080);

console.log('Server running at http://localhost:8080/');
