/**
 * Created by hxghxg527 on 16/3/20.
 */
'use strict';

var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080);

console.log('Server running at http://localhost:8080/');
