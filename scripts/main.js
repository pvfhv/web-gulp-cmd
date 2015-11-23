/**
 * Created by Anchao on 2015/10/23.
 */

import './global.js';

import PromiseDemo from './test/Promise';
import './login/login';
import './test/es6';
//import './test/reactTest';
//import './test/RxTest';
import './test/baconTest';
import './test/testJquery';



//推荐方式一：
//new PromiseDemo().getPromise().done(function (oData) {
//    alert(JSON.stringify(oData) + ", SUCCESS");
//}).fail(function (status) {
//    alert(status + ", FAIL");
//}).progress(function (status) {
//    $("#first").append(status);
//}).always(function(){
//    console.log('无论成功与否都被执行');
//});

//方式二
//new PromiseDemo().then(function (oData) {
//    alert(JSON.stringify(oData) + ", SUCCESS");
//},function (status) {
//    alert(status + ", FAIL");
//},function (status) {
//    $("#first").append(status);
//},function(){
//    console.log('无论成功与否都被执行');
//});


