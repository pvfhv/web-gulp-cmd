/**
 * Created by anchao on 2016/1/29.
 */
import ReactTestUtils from 'react-addons-test-utils';
import Timer from './Timer';

class SimulateButtons extends React.Component{
    handleClick(){
        alert('ok');
    }

    handleClick2(){
        //修改值
        //this.btn1.value = 'test'
        //ReactTestUtils.Simulate.change(this.btn1);
        //ReactTestUtils.Simulate.keyDown(this.btn1,{key:'Enter',keyCode:13,which:13});

        //渲染到已有DOM节点中
        //let ReactTimer = ReactTestUtils.renderIntoDocument(<Timer />);
        //console.log(ReactDOM.findDOMNode(ReactTimer));

        //mockComponent,需要jest
        //let obj = ReactTestUtils.mockComponent(jest.genMockFunction());
        //console.log(obj);

        //isElement
        //console.log(ReactTestUtils.isElement(<sss />));//true
        //console.log(ReactTestUtils.isElement(<SimulateButtons />));//true
        //console.log(ReactTestUtils.isElementOfType(<SimulateButtons />,SimulateButtons));//true
        console.log(ReactTestUtils.isElementOfType(<SimulateButtons />,Timer));//false



        //ReactTestUtils.Simulate.click(this.btn1);
    }

    handleKeyDown(e){
        alert(e.keyCode);
    }

    render(){
        return (
            <div>
                <input onKeyDown={this.handleKeyDown.bind(this)} onClick={this.handleClick.bind(this)} ref={ref=>this.btn1=ref} />
                <button onClick={this.handleClick2.bind(this)}>测试按钮</button>
            </div>
        );
    }
}

export default SimulateButtons;