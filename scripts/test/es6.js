/**
 * Created by Anchao on 2015/10/27.
 */

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
var oJson={name:'ac',age:34};
for(var k of Object.keys(oJson)){
    console.log(k+'='+oJson[k]);
}