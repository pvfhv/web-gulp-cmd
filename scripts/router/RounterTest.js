/**
 * Created by anchao on 2016/7/20.
 */
import {Router, Route, hashHistory} from 'react-router';
import AppView from './views/AppView';
import ReposView from './views/ReposView';
import AboutView from './views/AboutView';

export default class RounterTest {
    init() {
        ReactDOM.render(
            <Router history={hashHistory}>
                <Route path='/' component={AppView}/>
                <Route path='/repos' component={ReposView}/>
                <Route path='/about' component={AboutView}/>
            </Router>,
            document.querySelector('#container'));
    }
}