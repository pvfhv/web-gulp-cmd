/**
 * Created by anchao on 2015/12/28.
 */

var Student = Backbone.Model.extend({
    defaults: {
        id: 1,
        name: 'tom',
        age: 12
    }
});

var StuList = Backbone.Collection.extend({
    model: Student,
    initialize:function(){
        console.log('reset事件触发');
        this.on('reset',function(render){
            render.forEach(function(model){
                console.log(model.toJSON());
            });
        });
    },
    url: 'collection.html',
    young: function () {
        return this.filter(function (stu) {
            return stu.get('age') < 10;
        });
    }
});

var aData = [
    {"id": 2, "name": "jerry", "age": 23},
    {"id": 3, "name": "jam", "age": 5},
    {"id": 4, "name": "lucy", "age": 20},
    {"id": 5, "name": "lili", "age": 13},
    {"id": 6, "name": "tom", "age": 3}
];

var List=new StuList(aData);
//var List = new Backbone.Collection(aData, {
//    model: Student,
//    comparator: function (model1, model2) {
//        var age1 = model1.get('age');
//        var age2 = model2.get('age');
//
//        return age1 - age2 > 0 ? 1 : 0;
//    }
//});

List.fetch({
    reset:false,
    success:function(collection,resp,options){
        collection.forEach(function(model){
            console.log(model.toJSON());
        });
    }
});

//删除
//List.shift();
//List.remove(List.models[2]);
//List.pop();

//增加
List.unshift({"id": 7, "name": "tom", "age": 45});
List.add({"id": 8, "name": "dog", "age": 5}, {at: 2});
List.push({"id": 9, "name": "cat", "age": 25});

//查找
//var Stu1=List.get(8);
//console.log(Stu1.toJSON());
//console.log(List.at(List.length-1).toJSON());
//console.log(List.findWhere({
//    name:'tom'
//}).toJSON());
//console.log(List.where({
//    name:'tom'
//},true).toJSON());
//var aRes=List.where({
//    name:'tom'
//},false);
//console.log(aRes[1].id);

//排序
//List.comparator=function(model1,model2){
//    var age1=model1.get('age');
//    var age2=model2.get('age');
//
//    return age1-age2>0?1:0;
//};

//List.sort();
//
//List.push({"id": 10, "name": "ca", "age": 20});
//List.forEach(function (v, k) {
//    console.log(v.toJSON());
//});


//List.young().forEach(function(v,k){
//    console.log(v.toJSON());
//});

