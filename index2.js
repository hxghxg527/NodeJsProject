/**
 * Created by hxghxg527 on 16/4/13.
 */


var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('public/images/1.jpg', function (err, data) {
            if (err) {
                console.log(err);
                res.writeHeader('content-type', 404);
                res.end();
            } else {
                console.log('get data');
                res.end(data);
            }
        }
    );
}).listen('3000');

console.log('app server listening 3000');


// 在终端下的对一个网站的压力测试。
// ab -n1000 -c10 http://www.imooc.com/

//cheerio类似jquery