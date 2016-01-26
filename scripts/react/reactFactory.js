/**
 * Created by Administrator on 2015/11/29.
 */

//var root =<div>abc</div>;
//ReactDOM.render(root,document.querySelector('#first'));

//要渲染 React 组件，只需创建一个大写字母开头的本地变量
//var Hello=React.createClass({
//    render:function(){
//        return (
//            <nav className="hello">Jerry<label htmlFor="bac">aa</label></nav>
//        );
//    }
//});
//ReactDOM.render(<Hello />,document.querySelector('#first'));

//var props={
//    x:100,
//    y:200,
//    z:300
//},
//    Component=React.createClass({
//        render:function(){
//            return (<div width="200" data-hello="abc">{'First \u00b7 Second'}<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"></svg></div>);
//        }
//    });

//延展属性
//var com=<Component {...props} x="500" />;
//console.log(com.props.x);//500
////ReactDOM.render(<Component />,document.querySelector('#first'));
//
//function test({...props}){
//    console.log(typeof props);
//    console.log(props.x);
//}
//
//test(props);//100