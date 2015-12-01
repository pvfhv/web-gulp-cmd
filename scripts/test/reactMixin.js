/**
 * Created by Anchao on 2015/12/1.
 */

var SetIntervalMixin ={
    componentWillMount:function(){
        this.intervals=[];
    },
    setInterval:function(){
        this.intervals.push(setInterval.apply(null,arguments));
    },
    componentWillUnMount:function(){
        this.intervals.map(clearInterval);
    }
};

var TickTock = React.createClass({
    mixins:[SetIntervalMixin],
    getInitialState:function(){
        return {
            seconds:0
        }
    },
    componentDidMount:function(){
        this.setInterval(this.ticks,1000);
    },
    ticks:function(){
        this.setState({
            seconds:this.state.seconds+1
        });
    },
    render:function(){
        return (
            <p>
                运行：{this.state.seconds}
            </p>
        );
    }
});

ReactDOM.render(<TickTock />,document.querySelector('#first'));


//测试数据
//function test(x){
//    console.log(x*x);
//}
//
//[1,2,3,4,5].map(test);