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

export default PromiseDemo;
