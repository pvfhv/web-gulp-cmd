/**
 * Created by anchao on 2015/12/25.
 */
//var person={
//    name:'ac',
//    age:13
//};
//
//var obj=_(person);
//console.log(obj.value().name);

//_.each([1,2,3],function(n,index){
//    console.log(n+'_'+index);
//});


//var aStus=[{name:'tom',age:12},{name:'tom1',age:15},{name:'tom2',age:125},{name:'tom5',age:121},{name:'tom3',age:132}];
//
//var aS=_.sortBy(aStus,function(n){
//    return n.age;
//});
//
//console.log(aS);//升序


//var f1=function(v){
//    console.log(v);
//};
//
//_.delay(f1,1000,'abc');


//_.defer(function(v){
//    console.log(v);
//},'abc');

//$('#first').click(_.throttle(function(){
//    console.log(Date.now());
//},2000));


//$('#first').click(_.debounce(function(){
//    console.log(Date.now());
//},2000));


//var input=function(n){
//    return `${n}你好`;
//};
//
//var f1=_.wrap(input,function(input){
//   return '包装后'+input('AC')+',end';
//});
//
//var str=f1();
//console.log(str);


var obj={"id":"0821b035d465476eb8700aeddbed52d0","name":"aa","meta":{},"version":1,"createTime":"2015-12-25 13:26:40","updateTime":"2015-12-25 13:26:40","saveTime":"1970-01-01 08:00:00","active":false};

//$('#first').html(_.template('<%-obj%>')(JSON.stringify(obj)));
$('#first').html(_.template('<%-obj%>',{variable:'obj'})(JSON.stringify(obj)));