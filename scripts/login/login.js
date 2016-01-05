/**
 * Created by Anchao on 2015/10/23.
 */

var Parent = require('./Parent.jsx');
//require('jquery-ui/effect');
//require('jquery-ui/effect-shake');
//import 'jquery-ui/jquery-ui';


var LoginView = Backbone.View.extend({
    el: '#first',
    initialize: function () {
        this.render();
        $('#scroll').effect('shake').addClass( "big-blue", 1000, "easeOutBounce" );
    },
    render: function(){
        ReactDOM.render(<Parent />,this.el);
    }
});

class Login {
    init() {
        var view=new LoginView;


        //ReactDOM.render(<Parent />,document.querySelector('#first'));
        //
        ////历史记录
        //var aHistorys=window.history;
        //if(aHistorys.length>2){
        //    $('#container').hide();
        //}else{
        //    $('#first').hide();
        //}

        //html5 pushState
        //var obj={
        //    name:'tom',
        //    age:12
        //};
        //
        ////并不能执行index页面的js代码
        //window.history.pushState(obj,'首页','index.html');
        //$('#container').html(history.length);
        //$('#first').html(JSON.stringify(history.state));


        //var fnClick=null;
        //$('#first').click(function(){
        //    console.log('click');
        //}).on('mouseenter',function(){
        //    fnClick = fnClick===null? $._data($('#first')[0], "events")["click"][0].handler:fnClick;
        //    $(this).off('click');
        //}).dblclick(function(e){
        //    //console.log(fnClick);
        //    fnClick.call(this);
        //});
    }
}

export default Login;