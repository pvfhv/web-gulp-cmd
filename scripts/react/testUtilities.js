/**
 * Created by anchao on 2016/1/29.
 */
import ReactTestUtils from 'react-addons-test-utils';

class ToDoButtons extends React.Component{
    handleClick(e){
        alert('ok');
    }

    handleClick2(){
        console.log('btn2 clicked');
        ReactTestUtils.Simulate.click(this.btn1)
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick.bind(this)} ref={ref=>this.btn1=ref}>弹出ok</button>
                <button onClick={this.handleClick2.bind(this)}>测试按钮</button>
            </div>
        );
    }
}

export default ToDoButtons;