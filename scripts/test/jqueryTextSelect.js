/**
 * Created by Anchao on 2015/12/2.
 */


var txt="abcdefgabcdefgabcd&nbsp;&nbsp;efgabcdefgabcdefgabcdefg";
var filterTxt="abc";
var reg=new RegExp(filterTxt,'gi');

console.log(txt.replace(filterTxt,'<span>'+filterTxt+'</span>'));