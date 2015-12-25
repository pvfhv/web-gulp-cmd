/**
 * Created by anchao on 2015/12/26.
 */
//var Person=Backbone.Model.extend({
//    defaults:{
//        name:'tom',
//        age:12
//    }
//});
//
//var man=new Person;
//man.on('change:name',function(model,value){
//   $('#first').html(`oldValue=${model.previous('name')},newValue=${value}`);
//});
//
//_.delay(function(){
//    man.set('name','ac');
//},3000);


var Person = Backbone.Model.extend({
    defaults: {
        name: 'tom',
        age: 12,
        score: 60
    }
});

var man = new Person;
//man.on('change:age',function(model,value){
//    var oldAge=model.previous('age');
//    $('#first').append(`oldAge=${oldAge},newAge=${value}`);
//});
//
//man.on('change:score',function(model,value){
//    var oldAttrs=model.previousAttributes();
//    $('#first').append(`oldScore=${oldAttrs.score},newScore=${value}`);
//});

man.on({
    'change:score': function (model, value) {
        var oldAttrs = model.previousAttributes();
        $('#first').append(`oldScore=${oldAttrs.score},newScore=${value}`);
    },
    'change:age': function (model, value) {
        var oldAge = model.previous('age');
        $('#first').append(`oldAge=${oldAge},newAge=${value}`);
    },
    'change:handle':function(v){
        $('#first').html('手工触发'+v);
    }
});

//man.on('change:age change:score',function(model,value){
//    $('#first').html(`oldAge=${model.previous('age')},newAge=${model.get('age')},oldScore=${model.previous('score')},newScore=${model.get('score')}`);
//});

_.delay(function () {
    man.trigger('change:handle',100);
    man.set({
        age: 34,
        score: 100
    });
}, 3000);