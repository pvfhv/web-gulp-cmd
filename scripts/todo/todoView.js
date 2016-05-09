/**
 * Created by anchao on 2016/5/9.
 */

class TodoView extends React.Component {
    constructor(props) {
        super(props);

        this.state = props.oData;
        this.dataControl = $(document.body).data('dataControl');
    }
    
    addItem(obj){
        this.setStateValue(this.dataControl.addItem(obj));
    }

    removeItem(index){
        this.setStateValue(this.dataControl.removeItem(index));
    }

    setStateValue(arr){
        this.setState({list:arr});
    }

    render() {
        var oData = this.state;

        return (
            <div>
                <ul>
                    {
                        oData.list.map((obj, index)=> {
                            return (
                                <li key={index}>{obj.name}-{obj.age}</li>
                            );
                        })
                    }
                </ul>
                <button class="form-control btn-info" onClick={this.addItem.bind(this,{id:Date.now(),name:'tom',age:Date.now().toString().slice(0,2)})}>增加</button>
                <button class="form-control btn-info" onClick={this.removeItem.bind(this,oData.list.length -1)}>删除最后一个</button>
            </div>
        );
    }
}

export default TodoView;