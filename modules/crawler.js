/**
 * Created by hxghxg527 on 16/4/14.
 */


var http = require('http');
var url = 'http://www.sina.com.cn/';
var cheerio = require('cheerio');

http.get(url, function (res) {
    var html = '';
    res.on('data', function (data) {
        html += data;
    });

    res.on('end', function () {
        //console.log(html);
        var data = filterChapters(html);
        console.log(data);
    });
}).on('error', function () {
    console.log('获取页面失败！');
});


function filterChapters(html) {
    var titleArr = ['a', 'b', 'c', 'd', 'e', 'f'];
    var chaptersData = [];
    var $ = cheerio.load(html);
    var news = $('.mod06-cont');
    var newslist = news.find('.newslist');

    newslist.each(function (index) {
            var tempArr = [];
            $(this).find('.list-a a').each(function () {
                tempArr.push($(this).text());
            });

            var tempObj = {};
            tempObj[titleArr[index]] = tempArr;
            chaptersData.push(tempObj);
        }
    );

    return chaptersData;
}
