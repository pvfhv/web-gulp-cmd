/**
 * Created by anchao on 2016/2/22.
 */

class TopAPI extends React.Component{
    render(){
        let child = React.createElement('div',{style:{color:'red',background:'yellow'}},'<p>abc</p>');
        let temp1 = React.DOM.div(null,'hello');
        let b = React.isValidElement(child);//true
        console.log(b);

        //let fnNew = React.createFactory('div');
        //let child = fnNew({x:1});

        let fnNew = React.createFactory(TestEle);
        let newChild = fnNew({x:100});

        return (
            <div>
                {child}{newChild}
                <span>
                    {temp1}
                </span>
                <TestMap>
                    <div>第一项</div>
                    <div>第二项</div>
                    <div>第三项</div>
                </TestMap>
            </div>
        );
    }
}

var TestMap = React.createClass({

   render:function(){
       let arr = [];
       return (
           <ul>
               {
                   //React.Children.map(this.props.children,function(obj){
                   //    return (
                   //        <li>{obj}</li>
                   //    );
                   //})

                   React.Children.forEach(this.props.children,function(obj,index){
                       //console.log(React.isValidElement(obj));  //true
                       //console.log($.isPlainObject(obj.props));

                       for(var prop in obj.props){
                            arr.push(obj.props[prop]);
                       }
                   })
               }
               {arr.map(function(obj,index){
                   return (
                       <li key={index}>{obj}</li>
                   );
               })}
           </ul>
       );
   }
});

var TestEle = React.createClass({
   render:function(){
       return (
           <div>{this.props.x}</div>
       );
   }
});

TopAPI.PropTypes={
    x:React.PropTypes.number
};

export default TopAPI;