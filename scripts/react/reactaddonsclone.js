/**
 * Created by anchao on 2016/2/15.
 */

import cloneWithProps from 'react-addons-clone-with-props';

let _makeblue = function(ele){
  //return cloneWithProps(ele,{style:{color:'blue',background:'yellow'}});
    return React.cloneElement(ele,{style:{color:'blue',background:'green'}});
};

class AddonsClone extends React.Component{
    render(){
        let child = React.Children.map(this.props.children,_makeblue);

        return (
            <div>{child}</div>
        );
    }
}

export default AddonsClone;