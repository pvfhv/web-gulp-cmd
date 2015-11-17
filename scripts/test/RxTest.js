/**
 * Created by Anchao on 2015/11/16.
 */

var requestScream = Rx.Observable.just('../simulates/comment.json');

//测试一
//requestScream.subscribe(function(requestUrl){
//    $.getJSON(requestUrl,function(oRes){
//        console.log(oRes);
//    });
//});

//测试二
//requestScream.subscribe(function(requestUrl){
//    var responseScream = Rx.Observable.create(function(observer){
//        $.getJSON(requestUrl).done(function(oRes){
//            observer.onNext(oRes);
//        }).fail(function(jqXHR,status,error){
//            observer.onError(error);
//        }).always(function(){
//            observer.onCompleted();
//        });
//    });
//
//    responseScream.subscribe(function(response){
//        console.log(response);
//    });
//});

//来自promise
//var scream = Rx.Observable.fromPromise($.getJSON('../simulates/comment.json'));
//
//scream.subscribe(function(response){
//    console.log(response);
//});


//来自promise
//var responseScream = requestScream.map(function(requestUrl){
//    return Rx.Observable.fromPromise($.getJSON(requestUrl));
//});
//
//responseScream.subscribe(function(response){
//    console.log(response);
//});


//按钮的click
var refreshClickStream = Rx.Observable.fromEvent($('#btn_Rx').get(0), 'click');
var requestOnRefreshStream = refreshClickStream.map(function () {
    return '../simulates/comment.json?t=' + Date.now();
});

//写法一
//var startupscream=Rx.Observable.just('../simulates/comment.json');
//var requestScream = Rx.Observable.merge(requestOnRefreshStream,startupscream);


//写法二
//var requestScream = refreshClickStream.map(function(){
//    return '../simulates/comment.json?t='+Date.now();
//}).merge(Rx.Observable.just('../simulates/comment.json'));

//写法三
//var requestScream = refreshClickStream.map(function(){
//    return '../simulates/comment.json?t='+Date.now();
//}).startWith('../simulates/comment.json');

//写法三
var requestScream = refreshClickStream.startWith('startup click').map(function () {
    return '../simulates/comment.json?t=' + Date.now();
});

//requestScream.subscribe(function(obj){
//    $('#first').html('清空数据！');
//});

var responseScream = requestScream.flatMap(function (url) {
    return Rx.Observable.fromPromise($.getJSON(url));
});

//responseScream.subscribe(function(oRes){
//    console.log(oRes);
//});

//
//var suggestion1Stream = responseScream.map(function(listUser){
//    return listUser[Math.floor(Math.random()*listUser.length)];
//});
//
//suggestion1Stream.subscribe(function(oComment){
//    console.log(oComment);
//});

var suggestion1Stream = responseScream.map(function (listUser) {
    return listUser[Math.floor(Math.random() * listUser.length)];
}).merge(
    refreshClickStream.map(function () {
        return null;
})).startWith(null);

suggestion1Stream.subscribe(function (suggestion) {
    if (suggestion === null) {
        $('#first').hide();
    } else {
        $('#first').show().html(suggestion.author);
    }
});