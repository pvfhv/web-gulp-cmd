/**
 * Created by anchao on 2016/5/9.
 */

import TodoControl from './todo_control';
import TodoView from './todoView';

export default class Todo{
    init(){
        this.listLoad(this.layout);
    }

    layout(aData){
        var obj = {list:aData};
        ReactDOM.render(<TodoView oData={obj} />,document.querySelector('#container'));
    }

    listLoad(success){
        $.get('../simulates/collection.json',(aData) =>{
            this.dataControl = new TodoControl(aData);
            $(document.body).data('dataControl',this.dataControl);
            success(aData);
        });
    }
}