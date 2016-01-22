/**
 * Created by Administrator on 2015/11/12.
 */

let oFirst = $('#first').get(0);

//计时器
//class Hello extends React.Component{
//    constructor(props){
//        super(props);
//        this.state={'nCount':0};
//    }
//
//    tick(){
//        this.setState({nCount:this.state.nCount+1});
//    }
//
//    componentDidMount(){
//        this.timer=setInterval(this.tick.bind(this),1000);
//    }
//
//    componentWillUnMount(){
//        clearInterval(this.timer);
//    }
//
//    render(){
//        return (
//            <div>经过{this.state.nCount}秒！</div>
//        );
//    }
//}

var Timer = React.createClass({
    getInitialState:function(){
        return {
            nCount:0
        }
    },

    tick:function(){
        this.setState({nCount:this.state.nCount+1});
    },

    componentDidMount:function(){
        this.timer=setInterval(this.tick,1000);
    },

    componentWillUnMount:function(){
        clearInterval(this.timer);
    },

    render:function(){
        return (
            <div>经过{this.state.nCount}秒！</div>
        );
    }
});

export default Timer;