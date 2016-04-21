/**
 * Created by Anchao on 2015/10/23.
 */

import './global';
import Main from './common/Main';
import LoginMain from './login/login';
import IndexMain from './index/Index';
import StudentManager from './studentManager/studentManager';
import PersonSys from './personSys/personSys';

window.config = {
    "pages": {
        "login": new LoginMain(),
        "index": new IndexMain(),
        "studentManager": new StudentManager(),
        "personsys": new PersonSys()
    }
};


//项目初始化
new Main().init();

