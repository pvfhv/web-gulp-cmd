/**
 * Created by Anchao on 2015/11/11.
 */

class PromiseDemo{
    then(fnSuccess=$.noop,fnFail=$.noop,fnProgress=$.noop,fnAlways=$.noop){
        return $.when(this.asyncEvent(fnAlways)).then(fnSuccess,fnFail,fnProgress);
    }

    getPromise(){
        return this.asyncEvent();
    }

    asyncEvent(fnAlways){
        var dfd = $.Deferred();

        setTimeout(function () {
            $.get('../simulates/PersonData.json', function (oData) {
                dfd.resolve(oData);
            }, 'json').fail(function (jqXHR, textStatus, errorThrown) {
                dfd.reject(textStatus);
            }).always(fnAlways);
        }, 5000);

        setTimeout(function working() {
            if (dfd.state() === "pending") {
                dfd.notify("working... ");
                setTimeout(working, 500);
            }
        }, 1);

        return dfd.promise();
    }
}

//推荐方式一：
//new PromiseDemo().getPromise().done(function (oData) {
//    alert(JSON.stringify(oData) + ", SUCCESS");
//}).fail(function (status) {
//    alert(status + ", FAIL");
//}).progress(function (status) {
//    $("#first").append(status);
//}).always(function(){
//    console.log('无论成功与否都被执行');
//});

//方式二
//new PromiseDemo().then(function (oData) {
//    alert(JSON.stringify(oData) + ", SUCCESS");
//},function (status) {
//    alert(status + ", FAIL");
//},function (status) {
//    $("#first").append(status);
//},function(){
//    console.log('无论成功与否都被执行');
//});

export default PromiseDemo;
