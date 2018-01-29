// /**
//  * Created by anchao on 2016/2/16.
//  */
// import update from 'react-addons-update';
//
// class TestUpdate extends React.Component{
//     render(){
//         //let aOld = [1,2];
//         //let aNew = update(aOld,{$push:[3]});//1,2,3
//         //let aNew = update(aOld,{$unshift:[3]});//3,1,2
//
//         //let aOld = [1,2,{a:[12,14,15]}];
//         //let aNew = update(aOld,{2:{a:{$splice:[[1,1,100,200]]}}});//[1,2,{a:[12,100,200,15]}]
//
//         let aOld = {a:1,b:2};
//         //let aNew = update(aOld,{b:{$apply:function(x){return x*x}}}); //{a:1,b:4}
//         //let aNew = update(aOld,{b:{$set:aOld.b*aOld.b}});//{a:1,b:4}
//         let aNew = update(aOld,{$merge:{b:100,c:200}});//{a:1,b:100,c:200}
//
//         aOld = JSON.stringify(aOld);
//         aNew = JSON.stringify(aNew);
//         return (
//             <div>
//                 <span>old:{aOld}</span><br />
//                 <span>new:{aNew}</span>
//             </div>
//         );
//     }
// }
//
// export default TestUpdate;