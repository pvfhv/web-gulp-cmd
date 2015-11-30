/**
 * Created by Anchao on 2015/11/24.
 */

import Immutable from 'immutable';

//不可变
//var arr1=Immutable.fromJS([1,2,3]);
//var arr2=arr1.push(4);
//var arr3=arr1;
//
//console.log(arr1.toJS());


var oMap = Immutable.fromJS({a: {b: [10, 20, 30]}, c: 40}, function (key, value) {
    var isIndexed = Immutable.Iterable.isIndexed(value);
    return isIndexed ? value.toList() : value.toOrderedMap();
});

//console.log(oMap.toMap());