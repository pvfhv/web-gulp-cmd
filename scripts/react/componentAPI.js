/**
 * Created by anchao on 2016/2/22.
 */

class ComponentAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: props.n
        }
    }

    handleClick() {
        //this.setState({
        //    num:this.state.num+1
        //},function(){
        //    console.log('修改成功');
        //});

        this.setState(function (preState, curProps) {
            console.log(curProps);
            return {num: preState.num + 1};
        })
    }

    render() {
        return (
            <div>
                <span ref={v=>this.span=v}>{this.state.num}</span>
                <input type="button" value="修改state" onClick={this.handleClick.bind(this)}/>
            </div>
        );
    }
}


let ComAPI = React.createClass({
    getInitialState: function () {
        return {
            n: this.props.n
        }
    },
    getDefaultProps:function(){
      return {
          n: 200
      }
    },
    propTypes:{
      n:React.PropTypes.number
    },
    statics:{
        getProps:function(props){
            console.log(props);
        }
    },
    displayName:'ComAPI',
    handleClick: function () {
        //console.log(this.isMounted());//true
        //console.log(ReactDOM.findDOMNode(this));
        console.log(this.displayName);

        this.forceUpdate(()=> {
            this.setState({
                n: this.state.n + 1
            })
        });

        //this.replaceState({
        //    n:this.state.n+1
        //})
    },
    render: function () {
        return (
            <div>
                <span>{this.state.n}</span>
                <input type="button" value="修改state" onClick={this.handleClick}/>
            </div>
        );
    }
});

export default ComAPI;