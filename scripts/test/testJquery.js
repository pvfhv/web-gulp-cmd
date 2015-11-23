/**
 * Created by Administrator on 2015/11/22.
 */

//$(window).on('resize',function(){
//    console.log('before:'+$(window).height());
//    setTimeout(function(){
//        console.log('after:'+$(window).height());
//    },30);
//});

var init=_.once(function(){
    console.log(Date.now());
});

$('#btn_Once').click(function(){
   init();
});