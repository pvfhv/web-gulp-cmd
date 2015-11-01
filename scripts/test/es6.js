/**
 * Created by Anchao on 2015/10/27.
 */
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

var timer=null;
$('#btn_generators').click(function(){
    //Generators
    function* quips(name) {
        yield '你好' + name + '!';
        yield '早上好！';
        if(name.startsWith("A")){
            yield '你的名字以A开头';
        }
        yield 'bye';
    }

    var iter=quips('Anchao');
    clearInterval(timer);
    timer=setInterval(function(){
        var obj=iter.next();
        if(obj.done){
            clearInterval(timer);
        }else{
            console.log(obj.value);
        }
    },2000);
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
    function* range(start, stop) {
        for (var i = start; i < stop; i++) {
            yield i;
        }
    }

    for (var value of range(0, 3)) {
        console.log(value);
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

$('#btn_iterator_split').click(function(){
    function* splitIntoRows(icons,rowLength){
        for(var i=0;i<icons.length;i+=rowLength){
            yield icons.slice(i,i+rowLength);
        }
    }

    for(var value of splitIntoRows([1,2,3,4,5,6,7],5)){
        console.log(value);
    }
});

var aRes=[1,2,3,4,5,6].filter(v=>{
    if(v%2===0){
        return true;
    }

    return false;
});

//console.log(aRes); //2 4 6
$('#btn_iterator_filter').click(function(){
    function* filter(test, iterable){
        for(var item of iterable){
            if(test(item)){
                yield item;
            }
        }
    }

    for(var value of filter(function(item){return item%2===0;},[1,2,3,4,5,6])){
        console.log(value);
    }
});


var str="哈哈！";
var msg=`<p>${'hello world!'}  str=${str},内部调用函数=${testTemplate({name:'alex'})}</p>`;
function testTemplate(user){
    var html= `测试反撇号！这里是一个变量${user.name}！`;
    return html;
}
//$('#template_test').html(msg);


//let的作用域
//for(let i=0;i<3;i++){
//
//}
//console.log(i);//Uncaught ReferenceError: i is not defined

//闭包
var arr=[];
//for(var i=0;i<3;i++){
//    arr[i]=function(){
//        console.log(i);
//    };
//}
//
//arr[1]();  //3

for(let i=0;i<3;i++){
    arr[i]=function(){
        console.log(i);
    };
}

arr[1](); //1
