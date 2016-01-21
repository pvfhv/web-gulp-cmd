/**
 * Created by anchao on 2015/12/29.
 */

import ReactTest from '../react/reactTest';
import CodeMirror from '../test/codemirror';
//import './test/RxTest';
//import './test/SideBarPanel';
//import './test/baconTest';
//import './test/testJquery';
//import './test/testPromise';
//import './test/immutable1';
//import './test/jqueryTextSelect';
//import './test/plotlytest';
//import './backbone/backbone';

class Index {
    init() {
        //let oReact = new ReactTest();
        //oReact.init();

        new CodeMirror().init();
    }
}

export default Index;