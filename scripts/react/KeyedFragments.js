/**
 * Created by anchao on 2016/2/15.
 */
import createFragment from 'react-addons-create-fragment';

//第一种方式
//class Swapper extends React.Component{
//    render(){
//        let children;
//        if(this.props.swapped){
//            children = [this.props.leftChildren,this.props.rightChildren];
//        }else {
//            children = [this.props.rightChildren,this.props.leftChildren];
//        }
//
//        return (
//            <div>{children}</div>
//        );
//    }
//}
//


//推荐
class Swapper extends React.Component{
    render(){
        let children;
        if(this.props.swapped){
            children = createFragment({
                left:this.props.leftChildren,
                right:this.props.rightChildren
            });
        }else {
            children = createFragment({
                left:this.props.rightChildren,
                right:this.props.leftChildren
            });
        }

        return (
            <div>{children}</div>
        );
    }
}

Swapper.propTypes={
    leftChildren:React.PropTypes.node,
    rightChildren:React.PropTypes.node,
    swapped:React.PropTypes.bool
};

export default Swapper;