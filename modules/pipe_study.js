/**
 * Created by hxghxg527 on 16/4/16.
 */

var http = require('http');
var fs = require('fs');
var request = require('request');

//读取别的网站的资源，然后返回给response

var app = http.createServer(function (req, res) {
    request('http://imgcache.gtimg.cn/tencentvideo_v1/vstyle/web/v3/style/images/logo.png').pipe(res);
});

app.listen(8080);

console.log('服务器监听在8080端口...');


fs.createReadStream('../images/nodejs-2560x1440.png').pipe(fs.createWriteStream('../images/nodejs2.png'));