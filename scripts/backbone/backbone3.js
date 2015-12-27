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

//man.on({
//    'change:score': function (model, value) {
//        var oldAttrs = model.previousAttributes();
//        $('#first').append(`oldScore=${oldAttrs.score},newScore=${value}`);
//    },
//    'change:age': function (model, value) {
//        var oldAge = model.previous('age');
//        $('#first').append(`oldAge=${oldAge},newAge=${value}`);
//    },
//    'change:handle':function(v){
//        $('#first').html('手工触发'+v);
//    }
//});

//man.on('change:age change:score',function(model,value){
//    $('#first').html(`oldAge=${model.previous('age')},newAge=${model.get('age')},oldScore=${model.previous('score')},newScore=${model.get('score')}`);
//});

//_.delay(function () {
//    man.trigger('change:handle',100);
//    man.set({
//        age: 34,
//        score: 100
//    });
//}, 3000);


var obj=_.extend({},Backbone.Events);
var iNum=0;
//obj.listenTo(man,'change:age',function(model,value){
//    iNum++;
//    $('#first').html(`oldAge=${model.previous('age')},newAge=${model.get('age')},iNum=${iNum}`);
//});

//obj.listenToOnce(man,'change:age',function(model,value){
//    iNum++;
//    $('#first').html(`oldAge=${model.previous('age')},newAge=${model.get('age')},iNum=${iNum}`);
//});

obj.listenTo(man,'change:age',function(model,value){
    $('#first').append(`oldAge=${model.previous('age')},newAge=${model.get('age')}`);
});

obj.listenTo(man,'change:name',function(model,value){
    $('#first').append(`oldName=${model.previous('name')},newName=${model.get('name')}`);
});

man.on('all',function(v){
    console.log('all事件触发'+v);
})

//obj.stopListening(man,'change:age');
//obj.stopListening(man,'change:age change:name');
//obj.stopListening();

//_.delay(function(){
//    man.set('name','alex');
//    man.set('age',90);
//    man.trigger('all');
//},2000);


var InfoView=Backbone.View.extend({
    el:$('#btn_backbone'),
    events:{
        'click #btn_show':function(){
            $('#personInfo').show('slow');
        },
        'click #btn_hide':function(){
            $('#personInfo').hide('slow');
        }
    }
});

var view=new InfoView;