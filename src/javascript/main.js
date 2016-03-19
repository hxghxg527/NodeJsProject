/**
 * Created by hxghxg527 on 16/3/19.
 */
'use strict';

$.get({
    url: 'http://localhost:8080/src/data/test.json'
}).success(function (data) {
    console.log(data);
}).error(function () {
    console.log('failed get data...');
});