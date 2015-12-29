/**
 * Created by anchao on 2015/12/29.
 */


//import PromiseDemo from './test/Promise';
//import './test/es6';
//import './test/reactTest';
//import './test/RxTest';
//import './test/SideBarPanel';
//import './test/baconTest';
//import './test/testJquery';
//import './test/testPromise';
//import './test/immutable1';
//import './test/jqueryTextSelect';
//import './test/plotlytest';
//import './backbone/backbone';

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

class Index{
    init(){
        var obj={
            name:'jerry',
            age:19
        };

        _.delay(function(){
            window.history.replaceState(obj,'首页');
            $('#container').html(history.length);
            $('#first').html(JSON.stringify(history.state));
            location.replace('#hehe');
        },3000);


    }
}

export default Index;