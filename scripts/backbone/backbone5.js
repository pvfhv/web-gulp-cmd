/**
 * Created by anchao on 2015/12/28.
 */

var Student=Backbone.Model.extend({
    defaults:{
        name:'tom',
        age:12
    }
});

var StuList=Backbone.Collection.extend({
    model:Student,
    young:function(){
        return this.filter(function(stu){
            return stu.get('age')<10;
        });
    }
});

var aData=[
    {"name":"jerry","age":23},
    {"name":"jam","age":5},
    {"name":"lucy","age":20},
    {"name":"lili","age":13},
    {"name":"man","age":3}
];

var List=new StuList(aData);

//删除
//List.shift();
//List.remove(List.models[2]);
//List.pop();

//增加
List.unshift({"name":"tom","age":45});
List.add({"name":"dog","age":5},{at:2});
List.push({"name":"cat","age":25});

//var List=new Backbone.Collection(aData,{
//    model:Student
//});

//List.young().forEach(function(v,k){
//    console.log(v.toJSON());
//});

List.forEach(function(v,k){
    console.log(v.toJSON());
});