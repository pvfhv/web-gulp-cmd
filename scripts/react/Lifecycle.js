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
        //console.log(e.which);
    },
    _handleFocus:function(e){
        console.log(e.DOMEventTarget);
        console.log(e.relatedTarget);
    },
    _handleDragStart:function(e){
        var disX = e.pageX - $(e.currentTarget).offset().left;
        var disY = e.pageY - $(e.currentTarget).offset().top;
        $(e.currentTarget).data('initPos',{disX:disX,disY:disY});
    },
    _handleDragging:function(e){
        var oPos = $(e.currentTarget).data('initPos');
        $(e.currentTarget).css({left:e.pageX - oPos.disX,top:e.pageY - oPos.disY});
    },
    _handleDragEnd:function(e){
        var oPos = $(e.currentTarget).position();
        $(e.currentTarget).data('initPos',{left:oPos.left,top:oPos.top});
    },
    _handleSelect:function(e){
        console.log('select');
    },
    _handleScroll:function(e){
        console.log(e.detail+',target='+e.currentTarget+',view='+e.view);
    },
    _handleWheel:function(e){
        console.log(`deltaMode=${e.deltaMode},e.deltaX=${e.deltaX},e.deltaY=${e.deltaY},e.deltaZ={e.deltaZ}`);
    },
    _handleTransition:function(e){
        console.log(`propertyName:${e.propertyName},pseudoElement:${e.pseudoElement},elapsedTime:${e.elapsedTime}`)
    },
    render: function () {
        return (
            <div>
                <span onClick={this.handleClick}>isClick:{this.state.isClick?"yes":"no"}</span><br />
                <input type="text" value1={this.state.x} onInput={this._handleInput} onCompositionStart={this._handleCompositionStart} onCompositionEnd={this._handleCompositionEnd} onCompositionUpdate={this._handleCompositionUpdate} onChange1={this._handleInputChange}/><br />
                <input type="text" onFocus={this._handleFocus} onKeyDown={this._handleKeyDown} /><br />
                <input type="button" value="移除组件" onClick={this.removeComponent}/><br />
                <input type="button" value="重新渲染" onClick={this.rerender}/>
                <div id="dragdiv" onScroll={this._handleScroll} onWheel={this._handleWheel} draggable="true" onDragStart={this._handleDragStart} onDrag={this._handleDragging} onDragEnd={this._handleDragEnd} onTransitionEnd={this._handleTransition}>我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动我可以拖动</div>
                <input type="text" onSelect={this._handleSelect} defaultValue="测试一下选中文字" />
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