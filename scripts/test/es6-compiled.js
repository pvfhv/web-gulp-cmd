/**
 * Created by Anchao on 2015/10/27.
 */
'use strict';

var $ = require('jquery');
var _ = require('underscore');
require('babelify/polyfill');
//for of
//for(var value of ["a","b","c","d"]){
//    if(value=="c"){
//        //break;
//        //continue;
//    }
//    console.log(value);
//}

//遍历字符串
//for(var char of "abcdadsfasdf"){
//    console.log(char);
//}

//去重数组
//var arr=[4,2,3,3,2,1];
//var aSet=new Set(arr);
//for(var value of aSet){
//    console.log(value);
//}

//Map
//var oMap=new Map([["name", "ac"], ["age", "34"]]);
////oMap.set('name','ac');
////oMap.set('age',34);
//console.log(oMap);
//for(var [k,v] of oMap){
//    console.log('k='+k+',v='+v);
//}

//json
//var oJson={name:'ac',age:34};
//for(var k of Object.keys(oJson)){
//    console.log(k+'='+oJson[k]);
//}

//测试一个template
//$('#first').html(_.template($('#firstTemplate').html())({"aRes":["1","a","b"]}));

//$('#btn_scroll').click(function(){
//    console.log($('#scroll').scrollTop());
//});

var timer = null;
$('#btn_generators').click(function () {
    var marked1$0 = [quips].map(regeneratorRuntime.mark);

    //Generators
    function quips(name) {
        return regeneratorRuntime.wrap(function quips$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    context$2$0.next = 2;
                    return '你好' + name + '!';

                case 2:
                    context$2$0.next = 4;
                    return '早上好！';

                case 4:
                    if (!name.startsWith("A")) {
                        context$2$0.next = 7;
                        break;
                    }

                    context$2$0.next = 7;
                    return '你的名字以A开头';

                case 7:
                    context$2$0.next = 9;
                    return 'bye';

                case 9:
                case 'end':
                    return context$2$0.stop();
            }
        }, marked1$0[0], this);
    }

    var iter = quips('Anchao');
    clearInterval(timer);
    timer = setInterval(function () {
        var obj = iter.next();
        if (obj.done) {
            clearInterval(timer);
        } else {
            console.log(obj.value);
        }
    }, 2000);
});

//实现迭代,可以使用for of
//class RangeIterator {
//    constructor(start, stop) {
//        this.value = start;
//        this.stop = stop;
//    }
//
//    [Symbol.iterator]() {
//        return this;
//    }
//
//    next() {
//        var value = this.value;
//        if (value < this.stop) {
//            this.value++;
//            return {value: value, done: false};
//        } else {
//            return {value: undefined, done: true};
//        }
//    }
//}
//
//function range(start, stop) {
//    return new RangeIterator(start, stop);
//}
//
//$('#btn_iterator').click(function () {
//    for (var value of range(0, 3)) {
//        console.log(value);
//    }
//});
//
$('#btn_iterator_yield').click(function () {
    var marked1$0 = [range].map(regeneratorRuntime.mark);

    function range(start, stop) {
        var i;
        return regeneratorRuntime.wrap(function range$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    i = start;

                case 1:
                    if (!(i < stop)) {
                        context$2$0.next = 7;
                        break;
                    }

                    context$2$0.next = 4;
                    return i;

                case 4:
                    i++;
                    context$2$0.next = 1;
                    break;

                case 7:
                case 'end':
                    return context$2$0.stop();
            }
        }, marked1$0[0], this);
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = range(0, 3)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var value = _step.value;

            console.log(value);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
});

//根据长度rowLength拆分一维数组icons
//function splitIntoRows(icons, rowLength) {
//    var rows = [];
//    for (var i = 0; i < icons.length; i += rowLength) {
//        rows.push(icons.slice(i, i + rowLength));
//    }
//    return rows;
//}
//console.log(splitIntoRows([1,2,3,4,5,6,7],5));

