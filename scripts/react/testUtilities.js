// /**
//  * Created by anchao on 2016/1/29.
//  */
// import ReactTestUtils from 'react-addons-test-utils';
// import Timer from './Timer';
//
// class TestComponent extends React.Component{
//     render(){
//         return (
//             <div className="hascls">
//                 <TestTarget />
//                 <span className="hascls">span</span>
//                 <div className="notcls">div</div>
//             </div>
//         );
//     }
// }
//
// class TestTarget extends React.Component{
//     render(){
//         return (
//             <a href="#">超链接</a>
//         );
//     }
// }
//
// class SimulateButtons extends React.Component{
//     handleClick(){
//         alert('ok');
//     }
//
//     handleClick2(){
//         //修改值
//         //this.btn1.value = 'test'
//         //ReactTestUtils.Simulate.change(this.btn1);
//         //ReactTestUtils.Simulate.keyDown(this.btn1,{key:'Enter',keyCode:13,which:13});
//
//         //渲染到已有DOM节点中
//         //let ReactTimer = ReactTestUtils.renderIntoDocument(<Timer />);
//         //console.log(ReactDOM.findDOMNode(ReactTimer));
//
//         //mockComponent,需要jest
//         //let obj = ReactTestUtils.mockComponent(jest.genMockFunction());
//         //console.log(obj);
//
//         //isElement
//         //console.log(ReactTestUtils.isElement(<sss />));//true
//         //console.log(ReactTestUtils.isElement(<SimulateButtons />));//true
//         //console.log(ReactTestUtils.isElementOfType(<SimulateButtons />,SimulateButtons));//true
//         //console.log(ReactTestUtils.isElementOfType(<SimulateButtons />,Timer));//false
//
//         //let subject = ReactTestUtils.renderIntoDocument(<div />);
//         //console.log(ReactTestUtils.isDOMComponent(subject));//true
//
//         //let subject = ReactTestUtils.renderIntoDocument(<Timer />);
//         //console.log(ReactTestUtils.isCompositeComponent(subject));//true
//         //console.log(ReactTestUtils.isCompositeComponentWithType(subject,Timer));//true
//         //console.log(ReactTestUtils.isCompositeComponentWithType(subject,SimulateButtons));//false
//
//         //let componentTree = ReactTestUtils.renderIntoDocument(<TestComponent />);
//         //let aDivs = ReactTestUtils.findAllInRenderedTree(componentTree,c=>c.tagName == 'DIV');
//         //console.log(aDivs);//[div,div]
//
//         let componentTree = ReactTestUtils.renderIntoDocument(<TestComponent />);
//         //let aCls = ReactTestUtils.scryRenderedDOMComponentsWithClass(componentTree,'hascls');
//         //console.log(aCls);//[div.hascls, span.hascls]
//         //let one = ReactTestUtils.findRenderedDOMComponentWithClass(componentTree,'notcls');
//         //console.log(one);//2个就抛异常
//         //let aTags = ReactTestUtils.scryRenderedDOMComponentsWithTag(componentTree,'div');
//         //console.log(aTags);//[div.hascls, div.notcls]
//         //let one = ReactTestUtils.findRenderedDOMComponentWithTag(componentTree,'span');
//         //console.log(one);//2个就抛异常
//         //let aTypes = ReactTestUtils.scryRenderedComponentsWithType(componentTree,TestTarget);
//         //console.log(aTypes);//[TestTarget, TestTarget]
//         //let one = ReactTestUtils.findRenderedComponentWithType(componentTree,TestTarget);
//         //console.log(one);//2个就抛异常
//
//
//         //试验阶段
//         let render = ReactTestUtils.createRenderer();
//         let spy = function(){};
//         render.render(<TestComponent onClick={spy} />);
//         let subject = render.getRenderOutput();
//
//         //console.log(subject.type); //div
//         //console.log(subject.props.className);//hascls
//         //console.log(React.Children.count(subject.props.children));//3
//         console.log(spy.call.length);//1
//
//
//
//         //ReactTestUtils.Simulate.click(this.btn1);
//     }
//
//     handleKeyDown(e){
//         alert(e.keyCode);
//     }
//
//     render(){
//         return (
//             <div>
//                 <input onKeyDown={this.handleKeyDown.bind(this)} onClick={this.handleClick.bind(this)} ref={ref=>this.btn1=ref} />
//                 <button onClick={this.handleClick2.bind(this)}>测试按钮</button>
//             </div>
//         );
//     }
// }
//
// export default SimulateButtons;