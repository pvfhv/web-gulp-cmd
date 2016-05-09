/**
 * Created by anchao on 2016/5/9.
 */
export default class Todo_Control{
    constructor(aData){
        this.aData = aData;
    }

    addItem(obj){
        this.aData.push(obj);

        return this.aData;
    }

    removeItem(index){
        // var aNewData = this.aData.filter((item,index) =>{
        //     return item.id != id;
        // });

        // this.aData = aNewData;

        this.aData.splice(index,1);
        return this.aData;
    }
}