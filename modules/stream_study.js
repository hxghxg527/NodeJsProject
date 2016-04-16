/**
 * Created by hxghxg527 on 16/4/16.
 */

var fs = require('fs');

var readStream = fs.createReadStream('../images/nodejs-2560x1440.png');
var writeStream = fs.createWriteStream('../images/nodejs.png');

readStream.on('data', function (chunk) {
    if (writeStream.write(chunk) == false) {
        console.log('pause stream');
        readStream.pause();
    }
}).on('end', function () {
    writeStream.end();
});

writeStream.on('drain', function () {
    console.log('resume stream');
    readStream.resume();
});