// /**
//  * Created by anchao on 2016/2/17.
//  */
// import ShallowCompare from 'react-addons-shallow-compare';
//
// export default class ShallowCompareTest extends React.Component{
//     shouldComponentUpdate(nextProps,nextState){
//         return ShallowCompare(this,nextProps,nextState);
//     }
//
//     render(){
//         return (
//             <div className={this.props.className}>不变的值</div>
//         );
//     }
// }