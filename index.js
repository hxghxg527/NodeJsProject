/**
 * Created by hxghxg527 on 16/4/4.
 */
'use strict';


var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 3030);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

//app.use(favicon());
//app.use(logger('dev'));
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(app.router);

app.use(express.static(path.join(__dirname, 'public')));

var router = express.Router();

router.route('/')
    .get(function (req, res) {
        console.log('ttd');
        //res.send('ds');
        //res.sendFile(__dirname + '/views/index.html');
        res.render(__dirname + '/views/index');
    }).post(function (req, res) {

    });

//app.use('/', router);

//app.get('/', function (req, res) {
//    res.sendFile(__dirname + '/views/index.html');
//});

app.route('/').get(function (req, res) {
    //res.send({'xs':'dd'});
    //res.render('index', function (err, html) {
    //    res.send(html);
    //})
});

app.listen(app.get('port'));
console.log('listening to 3030');


