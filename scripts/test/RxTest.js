/**
 * Created by Anchao on 2015/11/16.
 */

/*------------------循环拉取数据开始------------------*/
//var source=Rx.Observable.return(100);
//var observer = Rx.Observer.create(
//    (x)=>console.log(x),
//    ()=>console.log('error'),
//    ()=>console.log('complete')
//);
//
//source.combineLatest(Rx.Observable.interval(1000),(x,no)=>{
//    return x;
//}).subscribe(observer);
/*------------------循环拉取数据结束------------------*/

var observer = Rx.Observer.create(
    (x)=>console.log(x),
    ()=>console.log('error'),
    ()=>console.log('complete')
);
var sourceStream=Rx.Observable.fromPromise($.getJSON('../simulates/comment.json'));

var subject = Rx.Subject.create(observer,sourceStream);

subject.map(x=>x).combineLatest(Rx.Observable.interval(1000),(x,no)=>x).subscribe(
    (x)=>console.log(x)
);



//subject
//var observer = Rx.Observable.create(obs=> {
//
//});

//var subject = new Rx.Subject();
//console.log(subject.hasObservers());//false

//function getData() {
//    return $.getJSON('../simulates/comment.json');
//}
//
//
//subject.subscribe(
//    (data)=> {
//        console.log(data)
//    },
//    ()=>console.log('error'),
//    ()=> {
//        console.log('complete后再次请求数据');
//    }
//);
//
//subject.onNext(100);
//console.log(subject.hasObservers());


//let intervalStream = Rx.Observable.interval(1000);
//let suggeststream = intervalStream.map(()=>{
//    return {name:'tom'};
//});

//let sourcestream=Rx.Observable.just('../simulates/comment.json')
//    .flatMap(url=>{
//        return Rx.Observable.fromPromise($.getJSON(url));
//    }).flatMap(oComment=>{
//        return Rx.Observable.from(oComment);
//    });
//
//var suggeststream = sourcestream.subscribe(
//    (data)=>console.log(data),
//    ()=>console.log('error'),
//    ()=>{
//        setTimeout(()=>{
//        },50);
//    }
//);
//
//
//console.log(suggeststream.hasObservers());

//var source1=Rx.Observable.interval(2000).map(()=>null);
//var source2=Rx.Observable.return('../simulates/comment.json')
//    .flatMap(url=>Rx.Observable.fromPromise($.getJSON(url)))
//    .combineLatest(source1,(data,n)=>data)
//    .flatMap(data=>Rx.Observable.from(data));
//
//var observer = source2.subscribe(
//    x=>{
//        if($('#first').length==0){
//            //退订
//            observer.dispose();
//        }else {
//            console.log(x+'_'+Date.now());
//        }
//    },
//    ()=>console.log('error'),
//    ()=>{
//        console.log('completed');
//    }
//);


//create range
//var rangestream = Rx.Observable.range(1,5);
//rangestream.subscribe(x=>console.log(x),error=>console.log(error),()=>console.log('completed'));

//create create
//var sourcestream = Rx.Observable.create(function (observer) {
//    observer.onNext(100);
//    observer.onCompleted('abc');
//
//    return function () {
//        console.log('dispose+++');
//    }
//
//    return Rx.Disposable.create(()=>console.log('dispose'));
//});
//
//var subscription = sourcestream.subscribe(function (x) {
//    console.log('onnext=' + x);
//}, function (e) {
//    console.log('error' + e);
//}, function () {
//    console.log('completed!!!!');
//});
//
//subscription.dispose();

//create defer
//var sourcestream=Rx.Observable.defer(()=>Rx.Observable.return(100));
//var sourcestream=Rx.Observable.defer(()=>$.Deferred().resolve(100));
//
//var subscribe=sourcestream.subscribe(
//    data=>console.log(data),
//    ()=>console.log('error'),
//    ()=>console.log('complete!!!')
//);

//empty 创建一个不发射任何数据但是正常终止的Observable
//var sourcestream =Rx.Observable.empty();
//sourcestream.subscribe(
//    data=>console.log(data),
//    ()=>console.log('error'),
//    ()=>console.log('complete!!!')
//);

//never 创建一个不发射数据也不终止的Observable
//var sourcestream =Rx.Observable.never();
//sourcestream.subscribe(
//    data=>console.log(data),
//    ()=>console.log('error'),
//    ()=>console.log('complete!!!')
//);

