/**
 * Created by anchao on 2016/3/15.
 */

var n = 0;
var Component = React.createClass({
    getInitialState: function () {
        return {
            isClick: !1,
            x:100
        }
    },
    componentWillMount:function(){
        //console.log(n++);
    },
    componentWillReceiveProps:function(nextProps){
        console.log(`this.props.n=${this.props.n},nextProps.n=${nextProps.n}`);
    },
    componentDidUpdate:function(preProps,preState){
        console.log(`preProps=${JSON.stringify(preProps)},preState=${JSON.stringify(preState)}`);
    },
    componentWillUnmount:function(){
        console.log('组件将要被删除');
    },
    handleClick:function(e){
        console.log(e.timeStamp);
        console.log(e.currentTarget);
        this.setState({
           isClick:!this.state.isClick%2
        });

        //let oEs = new EsSix('tom');
        //console.log(oEs.getName());
    },
    rerender:function(){
        ReactDOM.render(<Component n={n++} />,document.getElementById('first'));
    },
    removeComponent:function(){
        ReactDOM.unmountComponentAtNode(document.getElementById('first'))&&console.log('移除成功');
    },
    _handleInputChange:function(e){
        this.setState({
            x:$(e.currentTarget).val()
        });
    },
    _handleInput:function(e){
        //if($(e.currentTarget).prop('comStart')){
        //    return;
        //}
        //console.log(e.currentTarget.value.length);
    },
    _handleCompositionStart:function(e){
        //$(e.currentTarget).prop('comStart',true);
        //console.log('中文输入开始'+e.data);
    },
    _handleCompositionEnd:function(e){
        //$(e.currentTarget).prop('comStart',false);
        //console.log('中文输入结束');
    },
    _handleCompositionUpdate:function(e){
        //console.log('Update'+e.data);
    },
    _handleKeyDown:function(e){
        //console.log(e.altKey);
        //console.log(e.getModifierState('Alt'));
        //console.log(e.key);//Alt shift。。
        //console.log(e.locale);
        //console.log(e.repeat);
        console.log(e.which);
    },
    _handleFocus:function(e){
        console.log(e.DOMEventTarget);
    },
    _handleDragStart:function(e){
        console.log(e.clientX);
        e.preventDefault();
    },
    render: function () {
        return (
            <div>
                <span onClick={this.handleClick}>isClick:{this.state.isClick?"yes":"no"}</span><br />
                <input type="text" value1={this.state.x} onInput={this._handleInput} onCompositionStart={this._handleCompositionStart} onCompositionEnd={this._handleCompositionEnd} onCompositionUpdate={this._handleCompositionUpdate} onChange1={this._handleInputChange}/><br />
                <input type="text" onFocus={this._handleFocus} onKeyDown={this._handleKeyDown} /><br />
                <input type="button" value="移除组件" onClick={this.removeComponent}/><br />
                <input type="button" value="重新渲染" onClick={this.rerender}/>
                <div id="dragdiv" onDragStart={this._handleDragStart}>我可以拖动</div>
            </div>
        );
    }
});

class EsSix{
    constructor(name){
        this.name = name;
    }

    getName(){
        let [name,age] = [];
        name = this.name;
        return name;
    }
}

export default Component;