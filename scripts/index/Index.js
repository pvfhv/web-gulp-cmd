/**
 * Created by anchao on 2015/12/29.
 */

import {Router, Route, IndexRoute, hashHistory,browserHistory,Redirect,IndexRedirect} from 'react-router';
import AppView from '../router/views/AppView';
import ReposView from '../router/views/ReposView';
import AboutView from '../router/views/AboutView';
import AboutComView from '../router/views/AboutComView';
import InboxView from '../router/views/InboxView';
import MessageView from '../router/views/MessageView';
import HomeView from '../router/views/HomeView';
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
        this.routerTest();

        // this.events();
    }

    routerTest() {
        // let routes =
        //     <Router history={hashHistory}>
        //         <Route path="/" component={AppView}/>
        //         <Route path="/repos" component={ReposView}/>
        //         <Route path="/about" component={AboutView}>
        //             <Route path="/com" component={AboutComView}/>
        //         </Route>
        //     </Router>;

        // let routes =
        //     <Router history={hashHistory}>
        //         <Route path="inbox" component={InboxView}>
        //             <IndexRoute component={HomeView}/>
        //             <Redirect from="message/:id" to="/message/:id"/>
        //             <Route path="message/:id" component={MessageView}/>
        //         </Route>
            {/*</Router>;*/}

        // let routes =
        //     <Router history={hashHistory}>
        //         <IndexRoute component={HomeView}/>
        //         <Route path="/" component={AppView}/>
        //         <Route path="/repos" component={ReposView}/>
        //         <Route path="about" component={AboutView}>
        //             <IndexRedirect to="/com"/>
        //         </Route>
        //         <Route path="com" component={ReposView}/>
        //     </Router>;


            // let routes =
            //     <Router history={browserHistory}>
            //         <Route path="/" component={AppView}/>
            //         <Route path="/repos" component={ReposView}/>
                {/*</Router>;*/}


        // ReactDOM.render(
        //     <Router history={hashHistory}>
        //         <Route path="/" component={AppView}/>
        //         <Route path="/repos" component={ReposView}/>
        //         <Route path="/about" component={AboutView}>
        //             <Route path="/com" component={AboutComView}/>
        //         </Route>
        //     </Router>,
        //     document.querySelector('#template_test2'));


        let routes =
            <Router history={hashHistory}>
                <IndexRoute component={HomeView}/>
                <Route path="/" component={AppView}/>
                <Route path="repos" component={ReposView}/>
                <Route path="about" component={AboutView}>
                    <Route
                        path="com"
                        onEnter={({params},replace)=>{replace(`/com`)}}
                    />
                </Route>
                <Route path="com" component={ReposView}/>
            </Router>;

        ReactDOM.render(
            <Router routes={routes} history={hashHistory}/>,
            document.querySelector('#template_test2')
        );
    }

    events() {
        //生成编辑器
        $('.code').click(function () {
            new CodeMirror().init();
        });

        //react1
        $('#btn_react1').click(function () {
            new ReactTest().init();
        });

        //react1
        $('#btn_hidediv').click(function () {
            $('#template_test2').toggle();
        });

        //echarts
        $('#btn_echarts').click(function () {
            new EchartsTest().init();
        });

        //echarts
        $('#btn_testPromise').click(function () {
            $.get('../simulates/testAjax.json', function () {
                console.log('ok');
            });
        });

        //#btn_reacttodo
        $('#btn_reacttodo').click(function () {
            new ReactTest().init();
        });
    }
}

export default Index;