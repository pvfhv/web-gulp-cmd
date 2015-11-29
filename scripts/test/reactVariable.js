/**
 * Created by Administrator on 2015/11/29.
 */

var data = {
    var1: 'var1',
    var2: 'var2'
};

class VariableView extends React.Component{
    constructor(props){
        super(props);
        this.state=this.props;
    }

    handleChange(json){
        this.setState(json);
    }

    render(){
        var rows=[];

        for(var key in this.props){
            var row={key:this.props[key]};
            rows.push(<VariableRowView value={this.props[key]} key={key} handleChange={this.handleChange.bind(this)} />);
        }

        return (
            <div>
                {rows}
            </div>
        );
    }
}

class VariableRowView extends React.Component{
    render(){
        return (
            <input type="text" value={this.props.value} onChange={this.props.handleChange.bind(this)} />
        );
    }
}


ReactDOM.render(<VariableView {...data} />,document.querySelector('#first'));