/**
 * Created by Anchao on 2015/11/12.
 */

//第一版
//class CommentBox extends React.Component{
//    render(){
//        return (
//            React.createElement('div',{className:'commentBox'},'Hello world这是里createElement生成的一些文字……')
//        );
//    }
//}

//第二版
class Comment extends React.Component{
    render(){
        return (
            <div className="comment" author={this.props.author}>{this.props.comment}</div>
        );
    }
}

class CommentList extends React.Component{
    render(){
        return (
            React.createElement('div',{className:'commentList'},['我是一个评论列表',this.props.author])
        );
    }
}

class CommentForm extends React.Component{
    render(){
        //var html=React.Children.map(this.props.children,function(v,k){return <span>{v}</span>;});
        return (
            React.createElement('div',{className:'commentForm'},['评论表单',this.props.children])
        );
    }
}

class CommentBox extends React.Component{
    render(){
        return (
            //<div className="commentBox">
            //    <h1>Comments</h1>
            //    <CommentList />
            //    <CommentForm />
            //</div>

            React.createElement('div',{className:'commentBox'},[<h1 key="a">Comments</h1>,<CommentList key="b" author="anchao" />,<CommentForm key="c"><i>a</i><i>b</i></CommentForm>])
        );
    }
}

ReactDOM.render(React.createElement(CommentBox,null),$('#first').get(0));