/**
 * Created by anchao on 2016/3/15.
 */

var n = 0;
var Component = React.createClass({
    getInitialState: function () {
        return {
            isClick: !1
        }
    },
    componentWillMount:function(){
        //console.log(n++);
    },
    componentWillReceiveProps:function(nextProps){
        console.log(`this.props.n=${this.props.n},nextProps.n=${nextProps.n}`);
    },
    handleClick:function(){
        this.setState({
           isClick:!this.state.isClick%2
        });
    },
    rerender:function(){
        ReactDOM.render(<Component n={n++} />,document.getElementById('first'));
    },
    removeComponent:function(){
        ReactDOM.unmountComponentAtNode(document.getElementById('first'))&&console.log('移除成功');
    },
    render: function () {
        return (
            <div>
                <span onClick={this.handleClick}>isClick:{this.state.isClick?"yes":"no"}</span>
                <input type="button" value="移除组件" onClick={this.removeComponent}/>
                <input type="button" value="重新渲染" onClick={this.rerender}/>
            </div>
        );
    }
});

export default Component;