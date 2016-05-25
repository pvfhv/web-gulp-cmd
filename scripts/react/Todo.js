/**
 * Created by Anchao on 2015/11/12.
 */

//孙子组件与爷爷组件通信
var ObservableObj = new Rx.Subject();


var TodoList = React.createClass({
    handleDoubleClick: function (e) {
        $(document.body).trigger('deleteRow', $(e.target).index());
        // ObservableObj.onNext({type: 'delete', index: $(e.target).index()});
    },
    componentDidMount: function () {
        $(document).on('click', '[type="checkbox"]', function () {
                $(this).parent().siblings().find('input').prop('checked', $(this).is(':checked'));
            }
        );
    },
    render: function () {
        return (
            <ul>
                {this.props.items.map(function (v, k) {
                    return (
                        <li onDoubleClick={this.handleDoubleClick} key={k}>
                            <input type="checkbox" value={v}/>
                            {v}
                        </li>
                    )
                }.bind(this))}
            </ul>
        );
    }
});

var Todo = React.createClass({
    getInitialState: function () {
        return {
            items: [],
            text: ''
        }
    },
    componentDidMount: function () {
        //观察者模式
        $(document.body).on('deleteRow', function (e, data) {
            var newItems = this.state.items.filter(function (v, k) {
                return k != data;
            });

            this.setState({items:newItems});
        }.bind(this));

        // ObservableObj.subscribe(function (data) {
        //     switch (data.type) {
        //         case 'delete':
        //             var newItems = this.state.items.filter(function (v, k) {
        //                 return k != data.index;
        //             });
        //
        //             this.setState({items: newItems});
        //             break;
        //     }
        // }.bind(this));
    },
    componentWillUnmount: function () {
        this.ObservableObj = null;
    },
    handleChange: function (e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function (e) {
        this.setState({
            items: this.state.items.concat([this.state.text]),
            text: ''
        });
        e.preventDefault();
    },
    render: function () {
        return (
            <div>
                <h3>todoList</h3>
                <TodoList items={this.state.items}></TodoList>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.text} onChange={this.handleChange}/>
                    <button>{'add' + this.state.items.length}</button>
                </form>
            </div>
        );
    }
});

//class TodoList extends React.Component {
//    render() {
//        return (
//            <ul>
//                {this.props.items.map(function (v, k) {
//                    return (
//                        <li key={k}>{v}</li>
//                    );
//                })}
//            </ul>
//        );
//    }
//}
//
//class Todo extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            items: [],
//            text: ''
//        };
//    }
//
//    handleChange(e){
//        this.setState({
//            text: e.target.value
//        });
//    }
//
//    handleSubmit(e){
//        this.setState({
//            items:this.state.items.concat([this.state.text]),
//            text:''
//        });
//
//        e.preventDefault();
//    }
//
//    render(){
//        return (
//            <div>
//                <h3>Todo</h3>
//                <TodoList items={this.state.items} />
//                <form onSubmit={this.handleSubmit.bind(this)}>
//                    <input type="text" value={this.state.text} onChange={this.handleChange.bind(this)}/>
//                    <button type="submit">{'add'+this.state.items.length}</button>
//                </form>
//            </div>
//        );
//    }
//}

export default Todo;