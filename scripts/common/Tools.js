/**
 * Created by Anchao on 2015/8/3.
 */

//公共工具类
class Tools {
    static routerM(opts, defaultexe) {
    var Workspace = Backbone.Router.extend(opts);
    new Workspace;
    Backbone.history.start();

    //默认执行
    if (this.getHash().indexOf('#') == -1) {
        this.setHash(defaultexe);
    } else {
    }
}

    static setHash(v) {
        location.hash = v;
    }

    static getHash() {
        return location.hash;
    }

    static getPathname() {
        return location.pathname;
    }

    static dialogError(sErrorMsg, $ele) {
        $('#alert-message').remove();

        if (!$ele) {
            $('.ui-dialog').find('.ui-dialog-content').append('<div id="alert-message" class="alert alert-danger">' + sErrorMsg + '</div>');
        } else {
            $('.ui-dialog').find('.ui-dialog-content').find($ele).after('<div id="alert-message" class="alert alert-danger">' + sErrorMsg + '</div>');
        }

        setTimeout(function () {
            $('#alert-message').fadeOut('slow', function () {
                $(this).remove();
            });
        }, 2500);
    }

    static exeCb(fnCb) {
        if(fnCb&&typeof fnCb==="function"){
            fnCb();
        }
    }

    static convertDate2FormatStr(oDate, format) {
        var o = {
            "M+": oDate.getMonth() + 1, //month
            "d+": oDate.getDate(), //day
            "h+": oDate.getHours(), //hour
            "m+": oDate.getMinutes(), //minute
            "s+": oDate.getSeconds(), //second
            "q+": Math.floor((oDate.getMonth() + 3) / 3), //quarter
            "S": oDate.getMilliseconds() //millisecond
        }

        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (oDate.getFullYear() + "").substr(4 - RegExp.$1.length));
        }

        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }

        return format;
    }

    static formatSdate(sDate) {
        //默认sDate格式为：2015-10-09 20:45:35
        if (typeof sDate == 'string') {
            sDate = sDate.trim();

            if (sDate.length > 0) {
                return sDate.replace(/:\d{2}$/, '');
            }
        }

        return sDate;
    }
}

export default Tools;