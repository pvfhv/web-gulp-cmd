/**
 * Created by anchao on 2016/1/13.
 */
$('#template_test').html($('#svgTemplate2').html());
//$('#template_test').draggable({
//    start: function (event, ui) {
//        var oRealPos = {left:event.pageX,top:event.pageY};
//        $(this).data('startPos', {left:parseInt(oRealPos.left - $(this).offset().left),top:parseInt(oRealPos.top - $(this).offset().top)});
//    },
//    drag: function (event, ui) {
//        $(this).removeAttr('style');
//        var oStartPos=$(this).data('startPos');
//        var startX = oStartPos.left;
//        var startY = oStartPos.top;
//        var x = parseInt(event.pageX - $(this).offset().left,10);
//        var y = parseInt(event.pageY - $(this).offset().top,10);
//        var x1 = startX;
//        var y1 = startY+100;
//        var x2 = x;
//        var y2 = y - 100;
//
//        var d = `M${startX} ${startY} C${x1} ${y1}, ${x2} ${y2}, ${x} ${y}`;
//        $('.dyn').attr('d',d);
//    }
//});

//$('#bazi').draggable({
//    start:function(event,ui){
//        $(this).data('startPos',ui.position);
//        var oldAttr = $(this).attr('transform');
//        if(/\w+?\((\d+?),(\d+?)\)/.test(oldAttr)){
//            $(this).data('translate',{left:parseInt(RegExp.$1,10),top:parseInt(RegExp.$2,10)});
//        }
//    },
//    drag:function(event,ui){
//        $(this).removeAttr('style');
//        var oStartPos=$(this).data('startPos');
//        var oTranslate=$(this).data('translate');
//        var oCurPos=ui.position;
//        var left = oCurPos.left - oStartPos.left + oTranslate.left;
//        var top = oCurPos.top - oStartPos.top + oTranslate.top;
//
//        var oldAttr = $(this).attr('transform');
//        console.log(`left=${left},top=${top}`);
//        $(this).attr('transform','translate('+left+','+top+')');
//        //if(/\w+?\((\d+?),(\d+?)\)/.test(oldAttr)){
//        //    var l = parseInt(RegExp.$1,10);
//        //    var t = parseInt(RegExp.$2,10);
//        //    if(l>0&&t>0){
//        //        $(this).attr('transform','translate('+l+left+','+t+top+')');
//        //    }else {
//        //
//        //    }
//        //}
//    },
//    stop:function(){
//        $(this).removeAttr('style');
//    }
//});