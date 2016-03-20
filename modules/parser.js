/**
 * Created by hxghxg527 on 16/3/20.
 */
'use strict';

var Parser = function () {

};

Parser.prototype = {
    parse: function (num) {
        return num * num;
    }
};

/*
 * 该程序中最重要的部分是“module.exports = Parser;”这一行代码。
 * 它告诉Node从该文件中要输出的内容。
 * 在该例中，我输出了构造函数，用户可以用Parser对象来创建实例。你可以输出任何你想要的。
 * */
module.exports = Parser;