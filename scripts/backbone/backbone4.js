/**
 * Created by anchao on 2015/12/27.
 */

//var iNum = 0;
//var Person = Backbone.Model.extend({
//    defaults: {
//        age:12,
//        Class:'三年<二>班'
//    },
//    initialize: function () {
//        //iNum++;
//        //console.log(`创建了${iNum}个对象`);
//
//        //事件绑定在初始化时
//        this.on('change:age',function(model,value){
//            $('#first').html(`oldAge=${model.previous("age")},newAge=${model.get('age')}`);
//        });
//    }
//});
//
//var p1 = new Person;
//p1.set('age',34);
//var p2 = new Person;
//console.log(p1.get('Class'));
//console.log(p1.escape('Class'));

var Student=Backbone.Model.extend({
    defaults:{
        name:'tom',
        age:12
    },
    initialize:function(){
        this.on('invalid',function(model,error){
            console.log(error);
        });
    },
    validate:function(attrs){
        if(!_.isString(attrs.name)){
            return '姓名必须为字符串';
        }

        if(!_.isNumber(attrs.age)){
            return '年龄必须为数字';
        }
    }
});

var stu1=new Student;
//开启验证
//stu1.set({
//    name:11,
//    age:'r'
//},{validate:true});

//静默验证
stu1.set({
    name:11,
    age:'r'
});

//stu1.set({
//    name:11,
//    age:'r'
//},{
//    slient:true
//});

//stu1.unset('name');
//stu1.clear();
//console.log(stu1.has('title'));
console.log(stu1.toJSON());
console.log(stu1.previousAttributes());

//数据回滚
if(!_.isString(stu1.get('name'))||!_.isNumber(stu1.get('age'))){
    stu1.set({
        name:stu1.previous('name'),
        age:stu1.previous('age')
    });
}

console.log(stu1.toJSON());

//_.each(stu1.attributes,function(v,k){
//    console.log(`${k}=${v}`);
//});