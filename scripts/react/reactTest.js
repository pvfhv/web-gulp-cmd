/**
 * Created by Anchao on 2015/11/10.
 */

//import './Timer';
//import './Todo';
//import './MarkdownEditor';
//import './CommentBox';
//import './CommentBoxHasMarkdown';
//import './CommentBoxReal';
//import './CommentBoxReal1';
//import './CommentBoxReal2';
//import './CommentBoxReal3';
//import './FilterableProduct2';
//import './reactFactory';
//import './reactLinked';
//import './reactVariable';
//import './reactspread';
//import './reactMixin';
//import './reactJiegou';


export default class ReactTest {
    init() {
        //this.first();
        //this.second();
        //this.third();
        //this.four();
        //this.five();
        //this.six();
        //this.seven();
        //this.eight();
        //this.nine();
        //this.ten();
        //this.eleven();
        this.twelve();
    }

    first() {
        let oFirst = $('#first').get(0);

        let HelloMsg = React.createClass({
            render: function () {
                return <h1>Hello,{this.props.name}</h1>
            }
        });

        ReactDOM.render(<HelloMsg name="Alex"/>, oFirst);
    }

    second() {
        let oFirst = $('#first').get(0);
        ReactDOM.render(<HelloMsg name="alex"/>, oFirst);
    }

    third() {
        let oFirst = $('#first').get(0);
        ReactDOM.render(
            <div>{
                ["alex","lucy"].map(function(v){
                return <h1>{`hello,${v}`}</h1>;
            })}</div>,oFirst);
    }

    four(){
        let arr=["a","b"];
        let oFirst = $('#first').get(0);
        ReactDOM.render(<div>{arr}</div>,oFirst);
    }

    five(){
        let oFirst = $('#first').get(0);
        let NodeList=React.createClass({
          render:function(){
              return (
                  <ol>{
                      React.Children.map(this.props.children,function(child){
                          return <li>{child}</li>;
                      })
                  }</ol>);
          }
        });

        ReactDOM.render(<NodeList>
            <div>abc</div>
            <div>efg</div>
        </NodeList>,oFirst);
    }

    six(){
        let oFirst = $('#first').get(0);
        let HelloMsg=React.createClass({
            propTypes: {
                title: React.PropTypes.string.isRequired
            },
            render: function () {
                return <h1>{this.props.title}</h1>
            }
        });

        let data='中国';
        ReactDOM.render(<HelloMsg title={data} />,oFirst);
    }

    seven(){
        let oFirst = $('#first').get(0);
        let HelloMsg = React.createClass({
            getDefaultProps: function () {
                return {
                    title: '默认title'
                }
            },
            render: function () {
                return (
                    <div>{this.props.title}</div>
                );
            }
        });

        ReactDOM.render(<HelloMsg />, oFirst);
    }

    eight(){
        let oFirst = $('#first').get(0);
        //类名首字母要大写
        let MyComponent = React.createClass({
            handleClick: function () {
                this.refs.myTextInput.focus();
            },
            handleMouseDown: function (e) {
                this.refs.myTextInput.value = e.clientX;
            },
            handleWheel: function (e) {
                this.refs.myTextInput.value = e.deltaY;
            },
            render: function () {
                return (
                    <div>
                        <input type="text" ref="myTextInput" onMouseDown={this.handleMouseDown}
                               onWheel={this.handleWheel}/>
                        <input type="button" onClick={this.handleClick} value="获得焦点"/>
                    </div>
                );
            }
        });

        ReactDOM.render(<MyComponent />, oFirst);
    }

    nine(){
        let oFirst = $('#first').get(0);
        //state
        var MyComponent = React.createClass({
            getInitialState: function () {
                return {
                    liked: false,
                    count: 0
                };
            },
            handleClick: function () {
                this.setState({liked: !this.state.liked, count: this.state.count + 1});
            },
            render: function () {
                var text = this.state.liked ? "like" : "have\'t liked";
                return (
                    <div onClick={this.handleClick}>
                        you {text} this,click count {this.state.count};
                    </div>
                );
            }
        });

        ReactDOM.render(<MyComponent />, oFirst);

    }

    ten(){
        let oFirst = $('#first').get(0);
        var MyComponent = React.createClass({
            getInitialState: function () {
                return {
                    value: 'hello'
                }
            },
            handleChange: function (e) {
                this.setState({value: e.target.value});
            },
            render: function () {
                //var sHtml=$('#ReactTemplate').html();
                return (
                    //<div>{sHtml}</div>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                );
            }
        });

        ReactDOM.render(<MyComponent />, oFirst);
    }

    eleven(){
        let oFirst = $('#first').get(0);
        let Hello = React.createClass({
            getInitialState: function () {
                return {
                    opacity: 1
                };
            },
            componentDidMount: function () {
                this.timer = setInterval(function () {
                    var opacity = this.state.opacity;
                    opacity -= 0.05;

                    if (opacity <= 0) {
                        opacity = 1;
                    }

                    this.setState({
                        opacity: opacity
                    });
                }.bind(this), 100);
            },
            render: function () {
                return (
                    <div style={{opacity:this.state.opacity}}>Hello {this.props.name}</div>
                );
            }
        });

        ReactDOM.render(<Hello name="world"/>, oFirst);
    }

    twelve(){
        let oFirst = $('#first').get(0);
        //ajax
        let Hello = React.createClass({
            getInitialState: function () {
                return {
                    name: 'tom',
                    age: 10
                };
            },
            componentDidMount: function () {
                $.getJSON('../simulates/PersonData.json', function (oData) {
                    if (this.isMounted()) {
                        this.setState({
                            name: oData.name + '_' + Date.now(),
                            age: oData.age
                        })
                    }
                }.bind(this));
            },
            render: function () {
                return (
                    <div>姓名：{this.state.name}，年龄：{this.state.age}</div>
                );
            }
        });

        ReactDOM.render(<Hello />, oFirst);
    }
}

class HelloMsg extends React.Component {
    render() {
        return <h1>hello,{this.props.name}</h1>;
    }
}