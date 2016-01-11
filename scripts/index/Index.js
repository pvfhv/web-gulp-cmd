/**
 * Created by anchao on 2015/12/29.
 */

//var jQUI_tooltip=$.fn.tooltip.noConflict();
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

class Index {
    init() {
        $('#template_test').html($('#svgTemplate2').html());

        //$('#bazi').draggable();

        $('#bazi').draggable({
            start:function(event,ui){
                $(this).data('startPos',ui.position);
                var oldAttr = $(this).attr('transform');
                if(/\w+?\((\d+?),(\d+?)\)/.test(oldAttr)){
                    $(this).data('translate',{left:parseInt(RegExp.$1,10),top:parseInt(RegExp.$2,10)});
                }
            },
            drag:function(event,ui){
                $(this).removeAttr('style');
                var oStartPos=$(this).data('startPos');
                var oTranslate=$(this).data('translate');
                var oCurPos=ui.position;
                var left = oCurPos.left - oStartPos.left + oTranslate.left;
                var top = oCurPos.top - oStartPos.top + oTranslate.top;

                var oldAttr = $(this).attr('transform');
                console.log(`left=${left},top=${top}`);
                $(this).attr('transform','translate('+left+','+top+')');
                //if(/\w+?\((\d+?),(\d+?)\)/.test(oldAttr)){
                //    var l = parseInt(RegExp.$1,10);
                //    var t = parseInt(RegExp.$2,10);
                //    if(l>0&&t>0){
                //        $(this).attr('transform','translate('+l+left+','+t+top+')');
                //    }else {
                //
                //    }
                //}
            },
            stop:function(){
                $(this).removeAttr('style');
            }
        });

        $('#testES6').on('click',(e)=>{
            console.log(this);//class Index 或Index实例
            console.log(e.target.value);
            alert(`e.currentTarget=${e.currentTarget.value}`);
        });

        //var obj={
        //    name:'jerry',
        //    age:19
        //};
        //
        //_.delay(function(){
        //    window.history.replaceState(obj,'首页');
        //    $('#container').html(history.length);
        //    $('#first').html(JSON.stringify(history.state));
        //    location.replace('#hehe');
        //},3000);

        //var TestRouter=Backbone.Router.extend({
        //    routes:{
        //        '':'main',
        //        'search':'searchList',
        //        'search/:key':'searchKey',
        //        'search/:key/p:page':'searchKey_page',
        //        '*search':'other'
        //    },
        //    main:function(){
        //        $('#divshow').text('首页');
        //    },
        //    searchList:function(){
        //        $('#divshow').text('查询列表');
        //    },
        //    searchKey:function(key){
        //        $('#divshow').text('查询关键字'+key);
        //    },
        //    searchKey_page:function(key,page){
        //        $('#divshow').text('查询关键字'+key+',页码：'+page);
        //    },
        //    other:function(){
        //        $('#divshow').text('其他');
        //    }
        //});
        //
        //var r=new TestRouter;


        //var TestRouter = Backbone.Router.extend({
        //    routes: {
        //        '': 'main',
        //        'search': 'searchList',
        //        'search/:key': 'searchKey',
        //        'search/:key/p:page': 'searchKey_page',
        //        '*search': 'other'
        //    }
        //});
        //
        //var router = new TestRouter;
        //router.on('route:main', function () {
        //    $('#divshow').text('首页');
        //});
        //
        //router.on('route:searchList', function () {
        //    $('#divshow').text('查询列表');
        //});
        //
        //router.on('route:searchKey',function (key) {
        //    $('#divshow').text('查询关键字' + key);
        //});
        //
        //router.on('route:searchKey_page',function (key, page) {
        //    $('#divshow').text('查询关键字' + key + ',页码：' + page);
        //});
        //
        //router.on('route:other',function () {
        //    $('#divshow').text('其他');
        //});


        //两个方法,动态设置路由
        //var TestRouter=Backbone.Router.extend({
        //    routes:{
        //        '':'main',
        //        'search/:key':'searchKey',
        //        '*search':'other'
        //    },
        //    initialize:function(){
        //      this.route('search','searchList',function(){
        //          $('#divshow').text('initialize中设置查询列表');
        //      })
        //    },
        //    main:function(){
        //        $('#divshow').text('首页');
        //    },
        //    searchKey:function(key){
        //        $('#divshow').text('查询关键字'+key);
        //    },
        //    other:function(){
        //        $('#divshow').text('其他');
        //    }
        //});
        //
        //var r=new TestRouter;
        //r.route('search/:key/p:page','searchKey_page',function(key,page){
        //    $('#divshow').text('实例后查询关键字'+key+',页码：'+page);
        //});


        var TestRouter=Backbone.Router.extend({
            routes:{
                'search1/:key':function(key){
                    $('#divshow').text('search1搜索结果:'+key);
                },
                'search2/:key':function(key){
                    $('#divshow').text('search2搜索结果:'+key);
                }
            }
        });

        var r = new TestRouter;
        var n = 0;
        setInterval(function(){
            n++;

            if(n%2==0){
                r.navigate('search1/abc',{trigger:true});
            }else{
                r.navigate('search2/efg',{trigger:true});
            }
        },2000);

        Backbone.history.start();

        $('#stopNavigate').click(function(){
            var isStop=$(this).attr('isStop');

            if(isStop=='true'){
                $(this).attr('isStop','false');
                Backbone.history.start();
            }else {
                $(this).attr('isStop','true');
                Backbone.history.stop();
            }
        })
    }
}

export default Index;