//Throw 创建一个不发射数据以一个错误终止的Observable
//var sourcestream =Rx.Observable.return(100)
//    .selectMany(function(){Rx.Observable.throw(new Error('error!!!!'))});
//sourcestream.subscribe(
//    data=>console.log(data),
//    ()=>console.log('error'),
//    ()=>console.log('complete!!!')
//);

//[from] arguments array Iterable
//var f=function(){
//    return Rx.Observable.from(arguments);
//}
//
//f(1,2,3).subscribe(
//    data=>console.log(data),
//    ()=>console.log('error'),
//    ()=>console.log('complete!!!')
//);

//var set1 = new Set(["a", "b"]);
//Rx.Observable.from(set1).subscribe(
//    x=>console.log(x),
//    ()=>console.log('error'),
//    ()=>console.log('completed')
//);

//var map1=new Map([[1,'tom'],[2,'jerry']]);
//Rx.Observable.from(map1).subscribe(
//    x=>console.log(`key=${x[0]},value=${x[1]}`),
//    ()=>console.log('error'),
//    ()=>console.log('completed')
//);

//Rx.Observable.from('abcd').subscribe(
//     x=>console.log(x),
//    ()=>console.log('error'),
//    ()=>console.log('completed')
//);

//Rx.Observable.from([1,2,3,4],x=>x*x).subscribe(
//    x=>console.log(x),
//    ()=>console.log('error'),
//    ()=>console.log('completed')
//);


//zip
//var rangestream=Rx.Observable.range(0,5);
//var a=rangestream.skip(4);
//var b=rangestream.skip(2);
//
//Rx.Observable.zip(rangestream,a, b,function(x,y,z){
//    return x+y+z;
//}).subscribe(function(res){
//    console.log(res);
//});

//生成序列号，0，1，2，3，4
//Rx.Observable.from({length:5},(v,k)=>k).subscribe(
//    x=>console.log(x),
//    ()=>console.log('error'),
//    ()=>console.log('completed')
//);

//interval 创建一个按固定时间间隔发射整数序列的Observable
//timeInterval()记录在可观察序列的连续值之间的时间间隔
//Rx.Observable.interval(1000).timeInterval().take(3)
//    .subscribe(
//        x=>console.log(x),
//        ()=>console.log('error'),
//        ()=>console.log('completed')
//    );

//常量 just|return
//Rx.Observable.just('abc').subscribe(
//        x=>console.log(x),
//        ()=>console.log('error'),
//        ()=>console.log('completed')
//);

//Rx.Observable.return('hello').subscribe(
//    x=>console.log(x),
//    ()=>console.log('error'),
//    ()=>console.log('completed')
//);


//rang(start,count)100,101,102
//Rx.Observable.range(100,3).subscribe(
//    x=>console.log(x),
//    ()=>console.log('error'),
//    ()=>console.log('completed')
//);

//repeat(value,repeatCount) repeatCount=-1无限次
//Rx.Observable.repeat('abc',2).subscribe(
//    x=>console.log(x),
//    ()=>console.log('error'),
//    ()=>console.log('completed')
//);

//start(fn,Schedular.timeout,fn的参数）
//Rx.Observable.start(function(){
//    return this.name;
//},{id:1,name:'tom'}).subscribe(
//        x=>console.log(x),
//    ()=>console.log('error'),
//    ()=>console.log('completed')
//);

//timer(产生第一个值的时间，（周期产生后续值的时间，不指定则不重复）)
//var source = Rx.Observable.timer(200, 100)
//    .take(3);
//
//var subscription = source.subscribe(
//    function (x) {
//        console.log('Next: ' + x);
//    },
//    function (err) {
//        console.log('Error: ' + err);
//    },
//    function () {
//        console.log('Completed');
//    });

//pluck，通过合并索引生成一个新的Observable序列
//Rx.Observable.from([{name:'tome'},{name:'jerry'},{name:'lili'}])
//    .pluck('name')
//    .subscribe(
//    x=>console.log(x),
//    ()=>console.log('error'),
//    ()=>console.log('completed')
//    );


//超过500ms的搜索功能！
//var keyupstream = Rx.Observable.fromEvent($('#searchbaidu').get(0),'keyup')
//    .map(e=>e.target.value)
//    .filter(text=>text.length>2);
//
//var throttled= keyupstream.throttle(500);
//var distinct= throttled.distinctUntilChanged();
//
//var suggestions = distinct.flatMapLatest(function(term){
//    return $.getJSON('../simulates/comment.json',{search:term}).promise();
//});
//
//suggestions.subscribe(function(data){
//    console.log(data);
//});


