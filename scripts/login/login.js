/**
 * Created by Anchao on 2015/10/23.
 */

var Parent = require('./Parent.jsx');
var $ = require('jquery');

//let a='动态测试文';
//$('#first').append(a);

//ReactDOM.render(<Parent />,document.getElementById('first'));

var fnClick=null;
$('#first').click(function(){
    console.log('click');
}).on('mouseenter',function(){
    fnClick = fnClick===null? $._data($('#first')[0], "events")["click"][0].handler:fnClick;
    $(this).off('click');
}).dblclick(function(e){
    //console.log(fnClick);
    fnClick.call(this);
});

