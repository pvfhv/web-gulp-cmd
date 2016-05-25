class Main{
  init(){
    this.gotoPage();
    this.event();
  }

  event(){
    this.globalEv();
  }

  globalEv(){
    $(document).ajaxStart(function () {
      console.log('start');
    }).ajaxSuccess(function (event, XMLHttpRequest, ajaxOptions) {
      var oRes = JSON.parse(XMLHttpRequest.responseText);

      //统一处理错误提示
      if(!oRes.success){
        dialog.alert(oRes.error.msg);
      }
      console.log('success');
    }).ajaxError(function(event, request, settings) {
      console.log("Error requesting page " + settings.url);
      dialog.alert('当前服务不可用！');
    }).ajaxStop(function () {
      console.log('stop');
    });
  }

  headerEv(){
  }

  clearCache(){
    window.localStorage.clear();
  }

  gotoPage(){
    var pathName=Tools.getPathname().replace('/','').replace(new RegExp(".html$"),'');
    var mName=pathName?pathName:'index';
    config.pages[mName].init();
  }
}

export default Main;