/**
 * Created by Anchao on 2015/11/30.
 */
// The ES6+ way
//class Video extends React.Component {
//    static defaultProps = {
//        autoPlay: false,
//        maxLoops: 10,
//    }
//    static propTypes = {
//        autoPlay: React.PropTypes.bool.isRequired,
//        maxLoops: React.PropTypes.number.isRequired,
//        posterFrameSrc: React.PropTypes.string.isRequired,
//        videoSrc: React.PropTypes.string.isRequired,
//    }
//    state = {
//        loopsRemaining: this.props.maxLoops,
//    }
//}

var CheckLink = React.createClass({
    getInitialState:function(){

    },
    getDefaultProps:function(){},
    render:function(){
        return (
            <a {...this.props}>{this.props.children}</a>
        );
    }
});
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

class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handlerClick =()=>{
            console.log(this.refs.div1.id);
        }
    }

    static propTypes = {
        children: React.PropTypes.element.isRequired
    }

    static defaultProps = {
        children: <div>abc</div>
    }

    render() {
        return (
            <div id="div1" ref="div1" onClick={this.handlerClick}>{this.props.children}</div>
        );
    }
}

ReactDOM.render(<MyComponent><span>e</span></MyComponent>, document.querySelector('#first'));
