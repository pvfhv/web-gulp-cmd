/**
 * Created by anchao on 2016/1/26.
 */


class NamespaceTestMain extends React.Component{
    render(){
        return (
            <div>{this.props.children}</div>
        );
    }
}

//NamespaceTestMain.Title = React.createClass({
//    render:function(){
//        return (
//            <h1>标题</h1>
//        );
//    }
//})


//NamespaceTestMain.Body = React.createClass({
//    render:function(){
//        return (
//            <div>
//                {this.props.searchType}<input type="text"/>
//                <button>确定</button>
//            </div>
//        );
//    }
//})


NamespaceTestMain.Title = class Title extends React.Component{
    render(){
        return (
            <h1>标题</h1>
        );
    }
}

NamespaceTestMain.Body = class Body extends React.Component{
    render(){
        return (
            <div>
                {this.props.searchType}<input type="text"/>
                <button disabled is="肯肯" aria-hidden="true" data-hidden="false">确定</button>
            </div>
        );
    }
}

class App extends React.Component{
    render(){
        return (
            <NamespaceTestMain>
                <NamespaceTestMain.Title></NamespaceTestMain.Title>
                <NamespaceTestMain.Body searchType="内容"></NamespaceTestMain.Body>
            </NamespaceTestMain>
        );
    }
}

export default App;