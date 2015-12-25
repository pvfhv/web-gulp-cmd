/**
 * Created by anchao on 2015/12/25.
 */

var Test=Backbone.Model.extend({
    defaults:{
        content:''
    }
});

var TestList=Backbone.Collection.extend({
   model:Test
});

var data=new TestList({
    content:'hello world'
});

var TestView=Backbone.View.extend({
    el:$('body'),
    initialize:function(){
        $('#first').html(data.models[0].get('content'));
    }
});

var app=new TestView;