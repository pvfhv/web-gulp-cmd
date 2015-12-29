/**
 * Created by Anchao on 2015/10/23.
 */

import './global.js';
import Main from './common/Main';
import LoginMain from './login/login';
import IndexMain from './index/Index';


window.config={
    "pages":{
        "login": new LoginMain(),
        "index":new IndexMain()
    }
};


//项目初始化
new Main().init();

