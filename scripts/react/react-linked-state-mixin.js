// /**
//  * Created by anchao on 2016/1/29.
//  */
// import LinkedStateMixin from 'react-addons-linked-state-mixin';
//
// //正常
// //let TodoForm  = React.createClass({
// //    getInitialState:function(){
// //        return {
// //            message:'hello'
// //        }
// //    },
// //    handleChange:function(e){
// //        this.setState({
// //            message:e.target.value
// //        })
// //    },
// //    render:function(){
// //        return (
// //            <div>
// //                <input type="text" value={this.state.message} onChange={this.handleChange}/>
// //            </div>
// //        );
// //    }
// //});
//
// //双向绑定
// //let TodoForm = React.createClass({
// //    mixins:[LinkedStateMixin],
// //    getInitialState:function(){
// //        return {
// //            message:'hello',
// //            booleanValue:false
// //        }
// //    },
// //    render:function(){
// //        return (
// //          <div>
// //              <input type="text" valueLink={this.linkState('message')}/>
// //              <input type="checkbox" checkLink={this.linkState('booleanValue')}/>
// //          </div>
// //        );
// //    }
// //});
//
// //没有LinkedStateMixin
// //let TodoForm = React.createClass({
// //    getInitialState:function(){
// //        return {
// //            message:'hello'
// //        }
// //    },
// //    handleChange:function(newValue){
// //      this.setState({
// //          message:newValue
// //      });
// //    },
// //    render:function(){
// //        let linkValue={
// //            value:this.state.message,
// //            requestChange:this.handleChange
// //        };
// //
// //        return (
// //            <div>
// //                <input type="text" valueLink={linkValue}/>
// //            </div>
// //        );
// //    }
// //});
//
// //没有valueLink
// let TodoForm = React.createClass({
//     mixins:[LinkedStateMixin],
//     getInitialState:function(){
//         return {
//             message:'hello'
//         }
//     },
//     render:function(){
//         let valueLink = this.linkState('message');
//         let handleChange = function(e){
//             console.log( e.target );
//             valueLink.requestChange(e.target.value);
//         };
//
//         return (
//           <div>
//               <input type="text" ref={function(input) {
//                 if(input!=null){ input.focus();}
//               }} value={valueLink.value} onChange={handleChange} />
//           </div>
//         );
//     }
// });
//
// export default TodoForm;