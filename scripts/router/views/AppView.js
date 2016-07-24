/**
 * Created by anchao on 2016/7/24.
 */
import {Link,IndexLink,browserHistory} from 'react-router';
const AppView = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    handleSubmit:function () {
        let username = this.refs.username.value;
        let repo = this.refs.repo.value;
        let path = `/${username}/${repo}`;
        // browserHistory.push(path);
        this.context.router.push(path);
    },
    render:function () {
        return (
            <div>
                <div>导航</div>
                <div>
                    <ul role="nav">
                        <li><Link to="/" activeStyle={{color:'red'}} activeClassName="active">App普通Link</Link></li>
                        <li><Link to="/" activeStyle={{color:'red'}} activeClassName="active" onlyActiveOnIndex={true}>App普通Link增加onlyActiveOnIndex属性</Link></li>
                        <li><IndexLink to="/" activeStyle={{color:'red'}} activeClassName="active">App合理的IndexLink</IndexLink></li>
                        <li><Link to="/repos" activeStyle={{color:'red'}} activeClassName="active">repos</Link></li>
                        <li><Link to="/about" activeStyle={{color:'red'}} activeClassName="active">about</Link></li>
                    </ul>
                </div>
                <div>表单</div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" ref="username" placeholder="userName"/>
                        <input type="text" ref="repo" placeholder="repo"/>
                        <button type="submit">Go</button>
                    </form>
                </div>
            </div>
        );
    }
});

export default AppView;