//var windowstream = Rx.Observable.fromEvent(window, 'resize');
//var btnstream = Rx.Observable.fromEvent($('#btn_Rx').get(0), 'click');
//var btnstream1 = Rx.Observable.fromEvent($('#btn_Bacon').get(0), 'click');
//
//var requeststream = btnstream.map(()=>'../simulates/comment.json');
//var requeststream1 = btnstream1.map(()=>'../simulates/PersonData.json');
//var responsestream = requeststream.flatMap((url)=>Rx.Observable.fromPromise($.getJSON(url)));
//var responsestream1 = requeststream1.flatMap((url)=>Rx.Observable.fromPromise($.getJSON(url)));
//var suggeststream = responsestream.merge(responsestream1).merge(windowstream.map(()=>null));
//suggeststream.subscribe((suggest)=> {
//    if (suggest == null) {
//        console.log('window resize');
//    } else {


//var windowstream =  Rx.Observable.fromEvent(window,'resize');
//var btnstream = Rx.Observable.fromEvent($('#btn_Rx').get(0),'click');
//var btnstream1 = Rx.Observable.fromEvent($('#btn_Bacon').get(0),'click');
//
//var requeststream=btnstream.map(()=>'../simulates/comment.json');
//var requeststream1=btnstream1.map(()=>'../simulates/PersonData.json');
//var responsestream =requeststream.flatMap((url)=>Rx.Observable.fromPromise($.getJSON(url)));
//var responsestream1 =requeststream1.flatMap((url)=>Rx.Observable.fromPromise($.getJSON(url)));
//var suggeststream =responsestream.merge(responsestream1).merge(windowstream.map(()=>null));
//suggeststream.subscribe((suggest)=>{
//    if(suggest==null){
//        console.log('window resize');
//    }else{
//        console.log(JSON.stringify(suggest));
//    }
//});

//windowstream.subscribe(()=>{
//    console.log('resize');
//});

//var requestScream = Rx.Observable.just('../simulates/comment.json');

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
//var refreshClickStream = Rx.Observable.fromEvent($('#btn_Rx').get(0), 'click');
//var requestOnRefreshStream = refreshClickStream.map(function () {
//    return '../simulates/comment.json?t=' + Date.now();
//});

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
//var requestScream = refreshClickStream.startWith('startup click').map(function () {
//    return '../simulates/comment.json?t=' + Date.now();
//});

//requestScream.subscribe(function(obj){
//    $('#first').html('清空数据！');
//});

//var responseScream = requestScream.flatMap(function (url) {
//    return Rx.Observable.fromPromise($.getJSON(url));
//});

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

//var suggestion1Stream = responseScream.map(function (listUser) {
//    return listUser[Math.floor(Math.random() * listUser.length)];
//}).merge(
//    refreshClickStream.map(function () {
//        return null;
//})).startWith(null);
//
//suggestion1Stream.subscribe(function (suggestion) {
//    if (suggestion === null) {
//        $('#first').hide();
//    } else {
//        $('#first').show().html(suggestion.author);
//    }
//},function(oError){
//    console.log(oError.status);
//},function(){
//    console.log('complete!');
//});


//综合完成
//var refreshstream = Rx.Observable.fromEvent($('#btn_Rx').get(0),'click');
//var closestream = Rx.Observable.fromEvent($('#btn_Rx_close').get(0),'click');
//
//var requestStream = refreshstream.startWith('startup click')
//    .merge(closestream)
//    .map(function(){
//        return '../simulates/comment.json?t=' + Date.now();
//    });
//
//var responsestream = requestScream.flatMap(function(url){
//    return Rx.Observable.fromPromise($.getJSON(url));
//});
//
//var suggeststream =  closestream.startWith('startup click').combineLatest(responsestream,function(click,userList){
//    return userList[Math.floor(Math.random()*userList.length)];
//}).merge(refreshstream.map(function(){
//    //点击“刷新”按钮后，马上返回没有数据
//    return null;
//})).startWith(null);
//
//suggeststream.subscribe(function(suggest){
//    if(suggest==null){
//        $('#first').addClass('hidden');
//    }else {
//        $('#first').removeClass('hidden').text(suggest.author);
//    }
//});
