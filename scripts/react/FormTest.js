/**
 * Created by anchao on 2016/1/27.
 */

class FormTest extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'hello',
            checked:false
        }
    }

    handleOnChange(e){
        this.setState({
            value:e.target.value
        });
    }

    handleOnClick(){
        this.setState({
            checked:!this.state.checked
        })
    }

    preventChange(e){
        e.preventDefault;
    }

    handleOnFocus(){
        var oDiv = ReactDOM.findDOMNode(this);
        $('#username',oDiv).focus();
    }

    handleOnFocus2(){
        //console.log(_.isElement(this.myTextInput)); //true
        this.myTextInput.focus();
    }

    render(){
        return (
            <div>
                 不受限：<input id="username" ref={(ref)=>this.myTextInput=ref} type="text"/><br />
                defaultValue/defaultChecked:<input type="text" defaultValue="abc"/><br />
                受限：<input type="text" value={this.state.value} onChange={this.handleOnChange.bind(this)}/><br/>
                onClick代替onChange:<input type="checkbox" checked={this.state.checked} onChange={this.preventChange.bind(this)} onClick={this.handleOnClick.bind(this)} /><br />
                <select multiple={true} defaultValue={["a","b"]}>
                    <option value="a">apple</option>
                    <option value="b">pear</option>
                    <option value="c">banana</option>
                </select>
                <button onClick={this.handleOnFocus.bind(this)}>获得焦点DOM方式</button>
                <button onClick={this.handleOnFocus2.bind(this)}>(推荐)获得焦点React方式</button>
            </div>
        );
    }
}

export default FormTest;