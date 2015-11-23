/**
 * Created by Anchao on 2015/11/23.
 */


$('#container').data('conObj',new Rx.Subject());





$('#container').data('conObj').subscribeOnNext(
    y=>{
        setTimeout(function(){
            console.log('world:'+y);
        },2000);
    }
);

$('#container').data('conObj').subscribeOnNext(
    y=>console.log('zip:'+y)
);

var source =$('#container').data('conObj').subscribe(
    x=>console.log('hello:'+x)
);

$('#btn_Rx').on('click',function(){
    //$('#container').remove();
    if($('#container').data('conObj')){
        $('#container').data('conObj').onNext('abc');
    }
});