/**
 * Created by hxghxg527 on 16/3/19.
 */
'use strict';

var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('hello world!!');
}).listen(8080);

console.log('Server running at http://localhost:8080/');