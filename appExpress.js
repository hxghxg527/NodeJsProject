/**
 * Created by hxghxg527 on 16/3/20.
 */
'use strict';

var express = require('express'),
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    Parser = require('./modules/parser');

var app = express();
var parser = new Parser();
console.log(parser.parse(5));

//app.use(express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname, 'public')));
//app.use('/public', express.static(path.join(__dirname, 'public')));

//app.use('/public', express.static('public'));
//res.sendFile()
//app.use(function (err, req, res, next) {
//    console.log('xx');
//    res.status(200).sendFile('public/index.html');
//});

//app.get('/', function (req, res) {
//    var pathname = url.parse(req.url).pathname;
//
//    console.log(pathname);
//
//    //fs.readFile('public/index.html', function (err, data) {
//    //    if (err) {
//    //        res.writeHead(404, {'Content-Type': 'text/html'});
//    //    } else {
//    //        //res.writeHead(200, {'Content-Type': 'text/html'});
//    //        //res.write(data.toString());
//    //        //res.render('public/index.html', function(err, html) {
//    //        //    res.send(html);
//    //        //});
//    //    }
//    //    //res.end();
//    //});
//    //res.send('Hello World!');
//    res.sendFile('http://localhost:8080/public/index.html');
//});

app.listen(8080);

console.log('Server running at http://localhost:8080/');
