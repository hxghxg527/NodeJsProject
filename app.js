/**
 * Created by hxghxg527 on 16/3/19.
 */
'use strict';

var http = require('http'),
    fs = require('fs'),
    url = require('url');

http.createServer(function (request, response) {

    var pathname = url.parse(request.url).pathname;

    console.log('Request for ' + pathname + ' received.');

    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());
        }
        response.end();
    });
}).listen(8080);

console.log('Server running at http://localhost:8080/');