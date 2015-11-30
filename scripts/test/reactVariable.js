/**
 * Created by Administrator on 2015/11/29.
 */

var data = [{"name":"变量1","value": "var1"},{"name":"变量2","value":"var2"}];

class VariableView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            "var1":this.props[0],
            "var2":this.props[1]
        };
    }

    handleChange(key,json){
        var oldState=this.state;
        var othObj=_.omit(oldState,key);

        for(var k in othObj){
            if(othObj[k].value==json.value){
                alert('重名了~~');
                return;
            }
        }

        oldState[key]=json;
        this.setState(oldState);
    }

    render(){
        var rows=[];

        for(var key in this.state){
            rows.push(<VariableRowView row={this.state[key]} index={key} key={key} handleChange={this.handleChange.bind(this)} />);
        }

        return (
            <div>
                {rows}
            </div>
        );
    }
}

class VariableRowView extends React.Component{
    handleChange(){
        var row=this.props.row;
        var v =this.refs.tempVar.value;
        row.value=v;

        this.props.handleChange(this.props.index,row);
    }

    render(){
        return (
            <input type="text" ref="tempVar" value={this.props.row.value} onChange={this.handleChange.bind(this)} />
        );
    }
}


ReactDOM.render(<VariableView {...data} />,document.querySelector('#first'));