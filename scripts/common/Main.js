class Main{
  init(){
    this.gotoPage();
    this.event();
  }

  event(){
    this.globalEv();
  }

  globalEv(){

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