/**
 * Created by Anchao on 2015/11/12.
 */

let oFirst = $('#first').get(0);
//todo
//var TodoList=React.createClass({
//   render:function(){
//       return (
//           <ul>
//               {this.props.items.map(function(v,k){
//                   return (
//                       <li key={k}>{v}</li>
//                   );
//               })}
//           </ul>
//       );
//   }
//});
//
//var Main=React.createClass({
//    getInitialState:function(){
//        return {
//            items:[],
//            text:''
//        }
//    },
//    handleChange:function(e){
//        this.setState({text:e.target.value});
//    },
//    handleSubmit:function(e){
//        this.setState({
//            items:this.state.items.concat([this.state.text]),
//            text:''
//        });
//        e.preventDefault();
//    },
//    render:function(){
//        return (
//            <div>
//                <h3>todo</h3>
//                <TodoList items={this.state.items}></TodoList>
//                <form onSubmit={this.handleSubmit}>
//                    <input type="text" value={this.state.text} onChange={this.handleChange} />
//                    <button>{'add'+this.state.items.length}</button>
//                </form>
//            </div>
//        );
//    }
//});

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(function (v, k) {
                    return (
                        <li key={k}>{v}</li>
                    );
                })}
            </ul>
        );
    }
}

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ''
        };
    }

    handleChange(e){
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit(e){
        this.setState({
            items:this.state.items.concat([this.state.text]),
            text:''
        });

        e.preventDefault();
    }

    render(){
        return (
            <div>
                <h3>Todo</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" value={this.state.text} onChange={this.handleChange.bind(this)}/>
                    <button type="submit">{'add'+this.state.items.length}</button>
                </form>
            </div>
        );
    }
}

export default Todo;