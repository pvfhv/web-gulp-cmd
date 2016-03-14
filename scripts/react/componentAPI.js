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
    displayName:'abc',
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
    componentWillMount:function(){
        var that = this;
        $.getJSON('../../simulates/PersonData.json')
            .done(function(oData){
                console.log('componentWillMount:'+JSON.stringify(oData));
                that.setState({
                    n: 150
                })
            });
    },
    componentDidMount:function(){
        var that = this;
        $.getJSON('../../simulates/response.json')
            .done(function(oData){
                console.log('componentDidMount:'+JSON.stringify(oData));
                _.delay(function(){
                    that.setState({
                        n: 250
                    })
                },2000);
            });
    },
    componentWillReceiveProps:function(nextprops){
        console.log(this.props.n+'---'+JSON.stringify(nextprops));
        //this.setState({
        //    n:nextprops.n
        //});

        console.log(this.state.n);
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