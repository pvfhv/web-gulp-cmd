/**
 * Created by anchao on 2015/12/29.
 */

import ReactTest from '../react/reactTest';
import CodeMirror from '../test/codemirror';
import EchartsTest from '../echarts/eChartsTest';

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
        this.events();
    }

    events(){
        //生成编辑器
        $('.code').click(function(){
            new CodeMirror().init();
        });

        //react1
        $('#btn_react1').click(function(){
            new ReactTest().init();
        });

        //react1
        $('#btn_hidediv').click(function(){
            $('#template_test2').toggle();
        });

        //echarts
        $('#btn_echarts').click(function(){
            new EchartsTest().init();
        });

        //#btn_reacttodo
        $('#btn_reacttodo').click(function(){
            new ReactTest().init();
        });
    }
}

export default Index;