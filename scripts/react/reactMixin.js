/**
 * Created by Anchao on 2015/12/1.
 */

var SetIntervalMixin ={
    componentWillMount:function(){
        this.intervals=[];
    },
    setInterval:function(){
        //setInterval的返回值压入数组
        this.intervals.push(setInterval.apply(null,arguments));
    },
    componentWillUnMount:function(){
        //对数组中的元素执行clearInterval
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
        //这里必须使用this.setInterval，执行mixins里的定义的setInterval
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

export default TickTock;


//测试数据
//function test(x){
//    console.log(x*x);
//}
//
//[1,2,3,4,5].map(test);