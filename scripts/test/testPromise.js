/**
 * Created by Anchao on 2015/11/22.
 */

//var reqData1 = url => new Promise((resolve, reject) => setTimeout(() => resolve(42), 1000));
//var reqData2 = url => new Promise((resolve, reject) => setTimeout(() => resolve(52), 500));
//var reqData3 = (url, params) => new Promise((resolve, reject) => setTimeout(() => resolve(62), 800));
//var data = {};
//Promise.all([reqData1(42), reqData2(52)]).then((data1, data2) => {
//    data.data1 = data1;
//    data.data2 = data2;
//    return reqData3(62, {id: data2.id});
//}).then(data3 => {
//    data.data3 = data3;
//    alert(JSON.stringify(data));
//    //initComponent(data);
//});