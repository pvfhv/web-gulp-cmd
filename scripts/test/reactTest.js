/**
 * Created by Anchao on 2015/11/10.
 */

//import './Timer';
//import './Todo';
//import './MarkdownEditor';
//import './CommentBox';
//import './CommentBoxHasMarkdown';
import './CommentBoxReal';


let oFirst = $('#first').get(0);

//let HelloMsg=React.createClass({
//   render:function(){
//       return <h1>Hello,{this.props.name}</h1>
//   }
//});
//
//ReactDOM.render(<HelloMsg name="Alex"/>,oFirst);

//class HelloMsg extends React.Component{
//    render(){
//        return <h1>hello,{this.props.name}</h1>;
//    }
//}
//
//ReactDOM.render(<HelloMsg name="alex" />,oFirst);

//ReactDOM.render(
//    <div>{
//        ["alex","lucy"].map(function(v){
//           return <h1>hello,{v}</h1>;
//        })
//    }</div>,
//    oFirst
//);

//var arr=["a","b"]
//ReactDOM.render(<div>{arr}</div>,oFirst);


//let NodeList=React.createClass({
//  render:function(){
//      return (
//          <ol>{
//              React.Children.map(this.props.children,function(child){
//                  return <li>{child}</li>;
//              })
//          }
//          </ol>);
//  }
//});
//
//ReactDOM.render(<NodeList>
//    <div>abc</div>
//    <div>efg</div>
//</NodeList>,oFirst);

//var HelloMsg=React.createClass({
//   propTypes:{
//       title:React.PropTypes.string.isRequired
//   },
//    render:function(){
//        return <h1>{this.props.title}</h1>
//    }
//});
//
//var data=123;
//ReactDOM.render(<HelloMsg title={data} />,oFirst);

//var HelloMsg=React.createClass({
//   getDefaultProps:function(){
//       return {
//           title:'hello'
//       }
//   },
//    render:function(){
//        return (
//            <div>{this.props.title}</div>
//        );
//    }
//});
//
//
//ReactDOM.render(<HelloMsg />,oFirst);

//类名首字母要大写
//var MyComponent = React.createClass({
//    handleClick:function(){
//        this.refs.myTextInput.focus();
//    },
//    handleMouseDown:function(e){
//        this.refs.myTextInput.value=e.clientX;
//    },
//    handleWheel:function(e){
//        this.refs.myTextInput.value=e.deltaY;
//    },
//    render:function(){
//        return (
//            <div>
//                <input type="text" ref="myTextInput" onMouseDown={this.handleMouseDown} onWheel={this.handleWheel} />
//                <input type="button" onClick={this.handleClick} value="获得焦点" />
//            </div>
//        );
//    }
//});
//
//ReactDOM.render(<MyComponent />,oFirst);


//state
//var MyComponent = React.createClass({
//    getInitialState: function () {
//        return {
//            liked: false,
//            count:0
//        };
//    },
//    handleClick: function () {
//        this.setState({liked: !this.state.liked,count:this.state.count+1});
//    },
//    render:function(){
//        var text=this.state.liked?"like":"have\'t liked";
//        return (
//            <div onClick={this.handleClick}>
//                you {text} this,click count {this.state.count};
//            </div>
//        );
//    }
//});
//
//ReactDOM.render(<MyComponent />,oFirst);

//var MyComponent=React.createClass({
//    getInitialState:function(){
//        return {
//            value:'hello'
//        }
//    },
//    handleChange:function(e){
//        this.setState({value:e.target.value});
//    },
//    render:function(){
//        //var sHtml=$('#ReactTemplate').html();
//        return (
//            //<div>{sHtml}</div>
//            <input type="text" value={this.state.value} onChange={this.handleChange} />
//        );
//    }
//});
//
//
//ReactDOM.render(<MyComponent />,oFirst);


//var Hello=React.createClass({
//    getInitialState:function(){
//        return {
//            opacity:1
//        };
//    },
//    componentDidMount:function(){
//        this.timer=setInterval(function(){
//            var opacity=this.state.opacity;
//            opacity-=0.05;
//
//            if(opacity<=0){
//                opacity=1;
//            }
//
//            this.setState({
//                opacity:opacity
//            });
//        }.bind(this),100);
//    },
//    render:function(){
//        return (
//            <div style={{opacity:this.state.opacity}}>Hello {this.props.name}</div>
//        );
//    }
//});
//
//ReactDOM.render(<Hello name="world" />,oFirst);

//ajax
//var Hello=React.createClass({
//    getInitialState:function(){
//        return {
//            name:'tom',
//            age:10
//        };
//    },
//    componentDidMount:function(){
//        $.get('../simulates/PersonData.json',function(oData){
//             if(this.isMounted()){
//                 this.setState({
//                     name:oData.name+'_'+Date.now(),
//                     age:oData.age
//                 })
//             }
//        }.bind(this),'json');
//    },
//    render:function(){
//        return (
//            <div>姓名：{this.state.name}，年龄：{this.state.age}</div>
//        );
//    }
//});
//
//ReactDOM.render(<Hello />,oFirst);


