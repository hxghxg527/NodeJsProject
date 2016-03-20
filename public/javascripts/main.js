/**
 * Created by hxghxg527 on 16/3/19.
 */
'use strict';

var url_prev = 'http://localhost:8080/';

function getName() {
    $.get({
        url: url_prev + 'data/test.json'
    }).success(function (data) {
        $('.name').text(data.name);
    }).error(function () {
        console.log('failed get data...');
    });
}

$('.btn').bind('click', function () {
    getName();
});