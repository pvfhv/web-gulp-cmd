/**
 * Created by Anchao on 2015/11/30.
 */
// The ES6+ way
//class Video extends React.Component {
//    constructor(props){
//        super(props);
//        this.state={
//            loopsRemaining: this.props.maxLoops
//        }
//    }
//}
//
//Video.defaultProps = {
//    autoPlay: false,
//    maxLoops: 10,
//}
//
//Video.propTypes = {
//    autoPlay: React.PropTypes.bool.isRequired,
//    maxLoops: React.PropTypes.number.isRequired,
//    posterFrameSrc: React.PropTypes.string.isRequired,
//    videoSrc: React.PropTypes.string.isRequired,
//}
//
//var CheckLink = React.createClass({
//    getInitialState:function(){
//        return {
//            n:0
//        }
//    },
//    getDefaultProps:function(){},
//    render:function(){
//        return (
//            <a {...this.props}>{this.props.children}</a>
//        );
//    }
//});
//
//ReactDOM.render(<CheckLink href="http://www.sohu.com">checked it!</CheckLink>,document.querySelector('#first'));


//单个子级[children不能只是文本节点]
//var MyComponent = React.createClass({
//    propTypes: {
//        children: React.PropTypes.element.isRequired
//    },
//    render:function(){
//        return (
//            <div>
//                {this.props.children}
//            </div>
//        );
//    }
//});

//class MyComponent extends React.Component {
//    constructor(props) {
//        super(props);
//    }
//
//    handlerClick(){
//        console.log(this.refs.div1.id);
//    }
//
//    render() {
//        return (
//            <div id="div1" ref="div1" onClick={this.handlerClick.bind(this)}>{this.props.children}</div>
//        );
//    }
//}
//
//MyComponent.propTypes ={
//    children: React.PropTypes.element.isRequired
//}
//
//MyComponent.defaultProps = {
//    children: <div>abc</div>
//}
//
//ReactDOM.render(<MyComponent><span>这里必须有子元素</span></MyComponent>, document.querySelector('#first'));