$('#btn_iterator_split').click(function () {
    var marked1$0 = [splitIntoRows].map(regeneratorRuntime.mark);

    function splitIntoRows(icons, rowLength) {
        var i;
        return regeneratorRuntime.wrap(function splitIntoRows$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    i = 0;

                case 1:
                    if (!(i < icons.length)) {
                        context$2$0.next = 7;
                        break;
                    }

                    context$2$0.next = 4;
                    return icons.slice(i, i + rowLength);

                case 4:
                    i += rowLength;
                    context$2$0.next = 1;
                    break;

                case 7:
                case 'end':
                    return context$2$0.stop();
            }
        }, marked1$0[0], this);
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = splitIntoRows([1, 2, 3, 4, 5, 6, 7], 5)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var value = _step2.value;

            console.log(value);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                _iterator2['return']();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
});

var aRes = [1, 2, 3, 4, 5, 6].filter(function (v) {
    if (v % 2 === 0) {
        return true;
    }

    return false;
});

//console.log(aRes); //2 4 6
$('#btn_iterator_filter').click(function () {
    var marked1$0 = [filter].map(regeneratorRuntime.mark);

    function filter(test, iterable) {
        var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, item;

        return regeneratorRuntime.wrap(function filter$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    _iteratorNormalCompletion3 = true;
                    _didIteratorError3 = false;
                    _iteratorError3 = undefined;
                    context$2$0.prev = 3;
                    _iterator3 = iterable[Symbol.iterator]();

                case 5:
                    if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                        context$2$0.next = 13;
                        break;
                    }

                    item = _step3.value;

                    if (!test(item)) {
                        context$2$0.next = 10;
                        break;
                    }

                    context$2$0.next = 10;
                    return item;

                case 10:
                    _iteratorNormalCompletion3 = true;
                    context$2$0.next = 5;
                    break;

                case 13:
                    context$2$0.next = 19;
                    break;

                case 15:
                    context$2$0.prev = 15;
                    context$2$0.t0 = context$2$0['catch'](3);
                    _didIteratorError3 = true;
                    _iteratorError3 = context$2$0.t0;

                case 19:
                    context$2$0.prev = 19;
                    context$2$0.prev = 20;

                    if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                        _iterator3['return']();
                    }

                case 22:
                    context$2$0.prev = 22;

                    if (!_didIteratorError3) {
                        context$2$0.next = 25;
                        break;
                    }

                    throw _iteratorError3;

                case 25:
                    return context$2$0.finish(22);

                case 26:
                    return context$2$0.finish(19);

                case 27:
                case 'end':
                    return context$2$0.stop();
            }
        }, marked1$0[0], this, [[3, 15, 19, 27], [20,, 22, 26]]);
    }

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = filter(function (item) {
            return item % 2 === 0;
        }, [1, 2, 3, 4, 5, 6])[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var value = _step4.value;

            console.log(value);
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4['return']) {
                _iterator4['return']();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }
});

var str = "哈哈！";
var msg = '<p>' + 'hello world!' + '  str=' + str + ',内部调用函数=' + testTemplate({ name: 'alex' }) + '</p>';
function testTemplate(user) {
    var html = '测试反撇号！这里是一个变量' + user.name + '！';
    return html;
}
//$('#template_test').html(msg);

//let的作用域
//for(let i=0;i<3;i++){
//
//}
//console.log(i);//Uncaught ReferenceError: i is not defined

//闭包
//var arr=[];
//for(var i=0;i<3;i++){
//    arr[i]=function(){
//        console.log(i);
//    };
//}
//
//arr[1]();  //3

//for(let i=0;i<3;i++){
//    arr[i]=function(){
//        console.log(i);
//    };
//}
//
//arr[1](); //1

//import * as constants from './constants.js';
//
//console.log(constants.A);
//console.log(constants.D);

//let fibs = function* () {
//    var a = 0;
//    var b = 1;
//    while (true) {
//        yield a;
//        //console.log("a="+a);
//        [a, b] = [b, a + b];
//        //console.log("a="+a+",b="+b);
//    }
//}
//
//var [first, second, third, fourth, fifth, sixth] = fibs();
//console.log(sixth) // 5

//# sourceMappingURL=es6-compiled.js.map