/**
 * Created by hxghxg527 on 16/4/16.
 */

var http = require('http'),
    cheerio = require('cheerio'),
    Promise = require('bluebird');

var baseUrl = 'http://www.imooc.com/learn/';

function getData(url) {
    return new Promise(function (resolve, rejected) {
        http.get(url, function (res) {
            var html = '';
            console.log('开始抓取： ' + url);
            res.on('data', function (data) {
                html += data;
            });

            res.on('end', function () {
                //console.log(html);
                //printData(filterHtml(html));
                resolve(html);
            });
        }).on('error', function () {
            rejected('抓取页面失败。。。');
            //console.log('抓取页面失败。。。');
        });
    });
}

var courseId = [51, 156, 203, 556, 504];
var promiseArr = [];

courseId.forEach(function (item) {
    promiseArr.push(getData(baseUrl + item));
});

Promise.all(promiseArr)
    .then(function (pages) {
        var coursesData = [];
        pages.forEach(function (html) {
            coursesData.push(filterHtml(html));
        });
        printData(coursesData);
    });


function filterHtml(html) {
    var $ = cheerio.load(html);
    var courseName = $('.course-infos .path span').text();
    var static_item = $('.statics .static-item');
    var studyNum = static_item.eq(static_item.length - 1).find('span').eq(0).text();
    var lastData = {
        courseName: courseName,
        studyNum: studyNum,
        chapters: []
    };

    $('.mod-chapters .chapter h3 strong').each(function () {
        lastData.chapters.push($(this).text().trim());
    });

    return lastData;
}

function printData(coursesData) {
    console.log('\r');

    coursesData.forEach(function (courseData) {
        console.log(courseData.studyNum + ' 人学习了 ' + courseData.courseName + '\r');
    });

    coursesData.forEach(function (courseData) {
        console.log('\n## ' + courseData.courseName + ' ##');
        courseData.chapters.forEach(function (item, idx) {
            console.log('     ' + item);
        });
    });

}


