/**
 * Created by anchao on 2016/1/28.
 */

import ReactCssTransitionGroup from 'react-addons-css-transition-group';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:['hello', 'world', 'click', 'me']
        }
    }

    handleAdd(){
        let newItem = this.state.items.concat([prompt('Enter some text')]);
        this.setState({
            items:newItem
        });
    }

    handleRemove(i){
        console.log(i);
        let aNew = this.state.items.slice();
        aNew.splice(i,1);
        this.setState({
            items:aNew
        });
    }

    render(){
        let items = this.state.items.map((item,index)=>{
           return (
               <li key={item} onClick={this.handleRemove.bind(this,index)}>{item}</li>
           );
        });

        return (
            <div>
                <button onClick={this.handleAdd.bind(this)}>增加</button>
                <ReactCssTransitionGroup component="ul" className="animateList" transitionName={{enter:'enter',leave:'leave',appear:'appear'}} transitionEnterTimeout={500} transitionLeaveTimeout={300} transitionAppear={true} transitionAppearTimeout={500}>
                    {items}
                </ReactCssTransitionGroup>
            </div>
        );
    }
}


export default TodoList;