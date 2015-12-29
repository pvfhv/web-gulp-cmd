/**
 * Created by anchao on 2015/12/29.
 */

//var TestView=Backbone.View.extend({
//    id:'show',
//    className:'cls6',
//    tagName:'span',
//    attributes:{
//        title:'div1',
//        name:'alex'
//    },
//    render:function(content){
//        $(this.el).html(content);
//        $(document.body).append(this.el);
//    }
//});

//var TestView=Backbone.View.extend({
//    el:'#first',
//    render:function(content){
//        $(this.el).html(content);
//    }
//});
//
//
//var test=new TestView;
//test.render('hello');


//Model与View直接渲染
//var Student = Backbone.Model.extend({
//    defaults: {
//        id: 1,
//        name: 'tom',
//        age: 12
//    }
//});
//
//var stu1 = new Student({
//    id: 1,
//    name: 'jay',
//    age: 13
//});
//
//var StuView = Backbone.View.extend({
//    el: '#first',
//    render: function () {
//        $(this.el).html(JSON.stringify(this.model));
//    }
//});
//
//
//var sView1=new StuView({
//    model:stu1
//});
//
//sView1.render();


//Collection & View
//var aList = [
//    {
//        id: 1,
//        name: 'tom',
//        age: 1
//    },
//    {
//        id: 2,
//        name: 'jay',
//        age: 11
//    },
//    {
//        id: 3,
//        name: 'lucy',
//        age: 21
//    }
//];
//var stulist=new Backbone.Collection(aList);
//
//var StuView=Backbone.View.extend({
//    el:'#first',
//    render:function(){
//        var that=this;
//        this.collection.models.forEach(function(model){
//            $(that.el).append(JSON.stringify(model)+'<br />');
//        })
//    }
//});
//
//var oStuView=new StuView({
//    collection:stulist
//});
//oStuView.render();

//var View=Backbone.View.extend({
//    el:'#first',
//    initialize:function(){
//        this.template=_.template($('#scoreTemplate').html());
//    },
//    render:function(){
//        this.$el.html(this.template({score:70}));
//    }
//});
//
//var v=new View;
//v.render();

//修改模板输出属性
//_.templateSettings={
//    interpolate: /\{\{(.+?)\}\}/g
//};
//
//var Student=Backbone.Model.extend({
//    defaults:{
//        name:'',
//        age:''
//    }
//});
//
//var stu1=new Student({
//    name:'tom',
//    age:12
//});
//
//var StuView=Backbone.View.extend({
//    el:'#first',
//    initialize:function(){
//        //this.template=_.template($('#personTemplate').html());
//        this.template=_.template($('#personTemplate2').html());
//    },
//    render:function(){
//        this.$el.html(this.template(this.model.toJSON()));
//    }
//});
//
//var sView1=new StuView({
//    model:stu1
//});
//
//sView1.render();


//var TempView = Backbone.View.extend({
//    el: 'body',
//    initialize: function () {
//        this.render();
//    },
//    render: function () {
//        this.$el.append(`<button id="btnDate">得到当前毫秒数</button>`);
//    },
//    events:{
//        'click #btnDate':function(){
//            alert(Date.now());
//        }
//    }
//});
//
//var v=new TempView;


//var TempView = Backbone.View.extend({
//    el: 'body',
//    initialize: function () {
//        this.template=_.template($('#divTemplate').html());
//        this.render();
//    },
//    render: function(){
//        this.$el.html(this.template({mess:'dyn data'}));
//    },
//    events: {
//        'click .mess':function(){
//            $('.mess').hide();
//        },
//        'click .btn100':function(){
//            $('.mess').show();
//        }
//    }
//});
//
//var t=new TempView;

//var TempView = Backbone.View.extend({
//    el: '#first',
//    initialize: function () {
//        this.template = _.template($('#bindTemplate').html());
//        this.render();
//    },
//    render: function () {
//        this.$el.html(this.template());
//    },
//    events: {
//        'click .message': function () {
//            alert($('.message').text());
//        },
//        'click .btn-unbind': function () {
//            this.undelegateEvents();
//        }
//    },
//    rebind: function () {
//        this.delegateEvents(this.events);
//    }
//});
//
//window.stuv = new TempView;


var Student = Backbone.Model.extend({
    defaults: {
        name: '',
        age: 1
    }
});

var StudentColl = Backbone.Collection.extend({
    initialize: function (model, options) {
        this.on('add', options.view.showModel);
    }
});

var StudentView = Backbone.View.extend({
    el: '#first',
    template: _.template($('#appTemplate').html()),
    initialize: function(){
        this.stuList=new StudentColl(null,{view:this});
        this.render();
    },
    render:function(){
        this.$el.html(this.template());
    },
    events: {
        'click .btnsubmit':function(){
            var stu1=new Student({
                name:$('.username').val(),
                age:$('.age').val()
            });

            this.stuList.add(stu1);
        }
    },
    showModel:function(model){
        model=model.toJSON();
        $('.personlist').append(`<li>${model.name}</li><li>${model.age}</li>`);
    }
});

var oStuView=new StudentView;